import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

Component({
  selector: 'app-form-grouping-reactive-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './form-grouping-reactive-forms.html',
  styleUrl: './form-grouping-reactive-forms.css',
})
interface ProfileDisplay {
  name: string;
  email: string;
  password: string;
}

export class FormGroupingReactiveForms {
  displayform: ProfileDisplay | null = null;
   profileform = new FormGroup({
    name: new FormControl<string>(''),
    email: new FormControl<string>(''),
    password: new FormControl<string>(''),
  });
  
 onSubmit() {
    this.displayform = {
      name: this.profileform.value.name ?? '',
      email: this.profileform.value.email ?? '',
      password: '*'.repeat(this.profileform.value.password?.length ?? 0),
    };
  }
  setValue() {
    this.profileform.reset();
    this.displayform = null;
  }
}
