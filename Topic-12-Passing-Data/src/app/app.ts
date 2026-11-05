import { Component, signal } from '@angular/core';
import { User } from './user/user';
import { Hobbies } from './hobbies/hobbies';

@Component({
  selector: 'app-root',
  imports: [User,Hobbies],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Topic-12-Passing-data-and-pipes');
  age = 20;
  location = "Hyderabad";
  hobbies=['Swimming','Gaming','Studying','Coding','Teaching','Sleeping'];

}
