import { Component, OnInit } from "@angular/core";
import { userService } from "../../Service/user.service";
import { Router } from "@angular/router";



@Component({
  selector: "app-enterform",
  templateUrl: "./loginForm.component.html",
  styleUrls: ["./loginForm.component.css"],
  providers: [userService]
})
export class loginFormComponent implements OnInit {
  
  userNotFound: boolean = false;

  constructor(public user: userService, private router: Router) {
    this.user._isLoggedIn = false;
  }

  regions: string[] = [
    "Кировская область",
    "Московская область",
    "Ленинградская область",
    "Воронежская область"
  ];

  Users: userService[] = [
    { login: "Константин", password: "123", region: "Кировская область" },
    { login: "Александр", password: "234", region: "Московская область" }
  ];

  Login() {
    for (var i = 0; i < this.Users.length; i++) {
      if (this.user.login == this.Users[i].login) {
        if (this.user.password == this.Users[i].password) {
          if (this.user.region == this.Users[i].region) {
            this.user._isLoggedIn = true;
            this.router.navigate(["/main"]);
          }
        }
      }
    }

    if (!this.user._isLoggedIn) {
      this.userNotFound = true;
      this.user = new userService();
    }
  }

  ngOnInit() {}
}
