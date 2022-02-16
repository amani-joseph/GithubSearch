import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    "Authorization":environment.githubApiToken
  })
}
@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}
  getData(userName: string): Observable<any> {
    const url = `https://api.github.com/users/${userName}`;
    return this.http.get<any>(url, httpOptions);
  }
  getRepo(userName: string): Observable<any> {
    const url = `https://api.github.com/users/${userName}/repos`;
    return this.http.get<any>(url, httpOptions);
  }
}
