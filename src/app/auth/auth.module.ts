import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import {RouterModule} from "@angular/router";
import { ForgotComponent } from './forgot/forgot.component';
import { AuthComponent } from './auth.component';
import {LoginComponent} from "./login/login.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    RegistrationComponent,
    ForgotComponent,
    AuthComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: AuthComponent,
        children: [
          {
            path: '',
            redirectTo: '/auth/login',
            pathMatch: 'full'
          },
          {
            path: 'login',
            component: LoginComponent,
          },
          {
            path: 'reg',
            component: RegistrationComponent,
          },
          {
            path: 'forgot',
            component: ForgotComponent,
          }
        ]
      },
    ]),
  ]
})
export class AuthModule { }
