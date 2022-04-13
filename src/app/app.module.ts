import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SevenComponent } from './seven/seven.component';
import { FormsModule } from "@angular/forms";
import { ChildComponent } from "./child-comp/child-comp.component";
import { BoldDirective } from './shared/directives/bold.directive';
import { LessonPipesComponent } from './lesson-pipes/lesson-pipes.component';
import { FullNamePipe } from './shared/pipes/full-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SevenComponent,
    ChildComponent,
    BoldDirective,
    LessonPipesComponent,
    FullNamePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
