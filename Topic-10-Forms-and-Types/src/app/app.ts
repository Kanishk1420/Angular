import { Component, signal } from '@angular/core';
import { ReactiveForms } from './reactive-forms/reactive-forms';
import { FormGroupingReactiveForms } from './form-grouping-reactive-forms/form-grouping-reactive-forms';
import { TempleteDrivenForms } from './templete-driven-forms/templete-driven-forms';

@Component({
  selector: 'app-root',
  imports: [ReactiveForms, FormGroupingReactiveForms, TempleteDrivenForms],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Topic-10-Forms-and-Types');
}
