import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { loginFormComponent } from "../Сomponents/forms/loginForm.component";

export class AuthGuard extends loginFormComponent implements CanActivate {
  constructor(private loginStatus: boolean, private _router: Router) {
    super(loginStatus);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    if (this.loginStatus == true) {
      this._router.navigate(["/main"]);
    }
    return;
  }
}
