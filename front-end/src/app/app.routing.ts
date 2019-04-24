import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { BeforeLoginService } from './services/before-login.service';



const appRoutes: Routes = [
	{
		path:'home', 
		component:HomeComponent,
		canActivate : [BeforeLoginService]
	},
	{
		path:'', 
		redirectTo:'home', 
		pathMatch:'full'
	},
	{
		path:'contact', 
		component:ContactComponent,
		canActivate : [BeforeLoginService]
	},
];


export const appRoutingProviders:any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);