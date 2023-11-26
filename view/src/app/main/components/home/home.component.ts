import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { bannerColors } from '../../shared';
import { Router } from '@angular/router';
import { AppService } from 'src/app/core/services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bannerColors:any = bannerColors;
  products:any;
  showProductdetail:boolean = false;
  productData:any;
  bannerImg:any = [
    {
      img:'assets/images/home/banner.svg'
    },
    {
      img:'assets/images/home/banner.svg'
    },
    {
      img:'assets/images/home/banner.svg'
    }
  ]
  loader: boolean = false;

  constructor(private router:Router, private appService:AppService){

  }

  ngOnInit(){
    this.loader = true;
    this.appService.fetchTopproducts().subscribe((res)=>{
      console.log(res);
      this.loader = false;
      this.products = res[0].topProducts;
    })
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
