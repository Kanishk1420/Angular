import { Component } from '@angular/core';

@Component({
  selector: 'header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  message: string = 'You clicked'; // properties we called it
  data: string | number = 30;
  otherfunction() {
    alert('This is another function');
  }
  handleclickevent() {
    console.log(this.message, this.data);
    this.otherfunction();
  }
  sum(a:number, b:number){
    console.log("The sum is", a+b);
    this.handleclickevent();
  }
}
