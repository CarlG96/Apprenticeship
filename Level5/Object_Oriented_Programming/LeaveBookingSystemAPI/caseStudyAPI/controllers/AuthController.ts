import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';
import { AppDataSource } from '../src/data-source';
import { User } from '../src/entity/User';

export class AuthController {
  // POST /auth/login
  // Accepts credentials and should return a JWT token.
  public async login(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(StatusCodes.BAD_REQUEST).send('Email and password are required');
      return;
    }

    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOne({
      where: { email },
      relations: ['role', 'manager'],
    });

    if (!user) {
      res.status(StatusCodes.UNAUTHORIZED).send('Invalid credentials');
      return;
    }

    const isPasswordValid = await user.validatePassword(password);
    if (!isPasswordValid) {
      res.status(StatusCodes.UNAUTHORIZED).send('Invalid credentials');
      return;
    }

    const token = jwt.sign(
      {
        userId: user.id,
        role: user.role.name,
        managerId: user.manager?.id || null,
      },
      process.env.JWT_SECRET || 'default-secret',
      { expiresIn: '8h' },
    );

    res.status(StatusCodes.OK).json({ token });
  }
}