import express, { Request, Response } from "express";
import { DataSource } from "typeorm";
import { AdminRequestRouter } from "./routers/AdminRequestRouter";
import { AuthRouter } from "./routers/AuthRouter";
import { ManagerRequestRouter } from "./routers/ManagerRequestRouter";
import { RoleRouter } from "./routers/RoleRouter";
import { StaffRequestRouter } from "./routers/StaffRequestRouter";
import { StatusCodes } from "http-status-codes";

export class Server {
  private readonly app: express.Application;

  constructor(
    private readonly port: string | number,
    private readonly adminRequestRouter: AdminRequestRouter,
    private readonly authRouter: AuthRouter,
    private readonly managerRequestRouter: ManagerRequestRouter,
    private readonly roleRouter: RoleRouter,
    private readonly staffRequestRouter: StaffRequestRouter,
    private readonly appDataSource: DataSource,
  ) {
    this.app = express();
    this.initialiseMiddlewares();
    this.initialiseRoutes();
    this.initialiseErrorHandling();
  }

  private initialiseMiddlewares() {
    this.app.use(express.json());
  }

  private initialiseRoutes() {
    this.app.use("/api/admin", this.adminRequestRouter.getRouter());
    this.app.use("/api/auth", this.authRouter.getRouter());
    this.app.use("/api/manager", this.managerRequestRouter.getRouter());
    this.app.use("/api/role", this.roleRouter.getRouter());
    this.app.use("/api/staff", this.staffRequestRouter.getRouter());
  }

  private initialiseErrorHandling() {
    this.app.use((req: Request, res: Response) => {
      const requestedUrl = `${req.protocol}://${req.get("host")}${req.originalUrl}`;
      res
        .status(StatusCodes.NOT_FOUND)
        .send("Route " + requestedUrl + " not found");
    });
  }

  public async start() {
    await this.initialiseDataSource();
    this.app.listen(this.port, () => {
      console.log(`Server running on http://localhost:${this.port}`);
    });
  }

  private async initialiseDataSource() {
    try {
      await this.appDataSource.initialize();
      console.log("Data Source initialised");
    } catch (error) {
      console.log("Error during initialisation:", error);
      throw error;
    }
  }
}
