import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesofimageDirective } from '../Directives/seriesofimage.directive';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SharableModule } from '../sharable/sharable.module';



@NgModule({
  declarations: [SeriesofimageDirective,AuthenticationComponent,SigninComponent,SignupComponent],
  imports: [
    SharableModule,
    CommonModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
