import { Component, signal } from '@angular/core';
import { DynamicStyling } from './dynamic-styling/dynamic-styling';
import { DirectivesNgfor } from './directives-ngfor/directives-ngfor';

@Component({
  selector: 'app-root',
  imports: [DynamicStyling, DirectivesNgfor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Topic-7-Dynamic-Styling-and-Directives');
}
