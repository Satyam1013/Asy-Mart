import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SearchComponent } from './components/search/search.component';
import { CartComponent } from './components/cart/cart.component';
import { FavouiriteComponent } from './components/favouirite/favouirite.component';
import { AccountComponent } from './components/account/account.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './shared/components/product-detail/product-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { NgOptimizedImage } from '@angular/common';


@NgModule({
  declarations: [
    MainComponent,
    SearchComponent,
    CartComponent,
    FavouiriteComponent,
    AccountComponent,
    HomeComponent,
    ProductDetailComponent,
    ProductCategoryComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgOptimizedImage
  ]
})
export class MainModule { }
