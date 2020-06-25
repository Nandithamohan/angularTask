import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './login/login.component'
import { OtpComponent } from './otp/otp.component';
import {DisplayComponent} from './display/display.component';

import { from } from 'rxjs';
const routes: Routes = [
  {path:'login',  component: LoginComponent},
  {path:'otp',  component:OtpComponent},
  {path:'display',component:DisplayComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
