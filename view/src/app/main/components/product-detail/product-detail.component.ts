import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter, pairwise } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  reviewStar: any = ['1star', '2star', '3star', '4star', '5star'];

  detailToggle: any = [false, false];

  productDetail: any = {
    details: [
      {
        heading: 'Product Details',
        desc: 'Product is available in the nearest store, please add it in and order to get it in within 2 hours, Apple is fresh and it provide benfits like many more.',
      },
      {
        heading: 'Product Benifits',
        desc: 'Product is available in the nearest store, please add it in and order to get it in within 2 hours, Apple is fresh and it provide benfits like many more.',
      },
    ],
  };

  isDetailOpen: boolean = false;
  isNutritionopen: boolean = false;
  isProductadded: boolean = false;

  constructor(private router: Router, private location:Location) {
    
  }

  ngOnInit(){

  }

  openDetail(index: any) {
    this.detailToggle[index] = !this.detailToggle[index];
  }

  back(){
    this.location.back();
  }

  action(){
    this.isProductadded = !this.isProductadded;
  }

  redirect(){
    
  }

  ngOnDestroy(): void {
    localStorage.removeItem('searchedHistory');
  }

}