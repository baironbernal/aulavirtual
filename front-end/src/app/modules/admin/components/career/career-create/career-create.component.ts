import { Component, OnInit } from '@angular/core';
import { CareerService } from 'src/app/services/career.service';
import { ResponsesService } from 'src/app/responses.service';

@Component({
  selector: 'app-career-create',
  templateUrl: './career-create.component.html',
  styleUrls: ['./career-create.component.css']
})
export class CareerCreateComponent implements OnInit  {

  constructor(
    private Career : CareerService,
    private Responses : ResponsesService,
  ) { }
  
  
  public formCareer = {
    name: null,
    code: null,
    semesters: null,
  };

  ngOnInit() {

  }

  store() {
    this.Career.store(this.formCareer).subscribe(
      data => this.Responses.handleResponse(data),
      error => console.log(error.errors)
    ); 
  }




}
