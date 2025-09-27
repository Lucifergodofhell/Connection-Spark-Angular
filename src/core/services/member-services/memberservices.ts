import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Member } from '../../../interfaces/member';
import { Accountservices } from '../accountservices';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Memberservices {
  private httpClient = inject(HttpClient);
  private accountServices = inject(Accountservices);
  private link  = 'https://localhost:5001/api/';
  
  
  constructor() { }
  getMembers():Observable<Member[]>{
    return this.httpClient.get<Member[]>(`${this.link}member`);
  }
  getMember(id:string){
    return this.httpClient.get<Member>(`${this.link}member/${id}`);
  }
 
}
