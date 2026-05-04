import { Server } from "../Server";
import { Router } from "express";
import { AppDataSource } from "./data-source";
import { RoleRouter } from "../routers/RoleRouter";
import { RoleController } from "../controllers/RoleController";
import { AdminRequestRouter } from "../routers/AdminRequestRouter";
import { AdminRequestController } from "../controllers/AdminRequestController";
import { AuthRouter } from "../routers/AuthRouter";
import { AuthController } from "../controllers/AuthController";
import { ManagerRequestController } from "../controllers/ManagerRequestController";
import { ManagerRequestRouter } from "../routers/ManagerRequestRouter";
import { StaffRequestController } from "../controllers/StaffRequestController";
import { StaffRequestRouter } from "../routers/StaffRequestRouter";
//Initialise the port
const DEFAULT_PORT = 8900;
const port = process.env.SERVER_PORT || DEFAULT_PORT;
if (!process.env.SERVER_PORT) {
  console.log(
    "PORT environment variable is not set, defaulting to " + DEFAULT_PORT,
  );
}
// Initialise the data source
const appDataSource = AppDataSource;
// Initialise routers
const adminRequestRouter = new AdminRequestRouter(
  Router(),
  new AdminRequestController(),
);
const authRouter = new AuthRouter(Router(), new AuthController());
const managerRequestRouter = new ManagerRequestRouter(
  Router(),
  new ManagerRequestController(),
);
const roleRouter = new RoleRouter(Router(), new RoleController());
const staffRequestRouter = new StaffRequestRouter(
  Router(),
  new StaffRequestController(),
);
// Instantiate/start the server
const server = new Server(
  port,
  adminRequestRouter,
  authRouter,
  managerRequestRouter,
  roleRouter,
  staffRequestRouter,
  appDataSource,
);
server.start();
