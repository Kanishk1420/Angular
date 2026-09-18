import { Component, signal } from '@angular/core';
import { DynamicStyling } from './dynamic-styling/dynamic-styling';
import { DirectivesNgfor } from './directives-ngfor/directives-ngfor';
import { DirectivesNgif } from './directives-ngif/directives-ngif';
import { DirectivesNgswitch } from './directives-ngswitch/directives-ngswitch';
import { Practice } from './practice/practice';

@Component({
  selector: 'app-root',
  imports: [DynamicStyling, DirectivesNgfor, DirectivesNgif, DirectivesNgswitch, Practice],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Topic-7-Dynamic-Styling-and-Directives');
}
