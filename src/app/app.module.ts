import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { AppComponent } from './app.component';
import { PeopleComponent } from './component/people/people.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent
  ], // components in the project
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'component/people', pathMatch: 'full' },
      { path: 'people', component: PeopleComponent }
    ])
  ], // modules used
  providers: [], // services
  bootstrap: [AppComponent] // main component
})
export class AppModule { }
