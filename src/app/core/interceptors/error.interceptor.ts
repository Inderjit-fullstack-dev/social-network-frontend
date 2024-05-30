import { APIErrorResponse } from './../interfaces/common/APIErrorResponse';
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        let errorMsg = 'something went wrong.';
        if (err?.error) {
          const apiErrorResponse = err.error as APIErrorResponse;
          if (apiErrorResponse.isError) {
            errorMsg = apiErrorResponse.responseException.exceptionMessage;
          }

          console.log('xxx', errorMsg);
        }

        return throwError(() => new Error(errorMsg));
      })
    );
  }
}
