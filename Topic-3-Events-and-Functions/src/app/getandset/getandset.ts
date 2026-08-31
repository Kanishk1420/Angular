import { Component } from '@angular/core';

@Component({
  selector: 'app-getandset',
  imports: [],
  templateUrl: './getandset.html',
  styleUrl: './getandset.css',
})
export class Getandset {
  name = '';
  displayName = '';
  email = '';
  getname(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
  }
  showName() {
    this.displayName = this.name;
  }
  setName() {
    this.name = 'Kanishk';
  }
  getEmail(value: string) {
    console.log(value);
    this.email = value;
  }
  setEmail() {
    this.email = 'default@test.com';
  }
}
