import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-profile-second',
  imports: [],
  templateUrl: './profile-second.html',
  styleUrl: './profile-second.css',
})
export class ProfileSecond {
 username: string | null = '';
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.data.subscribe(data=>{
      this.username = data['name'];
    })
  }  
}
