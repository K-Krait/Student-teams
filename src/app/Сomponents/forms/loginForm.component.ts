import { Component, OnInit } from "@angular/core";
import { Regions } from "../../Service/regions.service";
import { User } from "../../Entities/user";
import { Users } from "../../Service/users.service";
import { loggedStatus } from "../../Service/loggedIn.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-enterform",
  templateUrl: "./loginForm.component.html",
  styleUrls: ["./loginForm.component.css"],
  providers: [Regions, Users, loggedStatus]
})
export class loginFormComponent implements OnInit {
  regionsList: string[] = [];
  user: User = new User();
  usersList: User[];

  constructor(
    private router: Router,
    public regions: Regions,
    public users: Users,
    public loggedStatus: loggedStatus
  ) {
    
  }

  ngOnInit() {
    this.regionsList = this.regions.getRegions();
    this.usersList = this.users.getUsers();
    console.log(this.loggedStatus._isLoggedIn, this.loggedStatus.userNotFound);
  }

  Login() {
    for (var i = 0; i < this.usersList.length; i++) {
      if (this.user.login == this.usersList[i].login) {
        if (this.user.password == this.usersList[i].password) {
          if (this.user.region == this.usersList[i].region) {
            this.loggedStatus._isLoggedIn = true;
            this.router.navigate(["/main"]);
            console.log(this.loggedStatus._isLoggedIn, this.loggedStatus.userNotFound);
          }
        }
      }
    }

    if (!this.loggedStatus._isLoggedIn) {
      this.loggedStatus.userNotFound = true;
      console.log(this.loggedStatus._isLoggedIn, this.loggedStatus.userNotFound);
      this.user = new User();
    }
  }
}
