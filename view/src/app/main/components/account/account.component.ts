import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

  clickedPopup:any = 'orders';
  showPopup:boolean = false;
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
}
