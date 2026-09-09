import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-computed-signals',
  imports: [],
  templateUrl: './computed-signals.html',
  styleUrl: './computed-signals.css',
})
export class ComputedSignals {
  // A computed signal is a read-only signal whose value depends on one or more other signals. You cannot set its value manually. When the dependent signals change, the computed signal updates automatically.
  x = signal<number>(10);
  y = signal<number>(20);
  z = computed(() => this.x() + this.y());
  showValue() {
    console.log(this.z());
    this.x.set(100);
    console.log(this.z()); // You will get Updated Value of x addon with y (120)
  }
}
