import { GenericInfo } from "./generic-info.model";
import { InterviewsInfo } from "./interviews-info.model";

export interface DashboardInfo {
  genericInfos: GenericInfo[];
  interviews: InterviewsInfo;
}