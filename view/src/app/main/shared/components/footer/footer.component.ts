import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { footer } from '../..';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {

  url:any;
  footerConetnt:any = footer;

  constructor(private router:Router){
    this.getrouterPath();
  };

  ngOnInit(): void {
    
  }

  getrouterPath(){
    this.router.events.pipe(filter((event:any) => event instanceof NavigationEnd))
    .subscribe((event:any) => 
     {   this.url = event.url;
        console.log(event)
        this.changeFootericon(this.url.split("/")[2]);
     });
  }

  changeFootericon(url:any){
    this.footerConetnt.forEach((ele:any, i:number) => {
      if(ele.name  === url){
        this.footerConetnt[i].btnImg = (this.footerConetnt[i].btnImg).split("-")[1] == "active" ? this.footerConetnt[i].btnImg : this.footerConetnt[i].btnImg + '-active';
      }else{
        this.footerConetnt[i].btnImg = ele.name;
      }
      console.log(this.footerConetnt);
    });
    
  }

  

  redirect(url:string){
  
    this.router.navigate(['main/'+url]);
  }

  ngOnDestroy(): void {
    
  }
}
