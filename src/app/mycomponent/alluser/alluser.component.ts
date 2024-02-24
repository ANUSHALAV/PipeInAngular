import { Component } from '@angular/core';

@Component({
  selector: 'app-alluser',
  templateUrl: './alluser.component.html',
  styleUrls: ['./alluser.component.css']
})
export class AlluserComponent {

  users: any = [
    { name: "anushalav", address: "dhalwala rishikesh", gender: "male", phone: 8909506360 },
    { name: "anjali", address: "dhalwala rishikesh", gender: "female", phone: 8098765400 },
    { name: "chiranjeev", address: "dhalwala rishikesh", gender: "male", phone: 7898765400 },
    { name: "saloni", address: "dhalwala rishikesh", gender: "female", phone: 7987654000 },
    { name: "aalendra", address: "dhalwala rishikesh", gender: "male", phone: 9876543209 },
  ]
}
