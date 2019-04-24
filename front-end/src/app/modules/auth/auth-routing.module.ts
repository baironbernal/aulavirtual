import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MainComponent } from './components/main/main.component';
import { BeforeLoginService } from 'src/app/services/before-login.service';

const authRoutes: Routes = [
	{
		path: 'auth-panel',
		component: MainComponent,
		canActivate : [BeforeLoginService],
		children: [
			{ path : '', redirectTo: 'login', pathMatch:'full' },
			{ path : 'login', component: LoginComponent, canActivate : [BeforeLoginService] },
			{ path : 'register', component: RegisterComponent, canActivate : [BeforeLoginService] }
		]
	}
]; 

@NgModule({
	imports: [RouterModule.forChild(authRoutes)],
	exports: [RouterModule]
})

export class AuthRoutingModule {}