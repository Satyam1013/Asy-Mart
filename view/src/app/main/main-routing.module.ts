import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ProductDetailComponent } from './shared/components/product-detail/product-detail.component';
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { CartComponent } from './components/cart/cart.component';
import { FavouiriteComponent } from './components/favouirite/favouirite.component';
import { AccountComponent } from './components/account/account.component';

const routes: Routes = [
  {
    path:"",
    component:MainComponent,
    children : [
      {
        path:"",
        redirectTo:"home",
        pathMatch:"full",
        data:{
          showFooter:true
        }
      },
      {
        path:"home",
        component:HomeComponent,
        data:{
          showFooter:true
        }
      },
      {
        path:"search",
        component:SearchComponent,
        data:{
          showFooter:true
        }
      },
      {
        path:'product-detail',
        component:ProductDetailComponent,
        data:{
          showFooter:false
        }
      },
      {
        path:'product-category/:name',
        component:ProductCategoryComponent,
        data:{
          showFooter:false
        }
      },
      {
        path:'cart',
        component:CartComponent,
        data:{
          showFooter:true
        }
      },
      {
        path:'favourite',
        component:FavouiriteComponent,
        data:{
          showFooter:true
        }
      },
      {
        path:'account',
        component:AccountComponent,
        data:{
          showFooter:true
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
