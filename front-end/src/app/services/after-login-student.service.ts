import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { TokenjwtService } from './tokenjwt.service';

@Injectable({
  providedIn: 'root'
})
export class AfterLoginTeacherService implements CanActivate {
  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, 
  state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> { 
    if(this.Tokenjwt.getRole() == 'student') { 
      return this.Tokenjwt.loggedIn();      
    }
  }

  constructor(private Tokenjwt : TokenjwtService) { }
}
