import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  count: number = 0;
  handleIncrement() {
    this.count = this.count + 1;
  }
  handleDecrement() {
    if (this.count >= 0) this.count = this.count - 1;
    else this.handlereset();
  }
  handlereset() {
    this.count = 0;
  }

  // One function which handle both
  handlecounter(value: string) {
    if (value == 'minus')
      if (this.count > 0) this.count = this.count - 1;
      else this.count = 0;
    else if (value == 'plus') this.count = this.count + 1;
    else this.count = 0;
  }
}
