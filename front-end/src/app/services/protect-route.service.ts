import { Injectable } from '@angular/core';
import { TokenjwtService } from './tokenjwt.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProtectRouteService {

  private loggedIn = new BehaviorSubject<boolean>(this.Tokenjwt.loggedIn());

  authStatus = this.loggedIn.asObservable();

  public changeStatus(value : boolean ) {
    this.loggedIn.next(value)
  }

  constructor(private Tokenjwt:TokenjwtService) {   }
}
