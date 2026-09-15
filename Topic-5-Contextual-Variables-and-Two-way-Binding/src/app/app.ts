import { Component, signal } from '@angular/core';
import { Loops } from "./loops/loops";
import { TwoWayBinding } from './two-way-binding/two-way-binding';

@Component({
  selector: 'app-root',
  imports: [Loops, TwoWayBinding],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Topic-5-Contextual-Variables-and-Two-way-Binding');
}
