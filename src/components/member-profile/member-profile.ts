import { Component } from '@angular/core';
import { Member } from '../../interfaces/member';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'member',
  imports: [CommonModule],
  templateUrl: './member-profile.html',
  styleUrl: './member-profile.css'
})
export class MemberProfile {
  public member : Member;

  constructor() {
    this.member = history.state.member as Member;
    console.log(this.member);
  }
  like(id:string){
    alert('You liked '+this.member.displayName);
  }
  dislike(id:string){
    alert('You disliked '+this.member.displayName);
  }
  calculateAge(dateOfBirth: string): number {
    const birthDate = new Date(dateOfBirth);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }

}
