import { Component, signal } from '@angular/core';
import { Signals } from "./signals/signals";
import { DataTypesWithSignals } from './data-types-with-signals/data-types-with-signals';
import { ComputedSignals } from "./computed-signals/computed-signals";

@Component({
  selector: 'app-root',
  imports: [Signals, DataTypesWithSignals, ComputedSignals],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Topic-4-Signals-and-Types');
}
