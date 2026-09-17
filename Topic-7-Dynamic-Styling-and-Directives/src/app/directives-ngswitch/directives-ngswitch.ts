import { Component } from '@angular/core';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'app-directives-ngswitch',
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './directives-ngswitch.html',
  styleUrl: './directives-ngswitch.css',
})
export class DirectivesNgswitch {
colors: string[] = ['red', 'green', 'yellow', 'blue', 'pink'];
currentIndex: number = 0;
color: string = this.colors[this.currentIndex];
  changeColor() {
    this.currentIndex = (this.currentIndex + 1) % this.colors.length;
    this.color = this.colors[this.currentIndex];
    console.log(this.color, this.currentIndex);
  }
}
