import { Component } from '@angular/core';

@Component({
  selector: 'user-profile',
  standalone: true, // ✅ This is required
  templateUrl: 'user-profile.component.html',
  styleUrl:'user-profile.component.css'
  // styles: [`
  //   h1 { font-size: 3em; }
  // `]
})
export class UserProfileComponent { }