import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Accountservices } from '../services/accountservices';

export const jwttokenInterceptor: HttpInterceptorFn = (req, next) => {
  const accountServices = inject(Accountservices);
  const user=  accountServices.currentUser;
  if (accountServices.currentUser) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${user.token}`
      }
    });
  }

  return next(req);
};
