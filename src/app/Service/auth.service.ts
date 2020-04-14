import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: "root"
})
export class AuthService {
  userNotFound = false;

  postStatusLogin$: Observable<any>;
  private subscribers = new Subject<any>();

  constructor() {

  }

  public postStatusLogin(statusLogin: string) {
    this.subscribers.next(statusLogin);
  }

  public getStatusLoginObservable(): any {
    this.postStatusLogin$ = this.subscribers.asObservable();
    return this.postStatusLogin$

  }

}









