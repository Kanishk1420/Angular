import { Component, signal } from '@angular/core';
import { BuiltInPipes } from './built-in-pipes/built-in-pipes';

@Component({
  selector: 'app-root',
  imports: [BuiltInPipes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Topic-13-Pipes-and-Components');
}
