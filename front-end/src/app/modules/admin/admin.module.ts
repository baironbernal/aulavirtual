//list required modules from node_modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminRoutingModule } from './admin-routing.module';

//Components


import { CareerCreateComponent } from './components/career/career-create/career-create.component';
import { CareerEditComponent } from './components/career/career-edit/career-edit.component';
import { CareerListComponent } from './components/career/career-list/career-list.component';
import { BannerComponent } from './components/banner/banner.component';
import { CareerMainComponent } from './components/career/career-main/career-main.component';
import { MatterCreateComponent } from './components/matter/matter-create/matter-create.component';
import { MatterListComponent } from './components/matter/matter-list/matter-list.component';
import { MatterEditComponent } from './components/matter/matter-edit/matter-edit.component';
import { StudentCreateComponent } from './components/student/student-create/student-create.component';
import { StudentListComponent } from './components/student/student-list/student-list.component';
import { StudentEditComponent } from './components/student/student-edit/student-edit.component';
import { StudentMainComponent } from './components/student/student-main/student-main.component';
import { MatterMainComponent } from './components/matter/matter-main/matter-main.component';


@NgModule({
	imports: [CommonModule,FormsModule,HttpClientModule,AdminRoutingModule],
	declarations: [
		CareerCreateComponent,
		CareerListComponent,
		CareerEditComponent,
		BannerComponent,
		CareerMainComponent,
		MatterCreateComponent,
		MatterListComponent,
		MatterEditComponent,
		StudentCreateComponent,
		StudentListComponent,
		StudentEditComponent,
		StudentMainComponent,
		MatterMainComponent
	
	],
	exports: [
		CareerCreateComponent,
		CareerListComponent,
		CareerEditComponent,
		BannerComponent,
		CareerMainComponent
	],
	providers: []
})

export class AdminModule {}

