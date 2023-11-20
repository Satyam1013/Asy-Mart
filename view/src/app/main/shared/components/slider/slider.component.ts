import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import KeenSlder, { KeenSliderHooks } from 'keen-slider'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  bannerData:any = [
    {
      img:"assets/images/home/banner.svg"
    },
    {
      img:"assets/images/home/banner.svg"
    },
    {
      img:"assets/images/home/banner.svg"
    },
    {
      img:"assets/images/home/banner.svg"
    },
    {
      img:"assets/images/home/banner.svg"
    }
  ]
}
