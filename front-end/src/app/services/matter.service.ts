import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MatterService {
  private baseUrl = 'http://127.0.0.1:8000';
  private token = localStorage.getItem('token');
  private optionsHeaders = {
      headers : new HttpHeaders({
        'Content-Type':['application/json', 'application/x-www-form-urlencoded'] ,
        'Authorization': 'Bearer' + this.token
      }) 
  }

  constructor(private http: HttpClient) { }

  index() {
    return this.http.get(`${this.baseUrl}/api/auth/matter`, this.optionsHeaders)
  }

  create() {
    return this.http.get(`${this.baseUrl}/api/auth/matter/create`, this.optionsHeaders)
  }


  edit(id) {
    return this.http.get(`${this.baseUrl}/api/auth/matter/${id}/edit`, this.optionsHeaders)
  }


  store (matter) {
    return this.http.post(`${this.baseUrl}/api/auth/matter`,matter, this.optionsHeaders)
  } 

  delete(matter) {
    let id = matter.id;
    return this.http.delete(`${this.baseUrl}/api/auth/matter/${id}`, this.optionsHeaders)
  }
}
