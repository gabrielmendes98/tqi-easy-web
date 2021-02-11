import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import * as StackTrace from 'stacktrace-js';
import { UserService } from '../user/user.service';
import { ErrorService } from './error.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private injector: Injector, private errorService: ErrorService) { }

  handleError(error: any): void {
    if(!(error instanceof HttpErrorResponse)) {
      const location = this.injector.get(LocationStrategy);
      const userService = this.injector.get(UserService);

      const message = error.message || error.toString();
      const url = location instanceof PathLocationStrategy ? location.path() : '';
      const user = userService.getUserId();

      StackTrace.fromError(error).then(stackFrames => {
        const stackAsString = stackFrames.map(frame => frame.toString()).join('\n');

        console.error({ user, url, message, stack: stackAsString });

        this.errorService.sendError({ user, url, message, stack: stackAsString }).subscribe();
      })
    } else {
      console.error(error);
    }
  } 
} 