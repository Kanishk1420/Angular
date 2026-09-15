import { Component, signal } from '@angular/core';
import { DynamicStyling } from './dynamic-styling/dynamic-styling';

@Component({
  selector: 'app-root',
  imports: [DynamicStyling],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Topic-7-Dynamic-Styling-and-Directives');
}
