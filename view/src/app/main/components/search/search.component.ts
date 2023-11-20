import { Component, OnInit } from '@angular/core';
import { bannerColors } from '../../shared';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  bannerColor:any = bannerColors;
  searchValue:string='';
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
  
  showProducts:boolean = false;
  

  constructor(){

  }

  ngOnInit() {
    let searchedHistory:any = localStorage.getItem('searchedHistory') ? localStorage.getItem('searchedHistory') : null; 
    if(searchedHistory != null){
      this.searchValue = searchedHistory != null ? JSON.stringify(searchedHistory) : '';
      this.searchProduct(this.searchValue);
    }
  }

  searchProduct(searchedEvent:any){
    console.log(searchedEvent);
    this.showProducts = true;
  }
}
