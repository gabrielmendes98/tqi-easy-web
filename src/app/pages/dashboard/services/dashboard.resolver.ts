import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { DashboardService } from "./dashboard.service";
import { DashboardInfo } from "../models/dashboard-info.model";

@Injectable({
  providedIn: 'root',
})
export class DashboardResolver implements Resolve<Observable<DashboardInfo>> {
  constructor(private dashboardService: DashboardService) {  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.dashboardService.getDashboardInfo();
  }
}