import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  footerConetnt:any = [
    {
      name:'shop',
      active:'assets/images/footer/shop-active.svg',
      inactive:'assets/images/footer/shop-active.svg'
    },
    {
      name:'explore',
      active:'assets/images/footer/explore-active.svg',
      inactive:'assets/images/footer/explore.svg'
    },
    {
      name:'cart',
      active:'assets/images/footer/cart-active.svg',
      inactive:'assets/images/footer/cart.svg'
    },
    {
      name:'favourite',
      active:'assets/images/footer/fav-active.svg',
      inactive:'assets/images/footer/fav.svg'
    },
    {
      name:'account',
      active:'assets/images/footer/account-active.svg',
      inactive:'assets/images/footer/account.svg'
    }
  ]
}
