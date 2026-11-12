import { Component, OnInit, OnDestroy, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnChanges, OnInit, OnDestroy {
  @Input() userName = '';
  name = 'L';
  constructor() {
    console.log('Start');
    this.name = 'Kanishk';
  }

  ngOnInit() {
    console.log('ngOnInit will run after constructor');
    this.name = 'Shigami';
  }

  ngOnDestroy() {
    console.log('User: ngOnDestroy called');
  }
  ngOnChanges() {
    console.log('Change Detected');
  }
}
