import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ilogin } from '../../interfaces/Ilogin';
import { Accountservices } from '../../core/services/accountservices';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  imports: [FormsModule],
  templateUrl: './signin.html',
  styleUrl: './signin.css'
})
export class Signin {

  loginForm:Ilogin={
    email:'',
    password:''
  };
  
  constructor(private router:Router ,public accountServices :Accountservices) { 
    this.todashboard()
  }
 
  submitForm(){
    console.log(this.loginForm);
    this.accountServices.loginUser(this.loginForm);
    if(this.accountServices.getCurrentUser()){
      this.router.navigate(['dashboard']);
    }
  }
  todashboard(){
  if(this.accountServices.getCurrentUser()){
    alert("User is logged in so going to dashboard")
    this.router.navigate(['dashboard']);
  }
}
  signin(){
    this.accountServices.loginUser(this.loginForm);
    this.todashboard() 
  }
}
