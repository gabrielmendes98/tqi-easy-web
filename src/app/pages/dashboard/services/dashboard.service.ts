import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EnvironmentService } from "src/app/core/environment/environment.service";
import { DashboardInfo } from "../models/dashboard-info.model";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient, private environmentService: EnvironmentService) { }

  getDashboardInfo() {
    return this.http.get<DashboardInfo>(this.environmentService.getApiUrl() + '/dashboard-info');
  }
}