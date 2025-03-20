// https://stackoverflow.com/questions/78822735/authorization-header-with-jwt-in-angular-to-all-requests
import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { catchError, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const messageService = inject(MessageService);
  const router = inject(Router);
  var authToken = localStorage.getItem("jwtToken");
  if (authToken) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`
      }
    });
  }
  return next(req).pipe(
    catchError((error) => {
      if (error instanceof HttpErrorResponse && error.status === 401) {
        router.navigate(['/auth/login']);
      }
      messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Error during request: ' + error.message });
      return throwError(() => error);
    })
  );
};
