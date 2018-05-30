import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  peoplesList = [ { name: "Rohit", phone: "1234567890", dob: "01-01-2018" },
             { name: "Bhoomika", phone: "1234567890", dob: "01-01-2018" },
             { name: "Amruth", phone: "1234567890", dob: "01-01-2018" },
             { name: "Rohan", phone: "1234567890", dob: "01-01-2018" },
             { name: "Soumya", phone: "1234567890", dob: "01-01-2018" },
             { name: "Surya", phone: "1234567890", dob: "01-01-2018" } ];
  // finally this has to be moved to a JSON 
  constructor() { 
    console.log('inside component contructor');
  }

  ngOnInit() {
    console.log('inside component ngInit');
  }

}
