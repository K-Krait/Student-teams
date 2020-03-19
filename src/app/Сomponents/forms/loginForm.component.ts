import { Component, OnInit } from "@angular/core";
import { User } from "../../Entities/user";
import {Router} from '@angular/router';


@Component({
  selector: "app-enterform",
  templateUrl: "./loginForm.component.html",
  styleUrls: ["./loginForm.component.css"]
})


export class loginFormComponent implements OnInit {
  user: User = new User();

  _isLoggedIn: boolean = false;
  userNotFound: boolean = false;

  constructor(private router: Router) {}

  regions: string[] = [
    "Кировская область",
    "Московская область",
    "Ленинградская область",
    "Воронежская область"
  ];

  Users: User[] = [
    { login: "Константин", password: "123", region: "Кировская область" },
    { login: "Александр", password: "234", region: "Московская область" }
  ];

  Login() {
    for (var i = 0; i < this.Users.length; i++) {
      if (this.user.login == this.Users[i].login) {
        if (this.user.password == this.Users[i].password) {
          if (this.user.region == this.Users[i].region) {
            this._isLoggedIn = true;
            this.router.navigate(['/main'])

          }
        }
      }
    }

    if (!this._isLoggedIn) {
      this.userNotFound = true;
      this.user = new User();
    }
  }

  ngOnInit() {}
}
