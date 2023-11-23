import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  @Input() filterData:any;
  @Input() cartPopup:any;
  @Input() userPopup:any;
  @Output() close = new EventEmitter<boolean>();
  
  orderPlaced:boolean = false;
  orderFailed:boolean = false;
  showLive:boolean = true;
  selectedOrder:any;

  userOrders:any = [

    {
      orderNo:'1',
      orderStatus:'delivered',
      orderDate:'Octomber 26, 2014',
      orderAmount:'750'
    },
    {
      orderNo:'1',
      orderStatus:'delivered',
      orderDate:'Octomber 26, 2014',
      orderAmount:'750'
    },
    {
      orderNo:'1',
      orderStatus:'delivered',
      orderDate:'Octomber 26, 2014',
      orderAmount:'750'
    },
    {
      orderNo:'1',
      orderStatus:'delivered',
      orderDate:'Octomber 26, 2014',
      orderAmount:'750'
    },
    {
      orderNo:'1',
      orderStatus:'delivered',
      orderDate:'Octomber 26, 2014',
      orderAmount:'750'
    },
    {
      orderNo:'1',
      orderStatus:'delivered',
      orderDate:'Octomber 26, 2014',
      orderAmount:'750'
    },
    {
      orderNo:'1',
      orderStatus:'delivered',
      orderDate:'Octomber 26, 2014',
      orderAmount:'750'
    }
  ];

  userOrdersHistory:any = [

    {
      orderNo:'100',
      orderStatus:'delivered',
      orderDate:'Octomber 26, 2014',
      orderAmount:'750'
    },
    {
      orderNo:'1',
      orderStatus:'delivered',
      orderDate:'Octomber 26, 2014',
      orderAmount:'750'
    },
    {
      orderNo:'1',
      orderStatus:'delivered',
      orderDate:'Octomber 26, 2014',
      orderAmount:'750'
    },
    {
      orderNo:'1',
      orderStatus:'delivered',
      orderDate:'Octomber 26, 2014',
      orderAmount:'750'
    },
    {
      orderNo:'1',
      orderStatus:'delivered',
      orderDate:'Octomber 26, 2014',
      orderAmount:'750'
    },
    {
      orderNo:'1',
      orderStatus:'delivered',
      orderDate:'Octomber 26, 2014',
      orderAmount:'750'
    },
    {
      orderNo:'1',
      orderStatus:'delivered',
      orderDate:'Octomber 26, 2014',
      orderAmount:'750'
    }
  ];

  orderTotal:any = [
    {
      name:'Subtotal',
      value:750
    },
    {
      name:'Saved in Offer',
      value:150
    },
    {
      name:'Total',
      value:600
    }
  ];

  ngOnInit(): void {
      if(this.filterData){
        this.filterData.forEach((res:any)=>{
          res.subEle.forEach((a:any)=>{
            a.isSelected = false;
          })
        });
      }
  }

  checkoutContent:any = [
    {
      name:'Delivery at',
      value:'AB resort',
      isOpen:false,
    },
    {
      name: 'Payment mode',
      value:'weekely',
      isOpen:false,
    },
    {
      name:'Delivery time',
      value:'Instant',
      isOpen:false,
    },
    {
      name:'Total cost',
      value: 750,
      isOpen:false,
    }
  ]

  select(ele:any,index:any){
    this.filterData[ele].subEle[index].isSelected = !this.filterData[ele].subEle[index].isSelected;
  }

  closePopup(){
    this.close.emit(true);
  }

  openAcc(index:any){
    this.checkoutContent[index].isOpen = !this.checkoutContent[index].isOpen
  }

  placeOrder(){
    this.cartPopup = null;
    this.orderFailed = true;
  }

  selectOrder(order:any){
    console.log(order)
    this.selectedOrder = order;
    this.userPopup = false;
  }

  closeOrder(){
    this.selectedOrder = null;
    this.userPopup = true;
  }
}
