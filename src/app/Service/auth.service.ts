import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: "root"
})
export class AuthService {
  userNotFound = false;

  constructor() {
  }

  public getStatusLogin(status): any {
    const loginStatus = new Observable(observer => {
      observer.next(status);
    });

    return loginStatus;
  }
}






