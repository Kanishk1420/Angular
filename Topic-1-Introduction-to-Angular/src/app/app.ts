import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Topic-1 Introduction to Angular');
  readonly name = signal('Kanishk');
  hello() {
    let name = this.name();
    console.log(`Hello ${name}`);
  }
}
