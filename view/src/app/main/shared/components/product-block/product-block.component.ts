import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-block',
  templateUrl: './product-block.component.html',
  styleUrls: ['./product-block.component.scss']
})
export class ProductBlockComponent implements OnInit {

  @Input() productData:any;
  @Input() searchedParams:any;
  @Input() loader:any;

  @Output() redirectTodetail = new EventEmitter<boolean>;

  constructor(private router:Router){

  }

  ngOnInit(): void {
  }

  redirect(){
    this.redirectTodetail.emit(true);
  }
}
