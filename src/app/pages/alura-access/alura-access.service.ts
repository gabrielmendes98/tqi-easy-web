import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentService } from 'src/app/core/environment/environment.service';
import { Access } from './access.model';

@Injectable({
  providedIn: 'root'
})
export class AluraAccessService {
  private apiUrl: string;

  constructor(private http: HttpClient, environmentService: EnvironmentService) {
    this.apiUrl = environmentService.getApiUrl();
  }

  getAll(page: number) {
    const params = new HttpParams().append('page', page.toString());

    return this.http.get<Access[]>(this.apiUrl + '/alura-accesses', { params });
  }
}
