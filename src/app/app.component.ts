import { Component } from '@angular/core';
import { ProfileService } from './services/profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'GithubSearch';
  constructor(private profileService: ProfileService) {}
  // search() {
  //   this.profileService.getData().subscribe((data) => {
  //     console.log('User: ', data);
  //   });
  // }
}
