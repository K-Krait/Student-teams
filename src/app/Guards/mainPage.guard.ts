import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
import {Injectable} from '@angular/core';
import { loggedStatus } from "../Service/loggedIn.service";

@Injectable({providedIn: 'root'})
export class mainPageGuard implements CanActivate {
  logStatus: boolean;

  constructor(public loggedStatus: loggedStatus) {
    this.logStatus = this.loggedStatus.getStatusLogged();
  }

  canActivate(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    return this.logStatus;
  }
}
