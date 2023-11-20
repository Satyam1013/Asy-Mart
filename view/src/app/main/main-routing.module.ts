import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductCategoryComponent } from './components/product-category/product-category.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
