import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IRegister } from '../../../interfaces/IRegister';
import { Accountservices } from '../../../core/services/accountservices';


@Component({
  selector: 'signup',
  imports: [FormsModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css'
})
export class SignUp {

constructor(private router:Router,public accountServices:Accountservices){
  this.todashboard();
}

registerForm: IRegister ={
  UserName: '',
  email: '',
  password: '',
  phoneNumber: ''
};
 
backtoLogin(){
  this.router.navigate(['signin']);
}
todashboard(){
  if(this.accountServices.getCurrentUser()){
     alert("User is logged in so going to dashboard")
    this.router.navigate(['dashboard']);
  }
}


submitForm(){
  console.log(this.registerForm);
  this.accountServices.registerUser(this.registerForm);
  this.todashboard()
}

}
