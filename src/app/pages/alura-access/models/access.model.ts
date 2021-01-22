import { AluraStatus } from "./alura-status.model";

export interface Access {
  id: string;
  name: string;
  status: AluraStatus;
  date: Date;
}