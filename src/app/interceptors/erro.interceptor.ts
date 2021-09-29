import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NotificationService } from '../shared/services/notification.service';

@Injectable()
export class ErroInterceptor implements HttpInterceptor {

  constructor(private notificationService: NotificationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(res => this.handleResponseError(res))
    );
  }

  private handleResponseError(res: object): Observable<HttpEvent<any>> {
    if (res instanceof HttpErrorResponse) {
      this.notificationService.error(`Erro: ${res.message}`);
    }

    return throwError(res);
  }
}
