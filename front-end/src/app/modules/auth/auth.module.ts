import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


//Routes
import { AuthRoutingModule } from './auth-routing.module';

//Components

import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  imports: [CommonModule,FormsModule,HttpClientModule,AuthRoutingModule],
  declarations: [MainComponent,LoginComponent, RegisterComponent],
  exports: [MainComponent,LoginComponent, RegisterComponent]

})
export class AuthModule { }
