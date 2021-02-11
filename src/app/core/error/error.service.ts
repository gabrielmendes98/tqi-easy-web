import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentService } from '../environment/environment.service';
import { Error } from './error.model';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private http: HttpClient, private environmentService: EnvironmentService) { }

  sendError(error: Error) {
    const url = this.environmentService.getApiUrl();
    const headers = new HttpHeaders().set('skip-interceptor', 'true');
    return this.http.post(url + '/errors', error, { headers });
  }
}
