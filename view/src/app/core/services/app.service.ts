import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpService) { }

  login(payload:any){
    return this.http.post('http://localhost:5000/employs/login',payload);
  }
}
