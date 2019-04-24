import { Component, OnInit } from '@angular/core';
import { MatterService } from 'src/app/services/matter.service';
import { ResponsesService } from 'src/app/responses.service';

@Component({
  selector: 'app-matter-list',
  templateUrl: './matter-list.component.html',
  styleUrls: ['./matter-list.component.css']
})
export class MatterListComponent implements OnInit {
  
  public matters =  null;

  constructor(private Matter : MatterService,private Responses : ResponsesService) { }

  ngOnInit() {
    this.Matter.index().subscribe(
      data => this.setMatters(data) ,
      error => console.log(error)
    );
  }

  setMatters(data) {
    return this.matters = data.matters;
  }

  delete(matter) {
    const index = this.matters.indexOf(matter);
    this.matters.splice(index, 1);
    this.Matter.delete(matter).subscribe(
      data => this.Responses.handleResponse(data),
      error => console.log(error)
    );
  }

  

}
