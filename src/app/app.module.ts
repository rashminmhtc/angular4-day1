import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ], // components in the project
  imports: [
    BrowserModule
  ], // modules used
  providers: [], // services
  bootstrap: [AppComponent] // main component
})
export class AppModule { }
