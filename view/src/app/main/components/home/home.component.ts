import { Component, OnInit } from '@angular/core';
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
      },
      {
        name:'apple',
        category:'fruits',
        quantity: '7pcs',
        price:70,
      },
      {
        name:'apple',
        category:'fruits',
        quantity: '7pcs',
        price:70,
      },
      {
        name:'apple',
        category:'fruits',
        quantity: '7pcs',
        price:70,
      },
    ],
    topSelling: [
      {
        name:'apple',
        category:'fruits',
        quantity: '7pcs',
        price:70,
      },
      {
        name:'apple',
        category:'fruits',
        quantity: '7pcs',
        price:70,
      },
      {
        name:'apple',
        category:'fruits',
        quantity: '7pcs',
        price:70,
      },
      {
        name:'apple',
        category:'fruits',
        quantity: '7pcs',
        price:70,
      },
    ],
    grocieries: [
      {
        name:'apple',
        category:'fruits',
        quantity: '7pcs',
        price:70,
      },
      {
        name:'apple',
        category:'fruits',
        quantity: '7pcs',
        price:70,
      },
      {
        name:'apple',
        category:'fruits',
        quantity: '7pcs',
        price:70,
      },
      {
        name:'apple',
        category:'fruits',
        quantity: '7pcs',
        price:70,
      },
    ]
  }

  constructor(private router:Router){

  }

  ngOnInit(){
    console.log('oooo');
  }

  redirectTosearch(){
      this.router.navigate(['main/search']);
  }

  redirectTocategory(name:string){
    const url = 'main/product-category/'+name;
    this.router.navigate([url]);
  }
}
