import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Accountservices } from '../accountservices';

export const authGaurdGuard: CanActivateFn = () => {
  const accountServices = inject(Accountservices);

  if(!accountServices.currentUser){
    accountServices.logout()
    alert("Access denied. Please log in.");
    return false;
  } 
  return true;
};
