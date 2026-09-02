import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  imports: [],
  templateUrl: './switch.html',
  styleUrl: './switch.css',
})
export class Switch {
  color = 'red';
  handlecolor(event: Event) {
    this.color = (event.target as HTMLInputElement).value;
  }
}
