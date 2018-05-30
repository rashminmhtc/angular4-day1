import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { AppComponent } from './app.component';
import { PeopleComponent } from './component/people/people.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'people', component: PeopleComponent },
  { path: 'dashboard', component: DashboardComponent }
]; // path to specify URL, component to be mapped the route to, redirectTo

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    DashboardComponent
  ], // components in the project
  imports: [
    BrowserModule,
    RouterModule.forRoot( routes )  // routerModule provides - "router-outlet" (used in template to specify where to display) & "router-link" navigation between routes 
  ], // modules used
  providers: [], // services
  bootstrap: [AppComponent] // main component
})
export class AppModule { }
