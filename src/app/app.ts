import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Accountservices } from '../core/services/accountservices';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'splitwise';
  protected accountServices = inject(Accountservices);
  constructor(public router:Router) {}

  logout(){
    this.accountServices.logout()
    this.router.navigate(['signin'])
  }


  homepage(){    
   this.router.navigate(['dashboard'])
  }
  toProfile(){
   // this.router.navigate(['member',this.accountServices.currentUser.id],{state:{member:this.accountServices.currentUser}})
  }

}
