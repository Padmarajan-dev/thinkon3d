import { NgModule } from '@angular/core';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication/authentication.component';
import { SharableModule } from '../sharable/sharable.module';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { SeriesofimageDirective } from '../Directives/seriesofimage.directive';



@NgModule({
  declarations: [AuthenticationComponent, SignupComponent, SigninComponent,SeriesofimageDirective],
  imports: [
    AuthenticationRoutingModule,
    SharableModule
  ]
})
export class AuthenticationModule { }
