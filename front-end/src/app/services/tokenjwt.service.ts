import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenjwtService {

  constructor(private router:Router) { }

  private iss = {
    login : "http://127.0.0.1:8000/api/auth/login",
  }

  handle(token,role) { 
    this.set(token,role);
    this.loggedIn();
  }

  set(token,role) {
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
  }

  get() {
    return localStorage.getItem('token');
  }
  getRole() {
    return localStorage.getItem('role');
  }

  remove() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigateByUrl('/login');
  }

  isValid() {
    const token = this.get();
    if(token) {
      const payload = this.payload(token);
      if(payload.iss === this.iss.login) {
        return true;
      }
    }

  }

  payload(token) {
     const payload = token.split('.')[1];

     return this.decode(payload);
    
  }

  decode(payload) {
    return JSON.parse(atob(payload));
  }

  loggedIn() {
    return this.isValid();
    
  }
}
