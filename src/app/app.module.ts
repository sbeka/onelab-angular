import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SevenComponent } from './seven/seven.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ChildComponent } from "./child-comp/child-comp.component";
import { BoldDirective } from './shared/directives/bold.directive';
import { LessonPipesComponent } from './lesson-pipes/lesson-pipes.component';
import { FullNamePipe } from './shared/pipes/full-name.pipe';
import {TodoComponent} from './todo/todo.component';
import {TodoListComponent} from './todo/list/list.component';
import {TodoItemComponent} from './todo/list/item/item.component';
import {TodoFormComponent} from './todo/form/form.component';
import {DataService} from "./shared/services/data.service";
import { PageServiceComponent } from './page-service/page-service.component';
import { PageFormsComponent } from './page-forms/page-forms.component';
import {RouterModule} from "@angular/router";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import {LoginGuard} from "./shared/guards/login.guard";
import { HttpClientComponent } from './http-client/http-client.component';
import {ProductService} from "./shared/services/product.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SevenComponent,
    ChildComponent,
    BoldDirective,
    LessonPipesComponent,
    FullNamePipe,
    TodoComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoFormComponent,
    PageServiceComponent,
    PageFormsComponent,
    PageNotFoundComponent,
    LoginComponent,
    HttpClientComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'home',
        canActivateChild: [LoginGuard],
        children: [
          {
            path: '',
            component: HomeComponent,
          },
          {
            path: 'pipes',
            component: LessonPipesComponent,
          },
          {
            path: 'seven',
            component: SevenComponent,
          },
          {
            path: 'service',
            component: PageServiceComponent,
          },
          {
            path: 'forms',
            component: PageFormsComponent,
            children: [
              {
                path: ':username',
                component: PageFormsComponent,
              },
            ],
          },
          {
            path: 'http',
            component: HttpClientComponent,
          }
        ],
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
