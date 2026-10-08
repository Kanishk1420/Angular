import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';

interface UserDetails {
  name: string;
  password: string;
  email: string;
  address: string;
  gender: string;
  range: number;
}

@Component({
  selector: 'app-templete-driven-forms',
  imports: [FormsModule],
  templateUrl: './templete-driven-forms.html',
  styleUrl: './templete-driven-forms.css',
})
export class TempleteDrivenForms {
   userDetails: UserDetails | null = null;
    addDetails(val: UserDetails) {
    this.userDetails = val;
    console.log(val);
  }
  maskpassword(password:string):string{
  return '*'.repeat(password.length);
  }
}