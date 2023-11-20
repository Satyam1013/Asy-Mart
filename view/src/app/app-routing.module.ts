import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { LoginComponent } from './login/login.component';
import { LocationComponent } from './location/location.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path:'splash',
    component:SplashComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'location',
    component:LocationComponent
  },
  {
    path:'main',
    loadChildren : () => import("./main/main.module").then((m)=> m.MainModule),
    canActivate: [AuthGuard],
  },
  {
    path:'',
    redirectTo:'splash',
    pathMatch:'full',
  },

  {
    path:'**',
    redirectTo:'splash'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
