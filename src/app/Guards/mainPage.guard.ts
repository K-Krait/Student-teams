import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";

import { AuthService } from "../Service/auth.service";

@Injectable({
  providedIn: "root"
})
export class mainPageGuard implements CanActivate {
  isLoggedIn: any;

  constructor(public authService: AuthService, private router: Router) {
    const loginObservable = this.authService.getStatusLoginObservable();
    loginObservable.subscribe((status: string) => {
      this.isLoggedIn = status;
    });
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.isLoggedIn == 'true') {

      return true;
    }
    this.router.navigate(["/"]);
    return false;
  }
}
