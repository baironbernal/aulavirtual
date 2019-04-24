import { Injectable } from '@angular/core';
import { HttpClient }    from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthjwtService {

  //dominio
  private baseUrl = 'http://127.0.0.1:8000'

  constructor(private http: HttpClient) { }

  login(data) {
    return this.http.post(`${this.baseUrl}/api/auth/login`, data)
  }
}
