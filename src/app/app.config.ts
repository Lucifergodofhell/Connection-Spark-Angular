import { ApplicationConfig, inject, provideAppInitializer, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { InitServices } from '../core/services/init-services/initservices';
import { lastValueFrom } from 'rxjs';
import { errorInterceptor } from '../core/interceptor/interceptor-error-interceptor';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { jwttokenInterceptor } from '../core/interceptor/jwttoken-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes,withViewTransitions()),
    provideHttpClient(withInterceptors([errorInterceptor,jwttokenInterceptor])),
    provideAppInitializer( async () => {
      const initServices = inject(InitServices);
      try {
        return lastValueFrom(initServices.init());
      } finally{
        const splash = document.getElementById('splash-screen');
        if(splash){
          splash.remove();
        }
      }
    }),
    provideAnimations(), 
    provideToastr(), 
  ]
};
