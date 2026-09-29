import { Component, signal } from '@angular/core';
import { ReactiveForms } from './reactive-forms/reactive-forms';

@Component({
  selector: 'app-root',
  imports: [ReactiveForms],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Topic-10-Forms-and-Types');
}
