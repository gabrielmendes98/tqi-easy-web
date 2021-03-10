import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentService } from '../../../core/environment/environment.service';
import { Activity } from '../models/activity.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterActivityService {

  constructor(private http: HttpClient, private environmentService: EnvironmentService) { }

  registerActivity(activity: Activity) {
    const url = this.environmentService.getApiUrl();
    return this.http.post(url + '/activities', { ...activity })
  }
  
}
