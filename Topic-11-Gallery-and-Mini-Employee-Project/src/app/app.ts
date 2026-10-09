import { Component } from '@angular/core';
import { Card } from './card/card';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [Card, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
