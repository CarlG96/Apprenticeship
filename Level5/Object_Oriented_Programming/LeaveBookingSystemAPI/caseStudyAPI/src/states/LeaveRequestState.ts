import { LeaveRequest } from "../entity/LeaveRequest";
import { AppDataSource } from "../data-source";

export interface LeaveRequestState {
  approve(request: LeaveRequest): Promise<void>;
  reject(request: LeaveRequest): Promise<void>;
  cancel(request: LeaveRequest): Promise<void>;
  getStatus(): string;
}
