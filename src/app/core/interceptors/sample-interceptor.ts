import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SampleInterceptor implements HttpInterceptor {

  constructor( ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap((event: any) => {
        if (event.status === 200) {
          console.log('Success');
        }
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          console.log('not-found');
        }

        if (error.status === 401) {
          console.log('not-autorized');
        } else {
          console.log('error');
        }

        return throwError(error);
      }), finalize(() => {
        console.log('always');
      })
    );
  }
}
