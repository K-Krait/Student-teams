import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { loginFormComponent } from "../Сomponents/forms/loginForm.component";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private loginStatus: loginFormComponent,
    private _router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    if (this.loginStatus._isLoggedIn) {
      return true;
    }
  }
}
