import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  
  public users:any[]=[];

  constructor() {
    console.log("Login Service");
  }

  storeUser(user:any){
    this.users.push(user);
  }
}
