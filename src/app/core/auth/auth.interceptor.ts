import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { TokenService } from '../token/token.service';
import { catchError, filter, switchMap, take } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private refreshingInProgress?: boolean;
  private accessTokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  constructor(private tokenService: TokenService, private authService: AuthService, private userService: UserService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const accessToken = this.tokenService.getToken('authToken');

    return next.handle(this.addAuthorizationHeader(request, accessToken)).pipe(
      catchError(error => {
        if(error instanceof HttpErrorResponse && error.status === 401) {
          const refreshToken = this.tokenService.getToken('refreshToken');

          if(refreshToken && accessToken) {
            return this.refreshToken(request, next);
          }
        }

        this.userService.logout();

        return throwError(error);
      })
    )
  }

  private addAuthorizationHeader(request: HttpRequest<unknown>, token: string | null) {
    if(token) {
      return request.clone({ setHeaders: { Authorization: `Bearer ${token}` }});
    }

    return request;
  }

  private refreshToken(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.refreshingInProgress) {
      this.refreshingInProgress = true;
      this.accessTokenSubject.next(null);

      return this.authService.refreshToken().pipe(
        switchMap((res) => {
          this.refreshingInProgress = false;
          this.accessTokenSubject.next(res.accessToken);
          // repeat failed request with new token
          return next.handle(this.addAuthorizationHeader(request, res.accessToken));
        })
      );
    } else {
      // wait while getting new token
      return this.accessTokenSubject.pipe(
        filter(token => token !== null),
        take(1),
        switchMap(token => {
          // repeat failed request with new token
          return next.handle(this.addAuthorizationHeader(request, token));
        }));
    }
  }
}
