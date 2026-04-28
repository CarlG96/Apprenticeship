import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export class AuthController {
  // POST /auth/login
  // Accepts credentials and should return a JWT token.
  public static login(req: Request, res: Response): void {
    res.status(StatusCodes.NOT_IMPLEMENTED).send('TODO: Implement login and JWT issuance');
  }
}
