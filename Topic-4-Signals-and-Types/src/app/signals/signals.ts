import { Component, effect, signal } from '@angular/core';
@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals {
  protected readonly title = signal('Topic-4-Signals-and-Types');
  count = signal(10);
  counter = signal(0);
  x = 10;
  update_value_for_signals() {
    this.count.set(this.count() + 1); // for signals increment 
  }
  update_value_for_x(){
    this.x= this.x+1; // for normal x variable
  }
  constructor(){
    effect(()=>{
      console.log(this.count());
      console.log(this.x);
    })
  }
}
