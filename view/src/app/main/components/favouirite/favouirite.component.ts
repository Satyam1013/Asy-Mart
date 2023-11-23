import { Component } from '@angular/core';

@Component({
  selector: 'app-favouirite',
  templateUrl: './favouirite.component.html',
  styleUrls: ['./favouirite.component.scss']
})
export class FavouiriteComponent {
  topCatagories:any = [
    {
      name:'fruit & vegitables',
      img:'assets/images/home/apple.svg',
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
  productData: any;
  showProductdetail: boolean = false;

  showDetail(data?:any){
    this.productData = data;
    this.showProductdetail = !this.showProductdetail;

  }
}
