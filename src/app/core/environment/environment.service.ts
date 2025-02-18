import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  constructor() { }

  getApiUrl() {
    return environment.apiUrl;
  }

  getVAPIDPublicKey() {
    return environment.VAPID_PUBLIC_KEY;
  }
}
