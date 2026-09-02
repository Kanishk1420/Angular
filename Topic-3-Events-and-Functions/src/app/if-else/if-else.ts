import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else',
  imports: [],
  templateUrl: './if-else.html',
  styleUrl: './if-else.css',
})
export class IfElse {
  display = true;
  changecolortored(){
    this.display = false;
  }
  changecolortogreen(){
    this.display = true;
  }
  toggle(){
    this.display=!this.display
  }
  color = 1;
  multipletoggle(value: number){
    this.color = value; 
  }
  handleInput(event:Event){
    this.color = Number((event.target as HTMLInputElement).value);
  }
}
