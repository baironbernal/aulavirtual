import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {
  public cuts = null;

  constructor(private Task : TaskService) { }

  ngOnInit() {
    this.Task.create().subscribe(
      data => console.log(this.setData(data.cuts)),
      error => console.log(error)
    );
  }

  setData(data) {
   return this.cuts = data;
  }

  


}
