import { Component, OnInit  } from '@angular/core';

import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../core/services/http.service';
import { AuthService } from '../core/services/auth.service';
import { AppService } from '../core/services/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder, private router:Router, private app:AppService, private authService:AuthService){

  }

  loginForm!: FormGroup;

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(){
    this.loginForm = this.fb.group({
      email:["yashsakhla@gmail.com",[Validators.required]],
      pass:["yashsakhla",[Validators.required]]
    })
  }

  loginUser(){
    let payload = {
      email:this.loginForm.value.email,
      password:this.loginForm.value.pass
    }
    if(this.loginForm.valid){
      this.app.login(payload).subscribe((res:any)=>{
        if(res){
          this.authService.setAuthtoken(res.token);
          this.authService.setIsAuthanticated(true);
          this.router.navigate(['location']);
        }

      })
    }
  }
}
