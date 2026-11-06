import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input() user:string=''; // It will receive the data and input is decorater
  @Input() age: number = 0;  
  @Input() location:string = '';
}
