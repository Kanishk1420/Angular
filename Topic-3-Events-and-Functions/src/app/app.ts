import { Component} from '@angular/core';
import { Counter } from './counter/counter';
import { Events } from './events/events';
import { Getandset } from './getandset/getandset';


@Component({
  selector: 'app-root',
  imports: [Counter, Events, Getandset],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
