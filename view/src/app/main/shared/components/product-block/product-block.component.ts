import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-block',
  templateUrl: './product-block.component.html',
  styleUrls: ['./product-block.component.scss']
})
export class ProductBlockComponent {

  @Input() productData:any;
  @Input() searchedParams:any;

  constructor(private router:Router){

  }

  redirect(){
    this.router.navigate(['main/product-detail']);
    localStorage.setItem('searchedHistory',JSON.stringify(this.searchedParams));
  }
}
