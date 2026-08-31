import { Component } from '@angular/core';

@Component({
  selector: 'header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  otherfunction(){
    alert("This is another function");
  }
  handleclickevent(){
    console.log("You clicked");
    this.otherfunction();
  }
}
