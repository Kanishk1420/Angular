import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-styling',
  imports: [],
  templateUrl: './dynamic-styling.html',
  styleUrl: './dynamic-styling.css',
})
export class DynamicStyling {
  color: string = 'Red';
  fontSize: number = 40;
  backgroundcolor: string = 'White';
  text: string = 'Dark Mode';
  IncrementCounter() {
    this.fontSize = this.fontSize + 5;
  }
  DecrementCounter() {
    this.fontSize = this.fontSize - 5;
  }
  Toogle() {
    if (this.backgroundcolor === 'White') {
      this.backgroundcolor = 'Black';
      this.color = 'Yellow';
      this.text = 'Light Mode';
    } else {
      this.backgroundcolor = 'White';
      this.color = 'Red';
      this.text = 'Dark Mode';
    }
  }
}
