import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-directives-ngif',
  imports: [NgIf],
  templateUrl: './directives-ngif.html',
  styleUrl: './directives-ngif.css',
})
export class DirectivesNgif {
  Login=true;
  toogle(){
    this.Login=!this.Login;
  }
}
