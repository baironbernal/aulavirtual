import { Component, OnInit, DoCheck } from '@angular/core';
import { ProtectRouteService } from 'src/app/services/protect-route.service';
import { Router } from '@angular/router';
import { TokenjwtService } from 'src/app/services/tokenjwt.service';

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  public title = 'BANNER';
  public loggedIn : boolean;
  public role = null;

  constructor(
        private ProtectRoute : ProtectRouteService,
        private router : Router,
        private Tokenjwt : TokenjwtService
    ) {}

  ngOnInit() {
    this.ProtectRoute.authStatus.subscribe( value => this.loggedIn = value );
  }
  ngDoCheck() {
    this.role = this.Tokenjwt.getRole();
  } 



  logout(event : MouseEvent) {
    event.preventDefault();
    this.Tokenjwt.remove();
    this.ProtectRoute.changeStatus(false);
    location.reload();

  }

}
