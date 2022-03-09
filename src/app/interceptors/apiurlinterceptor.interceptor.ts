import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable()
export class APIURLInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiRequest = request.clone({
      url: `${environment.API_URL}${request.url}`,
      headers: request.headers.set('Content-Type', 'application/json')
    });

    return next.handle(apiRequest);
  }
}
