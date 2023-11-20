import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  token:any;
  isAuthanticated!:boolean;

  setAuthtoken(token:any){
    this.token = token;
  }
  getAuthtoken(){
    return this.token;
  }

  getIsauthanticated(){
    return this.isAuthanticated;
  }

  setIsAuthanticated(bool:any){
    this.isAuthanticated = bool;
  }

  loginUser(params:any){

  }
}
