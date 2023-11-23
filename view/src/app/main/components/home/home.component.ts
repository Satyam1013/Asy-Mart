import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { bannerColors } from '../../shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bannerColors:any = bannerColors;
  products:any = {
    offers: [
      {
        name:'apple',
        category:'fruits',
        quantity: '7pcs',
        price:70,
        img:'assets/images/home/apple.svg'
      },
      {
        name:'apple',
        category:'fruits',
        quantity: '7pcs',
        price:70,
        img:'assets/images/home/apple.svg'
      },
      {
        name:'apple',
        category:'fruits',
        quantity: '7pcs',
        price:70,
        img:'assets/images/home/apple.svg'
      },
      {
        name:'apple',
        category:'fruits',
        quantity: '7pcs',
        price:70,
        img:'assets/images/home/apple.svg'
      },
    ],
    topSelling: [
      {
        name:'apple',
        category:'fruits',
        quantity: '7pcs',
        price:70,
        img:'assets/images/home/apple.svg'
      },
      {
        name:'apple',
        category:'fruits',
        quantity: '7pcs',
        price:70,
        img:'assets/images/home/apple.svg'
      },
      {
        name:'apple',
        category:'fruits',
        quantity: '7pcs',
        price:70,
        img:'assets/images/home/apple.svg'
      },
      {
        name:'apple',
        category:'fruits',
        quantity: '7pcs',
        price:70,
        img:'assets/images/home/apple.svg'
      },
    ],
    grocieries: [
      {
        name:'apple',
        category:'fruits',
        quantity: '7pcs',
        price:70,
        img:'assets/images/home/apple.svg'
      },
      {
        name:'apple',
        category:'fruits',
        quantity: '7pcs',
        price:70,
        img:'assets/images/home/apple.svg'
      },
      {
        name:'apple',
        category:'fruits',
        quantity: '7pcs',
        price:70,
        img:'assets/images/home/apple.svg'
      },
      {
        name:'apple',
        category:'fruits',
        quantity: '7pcs',
        price:70,
        img:'assets/images/home/apple.svg'
      },
    ]
  }
  
  showProductdetail:boolean = false;
  productData:any;

  constructor(private router:Router){

  }

  ngOnInit(){

  }

  redirectTosearch(){
      this.router.navigate(['main/search']);
  }

  redirectTocategory(name:string){
    const url = 'main/product-category/'+name;
    this.router.navigate([url]);
  }

  showDetail(event?:any,data?:any){
    if(event){
      this.productData = data;
    }
    this.showProductdetail = !this.showProductdetail;

  }
}
