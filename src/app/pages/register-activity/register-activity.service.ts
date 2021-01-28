import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentService } from '../../core/environment/environment.service';
import { UserService } from '../../core/user/user.service';
import { Activity } from './activity.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterActivityService {

  url: string;
  id: number;

  constructor(private http: HttpClient, 
              private environmentService: EnvironmentService, 
              private userService: UserService) {
    this.url = this.environmentService.getApiUrl();
    this.id = this.userService.getUserId();
  }

  registerActivity(activity: Activity) {
    return this.http.post(this.url + '/activities', { ...activity })
  }
  
}
