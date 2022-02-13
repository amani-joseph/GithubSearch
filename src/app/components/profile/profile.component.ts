import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { Profile } from '../../models/profile';
import { Repo } from '../../models/repo';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profile: any = 'amani-joseph';
  user!: Profile;
  repos: any;

  constructor(private profileService: ProfileService) {}
  search(searchTerm: string) {
    if (searchTerm !== '') {
      this.profileService.getData(this.profile).subscribe((data) => {
        console.log('User: ', data);
        this.user = data;
        this.profile = '';
      });
    }
  }

  ngOnInit(): void {}
}
