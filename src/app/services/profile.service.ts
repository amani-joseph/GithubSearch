import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  // userName: any = 'amani-joseph';
  constructor(private http: HttpClient) {}
  getData(userName: string): Observable<any> {
    const url = `https://api.github.com/users/${userName}`;
    return this.http.get<any>(url);
  }
  getRepo(userName: string): Observable<any> {
    const url = `https://api.github.com/users/${userName}/repos`;
    return this.http.get<any>(url);
  }
}
