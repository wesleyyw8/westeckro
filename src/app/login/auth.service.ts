import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User;

  constructor() { }

  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  logIn(user: User): void {
    this.currentUser = {
      email: user.email,
      password: user.password
    };
  }

  logout(): void {
    this.currentUser = null;
  }
}
