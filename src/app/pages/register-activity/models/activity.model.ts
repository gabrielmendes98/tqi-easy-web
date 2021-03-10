export interface Activity {
  projectId: number;
  description: string;
  date: Date;
  timeWorked: string;
  aditionalHours?: string;
  nightHoursStart?: string;
  nightHoursEnd?: string;
  userId: number;
}