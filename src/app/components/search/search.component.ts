import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  profile: string = '';
  constructor(private profileService: ProfileService) {}
  ngOnInit(): void {}
  search(searchTerm: string) {
    if (searchTerm !== '') {
      this.profileService.getData(this.profile).subscribe((data) => {
        console.log('User: ', data);
      });
      this.profile = '';
    }
  }
}
