import { Component} from '@angular/core';
import { Counter } from './counter/counter';
import { Events } from './events/events';
import { Getandset } from './getandset/getandset';
import { Styles } from './styles/styles'
import { IfElse } from './if-else/if-else';
import { Switch } from './switch/switch';
import { ForLoops } from './for-loops/for-loops';


@Component({
  selector: 'app-root',
  imports: [Counter, Events, Getandset, Styles, IfElse, Switch, ForLoops],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
