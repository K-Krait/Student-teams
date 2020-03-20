import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { loginFormComponent } from "../Сomponents/forms/loginForm.component";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  constructor(private loginStatus: loginFormComponent) {}

  canActivate(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    if (this.loginStatus.user._isLoggedIn) {
      return true;
    }
  }
}
