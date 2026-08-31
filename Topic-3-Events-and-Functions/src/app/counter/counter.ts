import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
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
