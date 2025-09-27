import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Memberservices } from '../../core/services/member-services/memberservices';
import { Member } from '../../interfaces/member';
import { Observable } from 'rxjs';
import { MemberCard } from '../member-card/member-card';

@Component({
  selector: 'dashboard',
  imports: [FormsModule,
    CommonModule,
    AsyncPipe,
    MemberCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  private memberService = inject(Memberservices);
  public  router = inject(Router)
  protected members$:Observable<Member[]>;
  constructor() { 
    this.members$ = this.memberService.getMembers();
  }

  toMemberProfile(member:Member){
    this.router.navigate(['member',member.id],{state:{member}})
  }

}
