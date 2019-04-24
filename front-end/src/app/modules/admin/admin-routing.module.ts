import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { CareerCreateComponent } from './components/career/career-create/career-create.component';
import { CareerEditComponent } from './components/career/career-edit/career-edit.component';
import { CareerListComponent } from './components/career/career-list/career-list.component';
import { AfterLoginService } from 'src/app/services/after-login.service';
import { CareerMainComponent } from './components/career/career-main/career-main.component';
import { MatterCreateComponent } from './components/matter/matter-create/matter-create.component';
import { StudentCreateComponent } from './components/student/student-create/student-create.component';
import { MatterListComponent } from './components/matter/matter-list/matter-list.component';
import { MatterEditComponent } from './components/matter/matter-edit/matter-edit.component';
import { StudentEditComponent } from './components/student/student-edit/student-edit.component';
import { StudentListComponent } from './components/student/student-list/student-list.component';

const adminRoutes: Routes = [
	{
		path: 'admin-panel',
		component: CareerMainComponent,
		canActivate : [AfterLoginService],
		children: [
			{ 
				path : 'career', 
				component: CareerListComponent,
			},
			{ 
				path : 'career/edit/:id', 
				component: CareerEditComponent
			},
			{ 
				path : 'career/create', 
				component: CareerCreateComponent
			},
			{ 
				path : 'matter', 
				component: MatterListComponent
			},
			{ 
				path : 'matter/edit/:id', 
				component: MatterEditComponent
			},
			{ 
				path : 'matter/create', 
				component: MatterCreateComponent
			},
			{ 
				path : 'student', 
				component: StudentListComponent
			},
			{ 
				path : 'student/edit/:id', 
				component: StudentEditComponent
			},
			{ 
				path : 'student/create', 
				component: StudentCreateComponent
			},
			
			
			
			
		]
	}
]; 

@NgModule({
	imports: [RouterModule.forChild(adminRoutes)],
	exports: [RouterModule]
})

export class AdminRoutingModule {}