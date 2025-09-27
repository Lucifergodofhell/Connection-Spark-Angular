import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IRegister } from '../../interfaces/IRegister';
import { Ilogin } from '../../interfaces/Ilogin';
import { lastValueFrom, tap } from 'rxjs';
import { ToastServices } from './toastservices/toast-services';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Accountservices {
  private http = inject(HttpClient)
  private toastr = inject(ToastServices);
  private link  = 'https://localhost:5001/api/';
  
  currentUser:any;

  
  constructor() {
    this.setupUser();
   }
  public setupUser(){
    const user = localStorage.getItem('user');
    if(user){
      this.currentUser = JSON.parse(user);
    } 
  }

  async addExpense(expense:any):Promise<any>{
    try{

      return lastValueFrom(this.http.post(`${this.link}dashboard/createexpense/`,expense).pipe(
        tap(user =>{
          if(user){
            localStorage.setItem('user',JSON.stringify(user))
            this.currentUser = user;
          }
        })
      ))
    }
    catch(error){

    }
  }

  async registerUser(user:IRegister):Promise<any>{
    try{
      return lastValueFrom (this.http.post(`${this.link}account/register/`,user).pipe(
        tap(user =>{
          if(user){
            localStorage.setItem('user',JSON.stringify(user))
            this.currentUser = user;
            this.toastr.showSuccess('Registration successful!','Success');
          }
        })
      ));
    }
    catch(error){
      console.error('Error during user registration:', error);
    }
  }

  async loginUser(credential:Ilogin):Promise<any>{
    try{
      return lastValueFrom (this.http.post(`${this.link}account/login/`,credential).pipe(
        tap(user =>{
          if(user){
            localStorage.setItem('user',JSON.stringify(user))
            this.currentUser = user;
            this.toastr.showSuccess('Login successful!','Success');
          }
        })
      ));
    }
    catch(error){
      console.error('Error during user login:', error);
    } 
  }
  getCurrentUser(){
    return this.currentUser;
  } 
  logout(){
    this.currentUser = null;
    localStorage.removeItem('user');
    this.toastr.showInfo('You have been logged out.','Info');
  }
}