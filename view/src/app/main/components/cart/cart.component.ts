import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  topCatagories:any = [
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
  ];
  productData: any;
  showProductdetail: boolean = false;
  showCart:boolean = false;
  showDetail(data?:any){
    this.productData = data;
    this.showProductdetail = !this.showProductdetail;

  }

  close(){
    this.showCart = false;
  }
}
