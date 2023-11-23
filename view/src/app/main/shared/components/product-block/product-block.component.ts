import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-block',
  templateUrl: './product-block.component.html',
  styleUrls: ['./product-block.component.scss']
})
export class ProductBlockComponent {

  @Input() productData:any;
  @Input() searchedParams:any;

  @Output() redirectTodetail = new EventEmitter<boolean>;

  constructor(private router:Router){

  }

  redirect(){
    this.redirectTodetail.emit(true);
  }
}
