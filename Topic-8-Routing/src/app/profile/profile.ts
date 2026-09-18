import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  username: string | null = '';
  age: number | string | null = '';
  constructor(private route: ActivatedRoute) {}
  // ngOnInit Future we will study
  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('name');
    this.age = this.route.snapshot.paramMap.get('age');
    console.log(this.username, this.age);
  }
}
