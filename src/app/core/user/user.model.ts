import { Role } from "./role.model";

export interface User {
  email: string;
  name: string;
  role: Role;
}