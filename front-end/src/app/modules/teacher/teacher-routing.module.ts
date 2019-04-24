import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//middleware
import { AfterLoginTeacherService } from 'src/app/services/after-login-teacher.service';

//Components

import { TaskMainComponent } from './components/task/task-main/task-main.component';
import { TaskCreateComponent } from './components/task/task-create/task-create.component';
import { MatterListComponent } from './components/matter/matter-list/matter-list.component';


const teacherRoutes: Routes = [
	{
		path: 'teacher-panel',
		component: TaskMainComponent,
		canActivate : [AfterLoginTeacherService],
		children: [
			{ 
				path : 'task/matters', 
				component: MatterListComponent,
			},
			{ 
				path : 'task/matter/:id', 
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