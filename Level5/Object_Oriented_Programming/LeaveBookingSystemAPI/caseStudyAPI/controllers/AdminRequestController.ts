import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { AppDataSource } from '../src/data-source';
import { User } from '../src/entity/User';
import { Role } from '../src/entity/Role';
import { LeaveType } from '../src/entity/LeaveType';
import { LeaveBalance } from '../src/entity/LeaveBalance';
import { LeaveRequest } from '../src/entity/LeaveRequest';
import { LeaveRequestStatus } from '../src/entity/LeaveRequestStatus';

export class AdminRequestController {
  // POST staff
  // Adds a new staff member and creates default leave balances.
  public async addStaffMember(req: Request, res: Response): Promise<void> {

    const { firstName, lastName, email, password, roleId, managerId } = req.body;

    console.log(password);
    if (!firstName || !lastName || !email || !password || !roleId) {
      res.status(StatusCodes.BAD_REQUEST).send('Missing required user fields');
      return;
    }

    const userRepository = AppDataSource.getRepository(User);
    const roleRepository = AppDataSource.getRepository(Role);
    const leaveTypeRepository = AppDataSource.getRepository(LeaveType);
    const leaveBalanceRepository = AppDataSource.getRepository(LeaveBalance);

    const existingUser = await userRepository.findOne({ where: { email } });
    if (existingUser) {
      res.status(StatusCodes.CONFLICT).send('A user with that email already exists');
      return;
    }

    const role = await roleRepository.findOne({ where: { id: roleId } });
    if (!role) {
      res.status(StatusCodes.BAD_REQUEST).send('Invalid roleId');
      return;
    }

    let manager: User | null = null;
    if (managerId) {
      manager = await userRepository.findOne({ where: { id: managerId } });
      if (!manager) {
        res.status(StatusCodes.BAD_REQUEST).send('Manager not found');
        return;
      }
    }

    let annualLeave = await leaveTypeRepository.findOne({ where: { typeName: 'Annual Leave' } });
    let sickLeave = await leaveTypeRepository.findOne({ where: { typeName: 'Sick' } });

    if (!annualLeave) {
      annualLeave = leaveTypeRepository.create({ typeName: 'Annual Leave' });
    }
    if (!sickLeave) {
      sickLeave = leaveTypeRepository.create({ typeName: 'Sick' });
    }

    await leaveTypeRepository.save([annualLeave, sickLeave]);

    const user = userRepository.create({
      firstName,
      lastName,
      email,
      passwordHash: password,
      role,
      manager: manager || undefined,
    });

    const savedUser = await userRepository.save(user);

    const balances = [
      leaveBalanceRepository.create({
        user: savedUser,
        leaveType: annualLeave,
        remaining: 25,
      }),
      leaveBalanceRepository.create({
        user: savedUser,
        leaveType: sickLeave,
        remaining: 5,
      }),
    ];

    await leaveBalanceRepository.save(balances);

    res.status(StatusCodes.CREATED).json({
      id: savedUser.id,
      firstName: savedUser.firstName,
      lastName: savedUser.lastName,
      email: savedUser.email,
      role: role.name,
      managerId: manager?.id ?? null,
      leaveBalances: [
        { type: 'Annual Leave', remaining: 25 },
        { type: 'Sick', remaining: 5 },
      ],
    });
  }

  // PATCH staff/:staffId/profile
  // Updates role and/or manager relationship for a staff member.
  public async amendStaffProfile(req: Request, res: Response): Promise<void> {
    try {
      const staffId = parseInt(req.params.staffId as string, 10);
      const { roleId, managerId } = req.body;

      if (!roleId && managerId === undefined) {
        res.status(StatusCodes.BAD_REQUEST).json({ error: 'At least one of roleId or managerId must be provided' });
        return;
      }

      const userRepository = AppDataSource.getRepository(User);
      const roleRepository = AppDataSource.getRepository(Role);

      const staff = await userRepository.findOne({ where: { id: staffId }, relations: ['role', 'manager'] });
      if (!staff) {
        res.status(StatusCodes.NOT_FOUND).json({ error: 'Staff member not found' });
        return;
      }

      if (roleId) {
        const role = await roleRepository.findOne({ where: { id: roleId } });
        if (!role) {
          res.status(StatusCodes.BAD_REQUEST).json({ error: 'Invalid roleId' });
          return;
        }
        staff.role = role;
      }

      if (managerId !== undefined) {
        if (managerId === null) {
          staff.manager = null;
        } else {
          const manager = await userRepository.findOne({ where: { id: managerId } });
          if (!manager) {
            res.status(StatusCodes.BAD_REQUEST).json({ error: 'Manager not found' });
            return;
          }
          staff.manager = manager;
        }
      }

      const updatedStaff = await userRepository.save(staff);

      res.status(StatusCodes.OK).json({
        id: updatedStaff.id,
        firstName: updatedStaff.firstName,
        lastName: updatedStaff.lastName,
        email: updatedStaff.email,
        roleId: updatedStaff.role.id,
        roleName: updatedStaff.role.name,
        managerId: updatedStaff.manager?.id ?? null,
      });
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
  }

  // GET /leave-requests/outstanding
  // Returns outstanding leave requests by filter/scope.
  public async getOutstandingRequests(req: Request, res: Response): Promise<void> {
    try {
      const leaveRequestRepo = AppDataSource.getRepository(LeaveRequest);
      const statusRepo = AppDataSource.getRepository(LeaveRequestStatus);

      const staffId = req.query.staffId ? parseInt(req.query.staffId as string, 10) : undefined;
      const managerId = req.query.managerId ? parseInt(req.query.managerId as string, 10) : undefined;

      if (req.query.staffId && Number.isNaN(staffId)) {
        res.status(StatusCodes.BAD_REQUEST).json({ error: 'Invalid staffId' });
        return;
      }

      if (req.query.managerId && Number.isNaN(managerId)) {
        res.status(StatusCodes.BAD_REQUEST).json({ error: 'Invalid managerId' });
        return;
      }

      const pendingStatus = await statusRepo.findOne({ where: { status: 'Pending' } });
      if (!pendingStatus) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Pending status not found' });
        return;
      }

      const query = leaveRequestRepo.createQueryBuilder('leaveRequest')
        .leftJoinAndSelect('leaveRequest.user', 'user')
        .leftJoinAndSelect('user.manager', 'manager')
        .leftJoinAndSelect('leaveRequest.leaveType', 'leaveType')
        .leftJoinAndSelect('leaveRequest.status', 'status')
        .where('status.id = :pendingStatusId', { pendingStatusId: pendingStatus.id });

      if (staffId !== undefined) {
        query.andWhere('user.id = :staffId', { staffId });
      }

      if (managerId !== undefined) {
        query.andWhere('manager.id = :managerId', { managerId });
      }

      const leaveRequests = await query.getMany();

      res.status(StatusCodes.OK).json(leaveRequests);
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
  }

  // PATCH staff/:staffId/annual-leave-allocation
  // Adjusts annual leave entitlement.
  public async amendLeaveAllocation(req: Request, res: Response): Promise<void> {
    try {
      const staffId = parseInt(req.params.staffId as string, 10);
      const { leaveTypeId, leaveTypeName, remaining } = req.body;

      if (Number.isNaN(staffId)) {
        res.status(StatusCodes.BAD_REQUEST).json({ error: 'Invalid staffId' });
        return;
      }

      if (remaining === undefined || typeof remaining !== 'number' || remaining < 0) {
        res.status(StatusCodes.BAD_REQUEST).json({ error: 'Remaining leave must be a non-negative number' });
        return;
      }

      if (!leaveTypeId && !leaveTypeName) {
        res.status(StatusCodes.BAD_REQUEST).json({ error: 'leaveTypeId or leaveTypeName is required' });
        return;
      }

      const userRepository = AppDataSource.getRepository(User);
      const leaveTypeRepository = AppDataSource.getRepository(LeaveType);
      const leaveBalanceRepository = AppDataSource.getRepository(LeaveBalance);

      const staff = await userRepository.findOne({ where: { id: staffId } });
      if (!staff) {
        res.status(StatusCodes.NOT_FOUND).json({ error: 'Staff member not found' });
        return;
      }

      const leaveType = await leaveTypeRepository.findOne({
        where: leaveTypeId ? { id: leaveTypeId } : { typeName: leaveTypeName },
      });

      if (!leaveType) {
        res.status(StatusCodes.BAD_REQUEST).json({ error: 'Leave type not found' });
        return;
      }

      let balance = await leaveBalanceRepository.findOne({
        where: { user: { id: staff.id }, leaveType: { id: leaveType.id } },
      });

      if (!balance) {
        balance = leaveBalanceRepository.create({
          user: staff,
          leaveType,
          remaining,
        });
      } else {
        balance.remaining = remaining;
      }

      const updatedBalance = await leaveBalanceRepository.save(balance);

      res.status(StatusCodes.OK).json({
        userId: staff.id,
        leaveTypeId: leaveType.id,
        leaveTypeName: leaveType.typeName,
        remaining: updatedBalance.remaining,
      });
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
  }

  // PATCH leave-requests/:requestId/approve
  // Approves requests on behalf of managers.
  public async approveOnBehalfOfManager(req: Request, res: Response): Promise<void> {
    try {
      const leaveRequestRepo = AppDataSource.getRepository(LeaveRequest);
      const { requestId } = req.params;

      const leaveRequest = await leaveRequestRepo.findOne({
        where: { id: parseInt(requestId as string) },
        relations: ['user', 'leaveType', 'status']
      });

      if (!leaveRequest) {
        res.status(StatusCodes.NOT_FOUND).json({ error: 'Leave request not found' });
        return;
      }

      await leaveRequest.approve();
      await leaveRequestRepo.save(leaveRequest);

      res.status(StatusCodes.OK).json(leaveRequest);
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
  }

  // GET analytics/leave-usage
  // Returns system-wide leave usage tracking data.
  public async getSystemLeaveUsage(req: Request, res: Response): Promise<void> {
    try {
      const leaveRequestRepo = AppDataSource.getRepository(LeaveRequest);
      const leaveBalanceRepo = AppDataSource.getRepository(LeaveBalance);
      const userRepo = AppDataSource.getRepository(User);

      // Total employees
      const totalEmployees = await userRepo.count();

      // Leave requests by status
      const requestsByStatus = await leaveRequestRepo.createQueryBuilder('lr')
        .select('status.status', 'status')
        .addSelect('COUNT(lr.id)', 'count')
        .leftJoin('lr.status', 'status')
        .groupBy('status.status')
        .getRawMany();

      // Total days requested by leave type and status
      const daysByTypeAndStatus = await leaveRequestRepo.createQueryBuilder('lr')
        .select('lt.typeName', 'leaveType')
        .addSelect('status.status', 'status')
        .addSelect('SUM(DATEDIFF(lr.end_date, lr.start_date) + 1)', 'totalDays')
        .leftJoin('lr.leaveType', 'lt')
        .leftJoin('lr.status', 'status')
        .groupBy('lt.typeName')
        .addGroupBy('status.status')
        .getRawMany();

      // Average remaining leave by type
      const avgRemainingByType = await leaveBalanceRepo.createQueryBuilder('lb')
        .select('lt.typeName', 'leaveType')
        .addSelect('AVG(lb.remaining)', 'avgRemaining')
        .leftJoin('lb.leaveType', 'lt')
        .groupBy('lt.typeName')
        .getRawMany();

      res.status(StatusCodes.OK).json({
        totalEmployees,
        requestsByStatus,
        daysByTypeAndStatus,
        avgRemainingByType,
      });
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
  }
}