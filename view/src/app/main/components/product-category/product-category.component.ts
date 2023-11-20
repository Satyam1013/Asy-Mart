import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})
export class ProductCategoryComponent implements OnInit {

  headerName:any;
  topCatagories:any = [
    {
      name:'fruit & vegitables',
      img:'assets/images/home/apple.svg'
    },
    {
      name:'fruit',
      img:'assets/images/home/apple.svg'
    },
    {
      name:'fruit',
      img:'assets/images/home/apple.svg'
    },
    {
      name:'fruit',
      img:'assets/images/home/apple.svg'
    },
    {
      name:'fruit',
      img:'assets/images/home/apple.svg'
    },
    {
      name:'fruit',
      img:'assets/images/home/apple.svg'
    },
    {
      name:'fruit',
      img:'assets/images/home/apple.svg'
    },
    {
      name:'fruit',
      img:'assets/images/home/apple.svg'
    }
  ];

  constructor(private router:Router, private activatedRouter:ActivatedRoute){

  }

  ngOnInit(): void {
      this.activatedRouter.paramMap.subscribe((res:any)=>{
        console.log(res)
        this.headerName = res.params.name;
      })
  }
  
}
