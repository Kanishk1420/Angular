import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-component-life-cycle',
  imports: [],
  templateUrl: './component-life-cycle.html',
  styleUrl: './component-life-cycle.css',
})
export class ComponentLifeCycle implements OnDestroy {
  ngOnDestroy() {
    console.log("ComponentLifeCycle: ngOnDestroy called");
  }
}