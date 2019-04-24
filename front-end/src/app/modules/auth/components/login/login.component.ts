import { Component, OnInit } from '@angular/core';
import { AuthjwtService }    from '../../../../services/authjwt.service';
import { TokenjwtService }    from '../../../../services/tokenjwt.service';
import { ProtectRouteService } from 'src/app/services/protect-route.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private Authjwt: AuthjwtService,
    private Tokenjwt: TokenjwtService,
    private ProtectRoute:ProtectRouteService,
    private router:Router
    ) {

  }
//ngmodules property from form login
  public form = {
    email:"admin@gmail.com",
    password:"password"
  };
  
  //save errors in variable

  public error = null;


  //when submit form
  onSubmit() {
    //call Authjwt method login and pass parameters (ngmodules property)
    this.Authjwt.login(this.form).subscribe(
      //if data is correcto call method own handleResponse
      data => this.handleResponse(data),
      //if isset errors call method handleError
      error => this.handleError(error)
    );
  }

  ///handle correct data from form login
  handleResponse(data) {
    this.Tokenjwt.handle(data.access_token, data.role);
    this.ProtectRoute.changeStatus(true);
    this.redirectTo(this.Tokenjwt.getRole());
  }
  //handle errors
  handleError(error) {
    this.error = error.error.error
  }

  ngOnInit() {
  }

  redirectTo(role) { 
    if(role === 'admin') { 
      this.router.navigateByUrl('admin-panel/career');
    }
    else if(role === 'teacher') {
      this.router.navigateByUrl('teacher-panel/task/matters');
    }

    
  }

}
