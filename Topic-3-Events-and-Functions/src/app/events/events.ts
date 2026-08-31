import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {
  handleEvent(event: any) {
    console.log('function called', event);
    console.log('function called by event is', event.type);
    console.log('value', event.target.value);
  }
}
