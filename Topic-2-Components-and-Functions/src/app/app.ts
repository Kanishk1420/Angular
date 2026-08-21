import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { Nav } from './nav/nav';
import { Profile } from './profile/profile';
@Component({
  selector: 'app-root',
  imports: [Header, Nav, Profile],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Topic-2-Components-and-Functions');
}
