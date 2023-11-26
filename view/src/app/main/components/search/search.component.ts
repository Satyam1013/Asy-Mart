import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { bannerColors } from '../../shared';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AppService } from 'src/app/core/services/app.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, AfterViewInit, OnDestroy {
  bannerColor: any = bannerColors;
  searchValue: string = '';
  topCatagories: any = [
    {
      name: 'apple',
      category: 'fruits',
      quantity: '7pcs',
      price: 70,
      img: 'assets/images/home/apple.svg',
    },
    {
      name: 'apple',
      category: 'fruits',
      quantity: '7pcs',
      price: 70,
      img: 'assets/images/home/apple.svg',
    },
    {
      name: 'apple',
      category: 'fruits',
      quantity: '7pcs',
      price: 70,
      img: 'assets/images/home/apple.svg',
    },
    {
      name: 'apple',
      category: 'fruits',
      quantity: '7pcs',
      price: 70,
      img: 'assets/images/home/apple.svg',
    },
    {
      name: 'apple',
      category: 'fruits',
      quantity: '7pcs',
      price: 70,
      img: 'assets/images/home/apple.svg',
    },
    {
      name: 'apple',
      category: 'fruits',
      quantity: '7pcs',
      price: 70,
      img: 'assets/images/home/apple.svg',
    },
  ];
  products:any;
  filters: any = [
    {
      name: 'categories',
      subEle: [
        {
          name: 'fresh',
        },
        {
          name: 'fresh',
        },
        {
          name: 'fresh',
        },
        {
          name: 'fresh',
        },
        {
          name: 'fresh',
        },
      ],
    },
    {
      name: 'Brand',
      subEle: [
        {
          name: 'fresh',
        },
        {
          name: 'fresh',
        },
        {
          name: 'fresh',
        },
        {
          name: 'fresh',
        },
        {
          name: 'fresh',
        },
      ],
    },
    {
      name: 'Package',
      subEle: [
        {
          name: 'fresh',
        },
        {
          name: 'fresh',
        },
        {
          name: 'fresh',
        },
        {
          name: 'fresh',
        },
        {
          name: 'fresh',
        },
      ],
    },
  ];
  isRedirecttodetailpage: boolean = false;

  showProducts: boolean = false;
  showProductdetail: boolean = false;
  productData: any;
  showFilter: boolean = false;
  loader: boolean = false;

  constructor(private appService:AppService) {}

  ngOnInit() {
    
  }

  @ViewChild('myinput') myInputField!: ElementRef;
  
  ngAfterViewInit() {
    this.myInputField.nativeElement.focus();
  }

  searchProduct(searchedEvent: any) {
    this.loader= true;
    this.appService.fetchTopproducts().subscribe((res)=>{
      console.log(res);
      this.loader = false;
      this.products = res[0].topProducts.offer;
      this.showProducts = true;
    })
    
  }


  checkRedirection(value: boolean) {
    this.isRedirecttodetailpage = value;
  }

  ngOnDestroy(): void {}

  showDetail(event?: any, data?: any) {
    if (event) {
      this.productData = data;
    }
    this.showProductdetail = !this.showProductdetail;
  }

  filter() {
    this.showFilter = !this.showFilter;
  }
}
