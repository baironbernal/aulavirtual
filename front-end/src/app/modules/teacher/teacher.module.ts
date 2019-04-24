import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './components/task/task-list/task-list.component';
import { TaskMainComponent } from './components/task/task-main/task-main.component';
import { TeacherRoutingModule } from './teacher-routing.module';
import { BannerComponent } from './components/banner/banner.component';
import { TaskCreateComponent } from './components/task/task-create/task-create.component';
import { MatterListComponent } from './components/matter/matter-list/matter-list.component';


@NgModule({
  declarations: [TaskListComponent, TaskMainComponent, BannerComponent, TaskCreateComponent, MatterListComponent],
  imports: [
    CommonModule,
    TeacherRoutingModule
  ],
  exports: [
    TaskMainComponent,
    BannerComponent
  ],
})
export class TeacherModule { }
