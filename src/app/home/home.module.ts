import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home.component";
import {PageFormsComponent} from "./page-forms/page-forms.component";
import {LessonPipesComponent} from "./lesson-pipes/lesson-pipes.component";
import {PageServiceComponent} from "./page-service/page-service.component";
import {HttpClientComponent} from "./http-client/http-client.component";
import {SevenComponent} from "./seven/seven.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PageExampleComponent } from './page-example/page-example.component';
import {FullNamePipe} from "./shared/pipes/full-name.pipe";



@NgModule({
  declarations: [
    HomeComponent,
    PageFormsComponent,
    LessonPipesComponent,
    PageServiceComponent,
    HttpClientComponent,
    SevenComponent,
    PageExampleComponent,
    FullNamePipe,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        children: [
          {
            path: 'pipes',
            component: LessonPipesComponent,
          },
          {
            path: 'page-example',
            component: PageExampleComponent,
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
        ]
      },
    ]),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
