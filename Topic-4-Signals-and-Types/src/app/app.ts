import { Component, signal } from '@angular/core';
import { Signals } from "./signals/signals";
import { DataTypesWithSignals } from './data-types-with-signals/data-types-with-signals';

@Component({
  selector: 'app-root',
  imports: [Signals,DataTypesWithSignals],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Topic-4-Signals-and-Types');
}
