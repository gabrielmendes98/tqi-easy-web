import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentService } from '../../core/environment/environment.service';
import { UserService } from '../../core/user/user.service';
import { Activity } from './activity.model';

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
