import { inject, Injectable } from '@angular/core';
import { Accountservices } from '../accountservices';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InitServices {
  private accountServices = inject(Accountservices);
  
  constructor() {}

  init(){
    const user = localStorage.getItem('user');
    if(user){
      this.accountServices.currentUser = JSON.parse(user);
    } 
    return of(null);
  }
  
}
