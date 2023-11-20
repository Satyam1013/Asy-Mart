import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { SliderComponent } from './components/slider/slider.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { ProductBlockComponent } from './components/product-block/product-block.component';
import { ProductDetailComponent } from '../components/product-detail/product-detail.component';



@NgModule({
  declarations: [FooterComponent, SliderComponent, SearchInputComponent, ProductBlockComponent],
  imports: [
    CommonModule
  ],
  exports: [FooterComponent, SliderComponent, ProductBlockComponent]
})
export class SharedModule { }
