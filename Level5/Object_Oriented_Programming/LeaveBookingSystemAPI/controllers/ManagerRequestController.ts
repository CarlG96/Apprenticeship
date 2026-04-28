import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export class ManagerRequestController {
  // GET /manager/leave-requests/outstanding
  // Returns pending requests for staff assigned to this manager.
  public static getOutstandingTeamRequests(req: Request, res: Response): void {
    res.status(StatusCodes.NOT_IMPLEMENTED).send('TODO: Manager view outstanding team requests');
  }

  // PATCH /manager/leave-requests/:requestId/approve
  // Approves a team member leave request.
  public static approveLeaveRequest(req: Request, res: Response): void {
    res.status(StatusCodes.NOT_IMPLEMENTED).send('TODO: Manager approve request');
  }

  // PATCH /manager/leave-requests/:requestId/reject
  // Rejects a team member leave request.
  public static rejectLeaveRequest(req: Request, res: Response): void {
    res.status(StatusCodes.NOT_IMPLEMENTED).send('TODO: Manager reject request');
  }

  // GET /manager/staff/:staffId/leave-balance
  // Returns remaining annual leave for a member of staff.
  public static getStaffLeaveBalance(req: Request, res: Response): void {
    res.status(StatusCodes.NOT_IMPLEMENTED).send('TODO: Manager view staff leave balance');
  }
}
