import { Component, OnInit } from '@angular/core';
import { MatterService } from 'src/app/services/matter.service';
import { ResponsesService } from 'src/app/responses.service';

@Component({
  selector: 'app-matter-create',
  templateUrl: './matter-create.component.html',
  styleUrls: ['./matter-create.component.css']
})
export class MatterCreateComponent implements OnInit {

  constructor(
    private Matter : MatterService,
    private Responses : ResponsesService,

    ) { }

  public formMatter = {
    name: null,
    user_id: null,
    career_id: null,
  };

  public careers = null;
  public data = null;
  public teachers = null;

  ngOnInit() {
    this.Matter.create().subscribe(
      data => this.handleData(data),
      error => console.log(error.errors)
    ); 
  }

  store () {
    this.Matter.store(this.formMatter).subscribe(
      data => this.Responses.handleResponse(data),
      error => console.log(error.errors)
    ); 
  }

  handleData(data) {
    this.careers = data.careers;
    this.teachers = data.teachers;
  }
}
