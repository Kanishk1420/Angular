import { Component } from '@angular/core';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-for-loops',
  imports: [],
  templateUrl: './for-loops.html',
  styleUrl: './for-loops.css',
})
export class ForLoops {
  users = ['A', 'B', 'C', 'D'];
  students = [
    { name: 'Odette', Age: 20, email: 'Odette@gmail.com' },
    { name: 'Vodyanitsa', Age: Infinity, email: 'Vodyanitsa@gmail.com' },
    { name: 'Alyosha', Age: 18, email: 'Alyosha@gmail.com' },
    { name: 'Vesna', Age: Infinity, email: 'Vesna@Druzhna.com' },
  ];

  ShowAge: number = 0;
  ShowEmail: string = '';
  showDetails: boolean = false;

  getName(Age:number, email:string){
  this.ShowAge = Age;
  this.ShowEmail = email;
  this.showDetails = true;
  }
}
