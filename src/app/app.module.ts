import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BoldDirective } from './shared/directives/bold.directive';
import {TodoComponent} from './todo/todo.component';
import {TodoListComponent} from './todo/list/list.component';
import {TodoItemComponent} from './todo/list/item/item.component';
import {TodoFormComponent} from './todo/form/form.component';
import {DataService} from "./shared/services/data.service";
import {RouterModule} from "@angular/router";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {LoginGuard} from "./shared/guards/login.guard";
import {ProductService} from "./shared/services/product.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    BoldDirective,
    TodoComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoFormComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
      },
      {
        path: 'home',
        canActivateChild: [LoginGuard],
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
      },
      {
        path: '**',
        component: PageNotFoundComponent,
      },
    ]),
    HttpClientModule,
  ],
  providers: [
    DataService,
    ProductService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
