import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//middleware
import { AfterLoginTeacherService } from 'src/app/services/after-login-teacher.service';

//Components
import { TaskListComponent } from './components/task/task-list/task-list.component';
import { TaskMainComponent } from './components/task/task-main/task-main.component';
import { TaskCreateComponent } from './components/task/task-create/task-create.component';


const teacherRoutes: Routes = [
	{
		path: 'teacher-panel',
		component: TaskMainComponent,
		canActivate : [AfterLoginTeacherService],
		children: [
			{ 
				path : 'task', 
				component: TaskCreateComponent,
				
			}
		]
	}
]; 

@NgModule({
	imports: [RouterModule.forChild(teacherRoutes)],
	exports: [RouterModule]
})

export class TeacherRoutingModule {}