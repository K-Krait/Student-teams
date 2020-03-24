import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class loggedStatus {
  public _isLoggedIn: boolean = false;
  public userNotFound: boolean = false;

  getStatusLogged(): boolean {
    return this._isLoggedIn;
  }

  setStatusLogged(status: boolean): boolean {
    this._isLoggedIn = status;
    return this._isLoggedIn;
  }
}
