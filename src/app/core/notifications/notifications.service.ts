import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentService } from '../environment/environment.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private http: HttpClient, private environmentService: EnvironmentService) { }

  addPushSubscriber(subscription: PushSubscription) {
    const apiUrl = this.environmentService.getApiUrl();
    return this.http.post(apiUrl + '/subscriptions', { subscription });
  }
}
