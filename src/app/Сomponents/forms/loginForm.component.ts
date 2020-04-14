import { Component, OnInit } from "@angular/core";
import { RegionsService } from "../../Service/regions.service";
import { User } from "../../Entities/user";
import { UsersService } from "../../Service/users.service";
import { Router } from "@angular/router";
import { AuthService } from "../../Service/auth.service";

@Component({
  selector: "app-enterform",
  templateUrl: "./loginForm.component.html",
  styleUrls: ["./loginForm.component.css"]
})
export class loginFormComponent implements OnInit {
  regionsList: string[] = [];
  user: User = new User();
  usersList: User[];
  loginStatus: string;

  constructor(
    public router: Router,
    public regions: RegionsService,
    public users: UsersService,
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.regionsList = this.regions.getRegions();
    this.usersList = this.users.getUsers();
  }

  Login() {
    for (var i = 0; i < this.usersList.length; i++) {
      if (this.user.login == this.usersList[i].login) {
        if (this.user.password == this.usersList[i].password) {
          if (this.user.region == this.usersList[i].region) {
            localStorage.setItem(this.user.login, 'true');
            this.loginStatus = localStorage.getItem(this.user.login);
          }
        }
      }
    }

    this.authService.postStatusLogin(this.loginStatus);

    if (this.loginStatus == "true") {
      this.router.navigate(["/main"]);
    }

    if (this.loginStatus == "false") {
      this.authService.userNotFound = true;
      this.user = new User();
    }
  }
}
