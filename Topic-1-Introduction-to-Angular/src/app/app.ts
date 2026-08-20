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
  public x = 10;
  public y = 20;
  hello() {
    let name = this.name();
    console.log(`Hello ${name}`);
  }
}
