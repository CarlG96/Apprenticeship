import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { AppDataSource } from '../src/data-source';
import { LeaveRequest } from '../src/entity/LeaveRequest';
import { LeaveRequestStatus } from '../src/entity/LeaveRequestStatus';
import { LeaveType } from '../src/entity/LeaveType';
import { LeaveBalance } from '../src/entity/LeaveBalance';
import { User } from '../src/entity/User';

interface JwtAuthRequest extends Request {
  user?: {
    userId: number;
    role: string;
    managerId?: number;
  };
}

export class StaffRequestController {
  // POST me/leave-requests
  // Creates a new annual leave request with initial Pending status.
  public async createLeaveRequest(req: JwtAuthRequest, res: Response): Promise<void> {
    try {
      const leaveRequestRepo = AppDataSource.getRepository(LeaveRequest);
      const statusRepo = AppDataSource.getRepository(LeaveRequestStatus);
      const leaveTypeRepo = AppDataSource.getRepository(LeaveType);
      const userRepo = AppDataSource.getRepository(User);

      const { leaveTypeId, startDate, endDate } = req.body;
      const userId = req.user?.userId;

      if (!userId) {
        res.status(StatusCodes.UNAUTHORIZED).json({ error: 'User not authenticated' });
        return;
      }

      const user = await userRepo.findOne({ where: { id: userId } });
      if (!user) {
        res.status(StatusCodes.UNAUTHORIZED).json({ error: 'User not found' });
        return;
      }

      const leaveType = await leaveTypeRepo.findOne({ where: { id: leaveTypeId } });
      if (!leaveType) {
        res.status(StatusCodes.BAD_REQUEST).json({ error: 'Invalid leave type' });
        return;
      }

      const pendingStatus = await statusRepo.findOne({ where: { status: 'Pending' } });
      if (!pendingStatus) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Pending status not found' });
        return;
      }

      const leaveRequest = new LeaveRequest();
      leaveRequest.user = user;
      leaveRequest.leaveType = leaveType;
      leaveRequest.status = pendingStatus;
      leaveRequest.startDate = new Date(startDate);
      leaveRequest.endDate = new Date(endDate);

      await leaveRequestRepo.save(leaveRequest);

      res.status(StatusCodes.CREATED).json(leaveRequest);
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
  }

  // PATCH /staff/me/leave-requests/:requestId/cancel
  // Allows staff to cancel an existing leave request.
  public async cancelLeaveRequest(req: JwtAuthRequest, res: Response): Promise<void> {
    try {
      const leaveRequestRepo = AppDataSource.getRepository(LeaveRequest);
      const userRepo = AppDataSource.getRepository(User);
      const { requestId } = req.params;
      const userId = req.user?.userId;

      if (!userId) {
        res.status(StatusCodes.UNAUTHORIZED).json({ error: 'User not authenticated' });
        return;
      }

      const user = await userRepo.findOne({ where: { id: userId } });
      if (!user) {
        res.status(StatusCodes.UNAUTHORIZED).json({ error: 'User not found' });
        return;
      }

      const leaveRequest = await leaveRequestRepo.findOne({
        where: { id: parseInt(requestId as string), user: { id: user.id } },
        relations: ['user', 'leaveType', 'status']
      });

      if (!leaveRequest) {
        res.status(StatusCodes.NOT_FOUND).json({ error: 'Leave request not found' });
        return;
      }

      await leaveRequest.cancel();
      await leaveRequestRepo.save(leaveRequest);

      res.status(StatusCodes.OK).json(leaveRequest);
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
  }

  // GET /staff/me/leave-requests
  // Returns all requests with their statuses.
  public async getMyLeaveRequests(req: JwtAuthRequest, res: Response): Promise<void> {
    try {
      const leaveRequestRepo = AppDataSource.getRepository(LeaveRequest);
      const userRepo = AppDataSource.getRepository(User);
      const userId = req.user?.userId;

      if (!userId) {
        res.status(StatusCodes.UNAUTHORIZED).json({ error: 'User not authenticated' });
        return;
      }

      const user = await userRepo.findOne({ where: { id: userId } });
      if (!user) {
        res.status(StatusCodes.UNAUTHORIZED).json({ error: 'User not found' });
        return;
      }

      const leaveRequests = await leaveRequestRepo.find({
        where: { user: { id: user.id } },
        relations: ['leaveType', 'status']
      });

      res.status(StatusCodes.OK).json(leaveRequests);
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
  }

  // GET /staff/me/leave-balance
  // Returns remaining/used leave for the current business year.
  public async getMyLeaveBalance(req: JwtAuthRequest, res: Response): Promise<void> {
    try {
      const balanceRepo = AppDataSource.getRepository(LeaveBalance);
      const userRepo = AppDataSource.getRepository(User);
      const userId = req.user?.userId;

      if (!userId) {
        res.status(StatusCodes.UNAUTHORIZED).json({ error: 'User not authenticated' });
        return;
      }

      const user = await userRepo.findOne({ where: { id: userId } });
      if (!user) {
        res.status(StatusCodes.UNAUTHORIZED).json({ error: 'User not found' });
        return;
      }

      const balances = await balanceRepo.find({
        where: { user: { id: user.id } },
        relations: ['leaveType']
      });

      res.status(StatusCodes.OK).json(balances);
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
  }
}

