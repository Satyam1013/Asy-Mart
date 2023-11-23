import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})
export class ProductCategoryComponent implements OnInit, OnDestroy {

  headerName:any;
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
  showFilter:boolean = false; 
  filters:any = [
    {
     name:"categories",
     subEle: [
       {
         name:'fresh',
       },
       {
         name:'fresh',
       },
       {
         name:'fresh',
       },
       {
         name:'fresh',
       },
       {
         name:'fresh',
       }
     ],
    },
    {
     name:"Brand",
     subEle: [
       {
         name:'fresh',
       },
       {
         name:'fresh',
       },
       {
         name:'fresh',
       },
       {
         name:'fresh',
       },
       {
         name:'fresh',
       }
     ],
    },
    {
     name:"Package",
     subEle: [
       {
         name:'fresh',
       },
       {
         name:'fresh',
       },
       {
         name:'fresh',
       },
       {
         name:'fresh',
       },
       {
         name:'fresh',
       }
     ],
    }
   ]
  showProductdetail: boolean = false;
  productData: any;

  constructor(private router:Router, private activatedRouter:ActivatedRoute, private location:Location){

  }

  ngOnInit(): void {
      this.activatedRouter.paramMap.subscribe((res:any)=>{
        console.log(res)
        this.headerName = res.params.name;
      })
  }
  
  takeBack(){
    this.location.back();
  }

  filter(){
    this.showFilter = !this.showFilter;
  }

  showDetail(event?:any,data?:any){
    if(event){
      this.productData = data;
    }
    this.showProductdetail = !this.showProductdetail;
  }

  ngOnDestroy(): void {
    
  }
}
