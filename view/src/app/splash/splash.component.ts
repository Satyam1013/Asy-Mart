import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {

  logoAnimation:boolean = false;

  constructor(private router:Router){

  }

  ngOnInit(): void {
    this.logoAnimation = true;
    setTimeout(()=>{
      this.logoAnimation = false;
    }, 1800);
  }

  redirect(){
    this.router.navigate(['login']);
  }
}
