import { Component, effect, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-effect',
  imports: [],
  templateUrl: './effect.html',
  styleUrl: './effect.css',
})
export class Effect {
  username:WritableSignal<string> = signal('Anil');
  count:WritableSignal<number|null> = signal(0);
  color:WritableSignal<number> = signal(1);
  constructor() {
   effect(()=> {
    console.log(this.username());
  }) 
  effect(()=> {
    console.log(this.color());
  })
  }
  multipletoggle(value: number){
    this.color.set(value);
  }
}
