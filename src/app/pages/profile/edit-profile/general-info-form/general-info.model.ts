import { Child } from "./child-form/child.model";

export interface GeneralInfo {
  isMarried: Boolean;
  fianceName?: string;
  hasChildren: Boolean;
  children: Child[];
}