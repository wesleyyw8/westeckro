import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User;

  constructor(private http: HttpClient) { }

  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  logIn(user: User): Observable<any> {
    this.currentUser = {
      email: user.email,
      password: user.password
    };
    return this.http.post('https://putsreq.com/DX4uiqPQdKmFWS4zgYpl', user);
  }

  logout(): void {
    this.currentUser = null;
  }
}
