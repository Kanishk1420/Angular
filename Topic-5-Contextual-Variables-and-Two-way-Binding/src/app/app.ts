import { Component, signal } from '@angular/core';
import { Loops } from "./loops/loops";

@Component({
  selector: 'app-root',
  imports: [Loops],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Topic-5-Contextual-Variables-and-Two-way-Binding');
}
