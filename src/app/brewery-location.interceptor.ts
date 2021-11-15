import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BreweryLocationInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const country = localStorage.getItem('lang') === 'EN' ? 'England' : 'France'

    const newrequest = request.clone({
      url: request.url.concat(`?by_country=${country}`),
    })

    return next.handle(newrequest);
  }
}
