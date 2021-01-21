import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, tap } from 'rxjs/operators';
import { EnvironmentService } from 'src/app/core/environment/environment.service';
import { Access } from './access.model';
import { AluraStatus } from './alura-status.model';

@Injectable({
  providedIn: 'root'
})
export class AluraAccessService {
  private apiUrl: string;

  constructor(private http: HttpClient, environmentService: EnvironmentService) {
    this.apiUrl = environmentService.getApiUrl();
  }

  getAll(filters: { page?: number; status?:string } | undefined) {
    let params = new HttpParams();
    if(filters) {
      if(filters.page)
        params = params.append('_page', filters.page.toString());
      if(filters.status)
        params = params.append('status', filters.status);
    }

    return this.http
      .get<Access[]>(this.apiUrl + '/alura-accesses', { params, observe: 'response' });
  }

  updateAccess(access: Access) {
    return this.http
      .put<Access>(this.apiUrl + '/alura-accesses/' + access.id, { ...access });
  }
}
