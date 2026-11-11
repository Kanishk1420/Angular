import { Component, signal } from '@angular/core';
import { BuiltInPipes } from './built-in-pipes/built-in-pipes';
import { CustomPipes } from './custom-pipes/custom-pipes';

@Component({
  selector: 'app-root',
  imports: [BuiltInPipes, CustomPipes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Topic-13-Pipes-and-Components');
}
