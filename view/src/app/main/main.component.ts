import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  activeChildRouteData: any;

  constructor(private activatedRoute:ActivatedRoute, private router:Router){
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        // Access the activated route snapshot to get data from the active child route
        const activeChildRoute = this.activatedRoute.firstChild;
        if (activeChildRoute) {
          this.activeChildRouteData = activeChildRoute.snapshot.data;
          console.log(this.activeChildRouteData);
        }
      });
  }
  
  ngOnInit(){
    
  }
}
