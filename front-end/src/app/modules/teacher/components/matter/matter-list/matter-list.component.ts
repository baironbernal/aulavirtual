import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-matter-list',
  templateUrl: './matter-list.component.html',
  styleUrls: ['./matter-list.component.css']
})
export class MatterListComponent implements OnInit {
  
  public matters = null;
  constructor(private Task : TaskService) { }

  ngOnInit() {
    this.Task.create().subscribe(
      data => console.log(this.setData(data)),
      error => {
        return console.log(error);
      }
    );
  }

  setData(data) {
    return this.matters = data.matters;
   }

}
