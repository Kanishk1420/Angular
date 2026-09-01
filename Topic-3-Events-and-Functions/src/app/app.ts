import { Component} from '@angular/core';
import { Counter } from './counter/counter';
import { Events } from './events/events';
import { Getandset } from './getandset/getandset';
import { Styles } from './styles/styles'


@Component({
  selector: 'app-root',
  imports: [Counter, Events, Getandset, Styles],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
