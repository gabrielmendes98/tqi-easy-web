import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { SpinnerOverlayService } from './spinner-overlay.service';
import { catchError, finalize, tap } from 'rxjs/operators';

@Injectable()
export class SpinnerOverlayInterceptor implements HttpInterceptor {

  constructor(private spinnerOverlayService: SpinnerOverlayService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.method === "GET") {
      return next.handle(request);
    }

    this.spinnerOverlayService.showLoading();
    return next.handle(request).pipe(
      tap(event => {
        console.log(event);
        if (event instanceof HttpResponse && event.status >= 200 && event.status <= 299) {
          this.spinnerOverlayService.showSuccess();
        }
      }),
      catchError(error => {
        if (error instanceof HttpErrorResponse) {
          this.spinnerOverlayService.showError();
        }
        return throwError(error);
      })
    );
  }
}
