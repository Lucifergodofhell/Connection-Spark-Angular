import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError } from 'rxjs';
import { ToastServices } from '../services/toastservices/toast-services';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const toastr = inject(ToastServices);
  return next(req).pipe(
    catchError((error) => {
      switch (error.status) {
        case 401:
          // Handle Unauthorized Error
          toastr.showError('Unauthorized access - perhaps redirect to login?'+error.message,error.status.toString());
          break;
        case 403:
          // Handle Forbidden Error
           toastr.showError('Access forbidden - you do not have permission to access this resource.'+error.message,error.status.toString());
          break;
        case 404:
          // Handle Not Found Error
           toastr.showError('Resource not found - check the URL or resource availability.'+error.message,error.status.toString());
          break;
        case 500:
          // Handle Internal Server Error
           toastr.showError('Server error - try again later or contact support.'+error.message,error.status.toString());
          break;
        default:
          // Handle other errors
           toastr.showError(`An unexpected error occurred: ${error.message}`,error.status.toString());
      }
      // Rethrow the error after handling it
      throw error;
    }
  ));
};
