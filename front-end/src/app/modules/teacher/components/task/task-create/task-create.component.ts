import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {
  public matter_id = null;
  
  public cutsTask = null;

  constructor(
    private Task : TaskService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.matter_id  = this.route.snapshot.paramMap.get('id');

    this.Task.show(this.matter_id).subscribe(
      data => console.log(Object.values(this.setData(data))),
      error => {
        return console.log(error);
      }
    );
  }

  setData(data) {
   return this.cutsTask = Object.values(data.cutsTask);
  }

}
