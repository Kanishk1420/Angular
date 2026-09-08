import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-data-types-with-signals',
  imports: [],
  templateUrl: './data-types-with-signals.html',
  styleUrl: './data-types-with-signals.css',
})
export class DataTypesWithSignals {
  data = signal<number | string | unknown | undefined | null>(20)
  updateSignal(){
  this.data.set("Hello");  
  }
}
