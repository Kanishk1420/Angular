import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface ProfileDisplay {
  name: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-form-grouping-reactive-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './form-grouping-reactive-forms.html',
  styleUrl: './form-grouping-reactive-forms.css',
})
export class FormGroupingReactiveForms {
  displayform: ProfileDisplay | null = null;

  profileform = new FormGroup({
    name: new FormControl<string>('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl<string>('', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}')]),
    password: new FormControl<string>('', [Validators.required, Validators.minLength(6)]),
  });

  onSubmit() {
    if (this.profileform.invalid) return;
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