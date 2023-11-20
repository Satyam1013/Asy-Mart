import { Component, OnInit } from '@angular/core';

import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit  {

  zone:any = [
    {
      Zone:'EAST GOA',
      resorts:[
        {
          resort: 'AB Resort'

        },
        {
          resort: 'B Resort'
          
        },
        {
          resort: '34B Resort'
          
        },
        {
          resort: 'A123 Resort'
          
        }
      ],
      index:0
    },
    {
      Zone:'EAST PUNE',
      resorts:[
        {
          resort: 'AB Resort'

        },
        {
          resort: 'B Resort'
          
        },
        {
          resort: '34B Resort'
          
        },
        {
          resort: 'A123 Resort'
          
        }
      ],
      index:1
    },
    {
      Zone:'NAVI MUMBAI',
      resorts:[
        {
          resort: 'AB Resort'
        }
      ],
      index:2
    },
    {
      Zone:'WEST BENGAL',
      resorts:[
        {
          resort: 'AB Resort'

        },
        {
          resort: 'B Resort'
          
        },
        {
          resort: '34B Resort'
          
        },
        {
          resort: 'A123 Resort'
          
        }
      ],
      index:3,
    },
  ];

  locationForm!:FormGroup;
  selectedZone:any;

  constructor(private fb:FormBuilder, private router:Router){

  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(){
    this.locationForm = this.fb.group({
      zone:[0,[Validators.required]],
      resort:[this.zone[0].resorts[0].resort,[Validators.required]],
    });
  }

  submit(){
    let payload = {
      zone:this.zone[this.locationForm.value.zone].Zone,
      resort:this.locationForm.value.resort,
    }
    this.router.navigate(['main']);
  }

  back(){
    this.router.navigate(['login']);
  }
}
