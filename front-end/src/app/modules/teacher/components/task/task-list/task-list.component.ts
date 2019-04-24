import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Input() cut_id : BigInteger;
  public tasksByCut = null;


  constructor(private Task : TaskService) { }

  ngOnInit() {
    this.Task.getTaskByCut(this.cut_id).subscribe(
      data => this.setData(data),
      error => console.log(error)
    );
  }

  setData(data) {
    return this.tasksByCut = data;
  }



}
