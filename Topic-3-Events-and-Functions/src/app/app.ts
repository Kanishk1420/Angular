import { Component} from '@angular/core';
import { Counter } from './counter/counter';
import { Events } from './events/events';


@Component({
  selector: 'app-root',
  imports: [Counter, Events],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
