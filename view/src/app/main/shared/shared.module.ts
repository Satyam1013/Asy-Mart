import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { SliderComponent } from './components/slider/slider.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { ProductBlockComponent } from './components/product-block/product-block.component';
import { PopupComponent } from './components/popup/popup.component';



@NgModule({
  declarations: [FooterComponent, SliderComponent, SearchInputComponent, ProductBlockComponent, PopupComponent],
  imports: [
    CommonModule
  ],
  exports: [FooterComponent, SliderComponent, ProductBlockComponent, PopupComponent]
})
export class SharedModule { }
