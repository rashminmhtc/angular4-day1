import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'phone book';
  constructor() { 
    console.log('inside app contructor');
  }

  ngOnInit() {
    console.log('inside app ngInit');
  }
}
