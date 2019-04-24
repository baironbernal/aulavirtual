import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }    from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseUrl = 'http://127.0.0.1:8000';
  private token = localStorage.getItem('token');
  private optionsHeaders = {
      headers : new HttpHeaders({
        'Content-Type':['application/json', 'application/x-www-form-urlencoded'] ,
        'Authorization': 'Bearer' + this.token
      }) 
  }

  constructor(private http: HttpClient) { }


  create() {
    return this.http.get(`${this.baseUrl}/api/auth/task/create`, this.optionsHeaders)
  }

  show(matter_id) {
    return this.http.get(`${this.baseUrl}/api/auth/task/teacher/${matter_id}`, this.optionsHeaders)
  }


}
