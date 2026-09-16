import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-ngfor',
  imports: [NgIf, NgFor],
  templateUrl: './directives-ngfor.html',
  styleUrl: './directives-ngfor.css',
})
export class DirectivesNgfor {
  show = true;
  studentsData=[
  {
    name:'Kanishk',
    age:23,
    email: "Kanishk@gmail.com"
  },
  {
    name:'Druzhna',
    age:29,
    email: "Druzhna@gmail.com",
  }
  ]
  toogle() {
    this.show = !this.show;
  }
}
