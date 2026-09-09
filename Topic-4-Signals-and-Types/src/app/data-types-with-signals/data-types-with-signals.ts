import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-data-types-with-signals',
  imports: [],
  templateUrl: './data-types-with-signals.html',
  styleUrl: './data-types-with-signals.css',
})
export class DataTypesWithSignals {
  // Uses a generic type parameter to allow multiple value types
  data = signal<number | string | undefined | null>(20); 

  //Explicit type annotation defining a signal that is both readable and writable
  withdata: WritableSignal<number | string | undefined | null> = signal(20); 
  modals: WritableSignal<number> = signal<number>(20)
  //Computed signals are read-only wrappers (Signal interface)
  count: Signal<number> = computed(() => 10); 

  updateSignal() {
    this.data.set('Hello');
    this.withdata.set('Hello');
    // this.count.set(80); 
    // This line is commented out because .set() does not exist on read-only computed signals
    this.modals.update((val)=> val+1);
  }
}
