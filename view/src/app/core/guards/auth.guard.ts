import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, of } from "rxjs";
import { AuthService } from "../services/auth.service";


@Injectable() 
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthService, private router:Router){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.authService.getIsauthanticated()){
      return true;
    }

    return this.redirectUserloginFailed();
  }

  redirectUserloginFailed(){
    this.router.navigate(['login']);
    return of(true);
  }

}
