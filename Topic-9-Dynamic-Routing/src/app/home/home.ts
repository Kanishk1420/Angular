import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  users=[
  {
    id: 1,
    name: "Kanishk",
    age: 22,
    email: "Kanishk@gupta"
  },
  {
    id: 2,
    name: "Aanya Sharma",
    age: 25,
    email: "aanya.sharma@email.com"
  },
  {
    id: 3,
    name: "Liam O'Connor",
    age: 31,
    email: "liam.oc@domain.org"
  },
  {
    id: 4,
    name: "Yuki Tanaka",
    age: 19,
    email: "yuki.t@tech.io"
  }
]
}
