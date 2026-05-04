import { Request, Response } from "express";
import { AppDataSource } from "../src/data-source";
import { Role } from "../src/entity/Role";
import { Repository } from "typeorm";
import { StatusCodes } from "http-status-codes";

export class RoleController {
  private get roleRepository(): Repository<Role> {
    return AppDataSource.getRepository(Role);
  }

  // Get all users
  public getAllRoles = async (req: Request, res: Response): Promise<void> => {
    try {
      const roles = await this.roleRepository.find();

      if (roles.length === 0) {
        res.status(StatusCodes.NO_CONTENT);
        return;
      }

      res.send(roles);
    } catch (error) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .send("Failed to retrieve roles");
    }
  };

  // Get Role by ID
  public getRoleById = async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id as string);

    if (isNaN(id)) {
      res.status(StatusCodes.BAD_REQUEST).send("Invalid ID format");
      return;
    }

    try {
      const role = await this.roleRepository.findOne({ where: { id: id } });
      if (!role) {
        res.status(StatusCodes.NOT_FOUND).send(`Role not found with ID: ${id}`);
        return;
      }

      res.status(StatusCodes.OK).send(role);
    } catch (error) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .send("Failed to retrieve role");
    }
  };
}
