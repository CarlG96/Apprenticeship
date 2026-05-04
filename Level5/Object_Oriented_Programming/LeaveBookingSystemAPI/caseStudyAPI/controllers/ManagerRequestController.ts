import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { AppDataSource } from '../src/data-source';
import { LeaveRequest } from '../src/entity/LeaveRequest';
import { LeaveRequestStatus } from '../src/entity/LeaveRequestStatus';
import { LeaveBalance } from '../src/entity/LeaveBalance';
import { User } from '../src/entity/User';

interface JwtAuthRequest extends Request {
  user?: {
    userId: number;
    role: string;
    managerId?: number;
  };
}

export class ManagerRequestController {
  // GET /manager/leave-requests/outstanding
  // Returns pending requests for staff assigned to this manager.
  public async getOutstandingTeamRequests(req: JwtAuthRequest, res: Response): Promise<void> {
    try {
      const leaveRequestRepo = AppDataSource.getRepository(LeaveRequest);
      const statusRepo = AppDataSource.getRepository(LeaveRequestStatus);
      const userRepo = AppDataSource.getRepository(User);

      const managerId = req.user?.userId;

      if (!managerId) {
        res.status(StatusCodes.UNAUTHORIZED).json({ error: 'User not authenticated' });
        return;
      }

      const manager = await userRepo.findOne({ where: { id: managerId } });
      if (!manager) {
        res.status(StatusCodes.UNAUTHORIZED).json({ error: 'Manager not found' });
        return;
      }

      const pendingStatus = await statusRepo.findOne({ where: { status: 'Pending' } });
      if (!pendingStatus) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Pending status not found' });
        return;
      }

      const leaveRequests = await leaveRequestRepo.find({
        where: { status: pendingStatus, user: { manager: { id: manager.id } } },
        relations: ['user', 'leaveType', 'status']
      });

      res.status(StatusCodes.OK).json(leaveRequests);
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
  }

  // PATCH /manager/leave-requests/:requestId/approve
  // Approves a team member leave request.
  public async approveLeaveRequest(req: JwtAuthRequest, res: Response): Promise<void> {
    try {
      const leaveRequestRepo = AppDataSource.getRepository(LeaveRequest);
      const userRepo = AppDataSource.getRepository(User);
      const { requestId } = req.params;
      const managerId = req.user?.userId;

      if (!managerId) {
        res.status(StatusCodes.UNAUTHORIZED).json({ error: 'User not authenticated' });
        return;
      }

      const manager = await userRepo.findOne({ where: { id: managerId } });
      if (!manager) {
        res.status(StatusCodes.UNAUTHORIZED).json({ error: 'Manager not found' });
        return;
      }

      const leaveRequest = await leaveRequestRepo.findOne({
        where: { id: parseInt(requestId as string), user: { manager: { id: manager.id } } },
        relations: ['user', 'leaveType', 'status']
      });

      if (!leaveRequest) {
        res.status(StatusCodes.NOT_FOUND).json({ error: 'Leave request not found or not under your management' });
        return;
      }

      await leaveRequest.approve();
      await leaveRequestRepo.save(leaveRequest);

      res.status(StatusCodes.OK).json(leaveRequest);
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
  }

  // PATCH /manager/leave-requests/:requestId/reject
  // Rejects a team member leave request.
  public async rejectLeaveRequest(req: JwtAuthRequest, res: Response): Promise<void> {
    try {
      const leaveRequestRepo = AppDataSource.getRepository(LeaveRequest);
      const userRepo = AppDataSource.getRepository(User);
      const { requestId } = req.params;
      const managerId = req.user?.userId;

      if (!managerId) {
        res.status(StatusCodes.UNAUTHORIZED).json({ error: 'User not authenticated' });
        return;
      }

      const manager = await userRepo.findOne({ where: { id: managerId } });
      if (!manager) {
        res.status(StatusCodes.UNAUTHORIZED).json({ error: 'Manager not found' });
        return;
      }

      const leaveRequest = await leaveRequestRepo.findOne({
        where: { id: parseInt(requestId as string), user: { manager: { id: manager.id } } },
        relations: ['user', 'leaveType', 'status']
      });

      if (!leaveRequest) {
        res.status(StatusCodes.NOT_FOUND).json({ error: 'Leave request not found or not under your management' });
        return;
      }

      await leaveRequest.reject();
      await leaveRequestRepo.save(leaveRequest);

      res.status(StatusCodes.OK).json(leaveRequest);
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
  }

  // GET /manager/staff/:staffId/leave-balance
  // Returns remaining annual leave for a member of staff.
  public async getStaffLeaveBalance(req: JwtAuthRequest, res: Response): Promise<void> {
    try {
      const balanceRepo = AppDataSource.getRepository(LeaveBalance);
      const userRepo = AppDataSource.getRepository(User);
      const { staffId } = req.params;
      const managerId = req.user?.userId;

      if (!managerId) {
        res.status(StatusCodes.UNAUTHORIZED).json({ error: 'User not authenticated' });
        return;
      }

      const manager = await userRepo.findOne({ where: { id: managerId } });
      if (!manager) {
        res.status(StatusCodes.UNAUTHORIZED).json({ error: 'Manager not found' });
        return;
      }

      const staff = await userRepo.findOne({
        where: { id: parseInt(staffId as string), manager: { id: manager.id } }
      });

      if (!staff) {
        res.status(StatusCodes.NOT_FOUND).json({ error: 'Staff member not found or not under your management' });
        return;
      }

      const balances = await balanceRepo.find({
        where: { user: { id: staff.id } },
        relations: ['leaveType']
      });

      res.status(StatusCodes.OK).json(balances);
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
  }
}

