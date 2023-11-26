import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() image:any;
  @Input() home:any;
  
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
  ];

  ngOnInit(): void {
    
  }

}
