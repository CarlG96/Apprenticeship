import { Router } from "express";
import { Request, Response } from 'express'; 
import { StatusCodes } from "http-status-codes"; 
import { AuthController } from "../controllers/AuthController";
import { StaffRequestController } from "../controllers/StaffRequestController";
import { ManagerRequestController } from "../controllers/ManagerRequestController";
import { AdminRequestController } from "../controllers/AdminRequestController";
 
export class MyRouter { 
  constructor(private router: Router) { 
    this.addRoutes();  
  } 
 
  public getRouter(): Router { 
    return this.router; 
  }  
 
  private addRoutes() { 
    // ------------------------------------------------------------
    // Leave Booking System API - Prototype Route Specification
    // ------------------------------------------------------------
    // Security model (to be implemented with middleware):
    // 1) Public route: POST /auth/login (returns JWT)
    // 2) All other routes require JWT authentication
    // 3) Role-based authorisation for Staff, Manager, Admin endpoints
    // 4) Unauthorised access attempts should be logged
    // 5) Rate limiting should be applied per endpoint
    // 6) Obfuscate server version via HTTP headers
    //
    // Suggested middleware order in Server setup:
    // app.disable('x-powered-by');
    // app.use(helmet());
    // app.use(rateLimit(...));
    // app.use('/api', authenticateJwt, this.router);

    // -----------------
    // Public auth route
    // -----------------
    // POST /auth/login
    // Accepts user credentials and returns JWT token for authenticated use.
    this.router.post('/auth/login', AuthController.login);

    // -------------------------------------------------
    // Generic test routes (existing starter functionality)
    // -------------------------------------------------
    this.router.get('/', (req: Request, res: Response) => { 
      res.status(StatusCodes.OK).send("reached index"); 
    }); 
      
    this.router.get('/other', (req: Request, res: Response) => { 
      res.status(StatusCodes.OK).send("reached other"); 
    }); 

    // =============================================================
    // STAFF ENDPOINTS
    // Base idea: /staff/me/* routes use identity from JWT token
    // =============================================================

    // 1) Request annual leave (new requests start as Pending)
    // POST /staff/me/leave-requests
    // Body example: { startDate, endDate, reason? }
    this.router.post('/staff/me/leave-requests', StaffRequestController.createLeaveRequest);

    // 2) Cancel an existing leave request (approved or otherwise)
    // PATCH /staff/me/leave-requests/:requestId/cancel
    this.router.patch('/staff/me/leave-requests/:requestId/cancel', StaffRequestController.cancelLeaveRequest);

    // 3) View all leave requests and statuses for the logged-in staff member
    // GET /staff/me/leave-requests
    // Returns list with statuses: Pending | Approved | Rejected | Cancelled
    this.router.get('/staff/me/leave-requests', StaffRequestController.getMyLeaveRequests);

    // 4) View remaining annual leave and/or used days for current business year
    // GET /staff/me/leave-balance
    // Business year assumed: April 1st to March 31st
    this.router.get('/staff/me/leave-balance', StaffRequestController.getMyLeaveBalance);

    // =============================================================
    // MANAGER ENDPOINTS
    // Manager can act on requests for assigned team members
    // =============================================================

    // 1) View outstanding annual leave requests for assigned staff
    // GET /manager/leave-requests/outstanding?startDate=&endDate=
    this.router.get('/manager/leave-requests/outstanding', ManagerRequestController.getOutstandingTeamRequests);

    // 2) Approve annual leave request
    // PATCH /manager/leave-requests/:requestId/approve
    this.router.patch('/manager/leave-requests/:requestId/approve', ManagerRequestController.approveLeaveRequest);

    // 3) Reject annual leave request
    // PATCH /manager/leave-requests/:requestId/reject
    this.router.patch('/manager/leave-requests/:requestId/reject', ManagerRequestController.rejectLeaveRequest);

    // 4) View annual leave remaining for a staff member in manager's team
    // GET /manager/staff/:staffId/leave-balance
    this.router.get('/manager/staff/:staffId/leave-balance', ManagerRequestController.getStaffLeaveBalance);

    // =============================================================
    // ADMIN ENDPOINTS
    // Admin can maintain staff records and system-wide leave operations
    // =============================================================

    // 1) Add a new member of staff
    // POST /admin/staff
    this.router.post('/admin/staff', AdminRequestController.addStaffMember);

    // 2) Amend role or department of a staff member
    // PATCH /admin/staff/:staffId/profile
    // Body example: { role?, department? }
    this.router.patch('/admin/staff/:staffId/profile', AdminRequestController.amendStaffProfile);

    // 3) View all outstanding leave requests filtered by staff, manager team, or company
    // GET /admin/leave-requests/outstanding?staffId=&managerId=&scope=company
    this.router.get('/admin/leave-requests/outstanding', AdminRequestController.getOutstandingRequests);

    // 4) Amend annual leave entitlement for a member of staff
    // PATCH /admin/staff/:staffId/annual-leave-allocation
    this.router.patch('/admin/staff/:staffId/annual-leave-allocation', AdminRequestController.amendLeaveAllocation);

    // 5) Approve requests on behalf of managers and track system-wide usage
    // PATCH /admin/leave-requests/:requestId/approve
    this.router.patch('/admin/leave-requests/:requestId/approve', AdminRequestController.approveOnBehalfOfManager);

    // Optional supporting analytics route for requirement 5
    // GET /admin/analytics/leave-usage
    this.router.get('/admin/analytics/leave-usage', AdminRequestController.getSystemLeaveUsage);

    
  }
}