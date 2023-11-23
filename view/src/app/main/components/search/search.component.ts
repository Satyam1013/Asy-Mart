import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { bannerColors } from '../../shared';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

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

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    
  }

  @ViewChild('myinput') myInputField!: ElementRef;
  
  ngAfterViewInit() {
    this.myInputField.nativeElement.focus();
  }

  searchProduct(searchedEvent: any) {
    console.log(searchedEvent);
    this.showProducts = true;
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
