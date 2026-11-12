import { Component, signal } from '@angular/core';
import { BuiltInPipes } from './built-in-pipes/built-in-pipes';
import { CustomPipes } from './custom-pipes/custom-pipes';
import { ComponentLifeCycle } from './component-life-cycle/component-life-cycle';
import { User } from './component-life-cycle/user/user';


@Component({
  selector: 'app-root',
  imports: [BuiltInPipes, CustomPipes, ComponentLifeCycle, User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Topic-13-Pipes-and-Components');
  isvisible = true;
  destroyChild(){
  this.isvisible = false;
  }
}
