import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UnsecureInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const newrequest = request.clone({
      url: request.url.replace('https', 'http')
    })

    return next.handle(newrequest);
  }
}
