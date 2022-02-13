import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

// import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}
  getData(profileData: string): Observable<any> {
    const url = `https://api.github.com/users/${profileData}`;
    return this.http.get<any>(url);
  }
  getRepo(profileData: string): Observable<any> {
    const url = `https://api.github.com/users/${profileData}`;
    return this.http.get<any>(url);
  }
  // getMyProfile() {
  //   return this.http
  //     .get(
  //       `https://api.github.com/users/amani-joseph`
  //     )
  //     .subscribe((response: any) => {
  //       this.profile.next(response.data);
  //     });
  // }

  // searchProfile(profileName: string) {
  //   return this.http
  //     .get(
  //       `https://api.github.com/users/amani-joseph`
  //     )
  //     .subscribe((response: any) => {
  //       this.profile.next(response.data);
  //     });
  // }
  // getProfile() {
  //   return this.profile.asObservable();
  // }
}
