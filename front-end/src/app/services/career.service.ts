import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }    from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CareerService {
  private baseUrl = 'http://127.0.0.1:8000';
  private token = localStorage.getItem('token');
  private optionsHeaders = {
      headers : new HttpHeaders({
        'Content-Type':['application/json', 'application/x-www-form-urlencoded'] ,
        'Authorization': 'Bearer' + this.token
      }) 
  }
  
  constructor(private http: HttpClient) { }

  public index() {
    return this.http.get(`${this.baseUrl}/api/auth/career`, this.optionsHeaders)
  }

  public edit(id) {
    return this.http.get(`${this.baseUrl}/api/auth/career/${id}/edit`, this.optionsHeaders)
  }

  public store(career) {
    return this.http.post(`${this.baseUrl}/api/auth/career`,career, this.optionsHeaders)
  }

  public update(career) {
    let id = career.id;
    return this.http.put(`${this.baseUrl}/api/auth/career/${id}`, this.optionsHeaders)
  }
  public delete(career) {
    let id = career.id;
    return this.http.delete(`${this.baseUrl}/api/auth/career/${id}`, this.optionsHeaders)
  }
}
