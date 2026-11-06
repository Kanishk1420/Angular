import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  // Passing data from child to parent
  @Output() getskills = new EventEmitter();
  skills=["C","C++","Java","Python","C#","Javascript","Typescript"]

  loadData(){
    this.getskills.emit(this.skills);
  }
}
