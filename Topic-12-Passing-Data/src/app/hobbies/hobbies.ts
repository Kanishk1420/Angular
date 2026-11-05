import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  imports: [],
  templateUrl: './hobbies.html',
  styleUrl: './hobbies.css',
})
export class Hobbies {
@Input() hobby:string= '';
}
