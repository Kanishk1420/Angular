import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.html',
  styleUrl: './reactive-forms.css',
})
export class ReactiveForms {
name = new FormControl();
password = new FormControl();
displayvalue(){
  console.log(this.name.value);
  console.log(this.password.value);
}
setValues(){
  this.name.setValue('');
  this.password.setValue('');
}
}
