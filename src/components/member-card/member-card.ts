import { Component, inject, input, Input } from '@angular/core';
import { Member } from '../../interfaces/member';
import { Router } from '@angular/router';

@Component({
  selector: 'member-card',
  imports: [],
  templateUrl: './member-card.html',
  styleUrl: './member-card.css'
})
export class MemberCard {
 member = input.required<Member>();
 private router = inject(Router)
  constructor() {}

  toMemberProfile(){
    this.router.navigate(['member',this.member().id],{state:{member:this.member()}})
  }

}
