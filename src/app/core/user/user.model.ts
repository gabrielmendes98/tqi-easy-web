import { Role } from "./role.model";

export interface User {
  id: number;
  email: string;
  name: string;
  role: Role;
}