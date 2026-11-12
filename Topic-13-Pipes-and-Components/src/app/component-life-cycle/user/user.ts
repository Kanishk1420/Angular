import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnInit, OnDestroy {
  name = "L";

  constructor() {
    console.log("Start");
    this.name = "Kanishk";
  }

  ngOnInit() {
    console.log("ngOnInit will run after constructor");
    this.name = "Shigami";
  }

  ngOnDestroy() {
    console.log("User: ngOnDestroy called");
  }
}