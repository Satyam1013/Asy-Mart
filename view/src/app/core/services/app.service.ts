import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpService) { }

  login(payload:any){
    return this.http.post('http://localhost:5000/employee/login',payload);
  }

  fetchTopproducts(){
    return this.http.get('http://localhost:5000/home');
  }

  addTofavouriteProductList(payload:any){
    return this.http.post('http://localhost:5000/fav-list/post',payload);
  }
}
