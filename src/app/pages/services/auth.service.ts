import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private storageKey = 'user'; // Key for storing user info in localStorage

  private loginDialogSubject = new BehaviorSubject<boolean>(false);
  private signUpDialogSubject = new BehaviorSubject<boolean>(false);

  loginDialog$ = this.loginDialogSubject.asObservable();
  signUpDialog$ = this.signUpDialogSubject.asObservable();

  constructor() { }

  // Store user info in localStorage (userData can be any object)
  login(userData: any) {
    localStorage.setItem(this.storageKey, JSON.stringify(userData));
  }

  // Remove user info from localStorage (logout)
  logout() {
    localStorage.removeItem(this.storageKey);
  }

  // Check if a user is logged in
  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.storageKey);
  }

  // Get the current logged-in user data
  getUserData() {
    return JSON.parse(localStorage.getItem(this.storageKey) || '{}');
  }
}
