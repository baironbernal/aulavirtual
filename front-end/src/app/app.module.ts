import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { routing,appRoutingProviders } from './app.routing';
import { HttpClientModule }    from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { ToastrModule } from 'ngx-toastr';


//import my Modules own 

import { TeacherModule } from './modules/teacher/teacher.module';
import { AdminModule } from './modules/admin/admin.module';
import { AuthModule } from './modules/auth/auth.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,HomeComponent,BannerComponent,ContactComponent, FooterComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    AdminModule,
    TeacherModule,
    AuthModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()

  ],
  providers: [
  	appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
