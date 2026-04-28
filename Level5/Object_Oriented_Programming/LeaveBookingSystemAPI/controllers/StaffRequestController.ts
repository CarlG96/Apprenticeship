import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export class StaffRequestController {
  // POST /staff/me/leave-requests
  // Creates a new annual leave request with initial Pending status.
  public static createLeaveRequest(req: Request, res: Response): void {
    res.status(StatusCodes.NOT_IMPLEMENTED).send('TODO: Staff create leave request (Pending)');
  }

  // PATCH /staff/me/leave-requests/:requestId/cancel
  // Allows staff to cancel an existing leave request.
  public static cancelLeaveRequest(req: Request, res: Response): void {
    res.status(StatusCodes.NOT_IMPLEMENTED).send('TODO: Staff cancel leave request');
  }

  // GET /staff/me/leave-requests
  // Returns all requests with their statuses.
  public static getMyLeaveRequests(req: Request, res: Response): void {
    res.status(StatusCodes.OK).send('TODO: Staff view own leave requests and statuses');
  }

  // GET /staff/me/leave-balance
  // Returns remaining/used leave for the current business year.
  public static getMyLeaveBalance(req: Request, res: Response): void {
    res.status(StatusCodes.NOT_IMPLEMENTED).send('TODO: Staff view leave balance');
  }
}
