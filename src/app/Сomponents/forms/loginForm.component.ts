import { Component, OnInit } from "@angular/core";
import { Regions } from "../../Service/regions.service";
import { User } from "../../Entities/user";
import { Users } from "../../Service/users.service";
import { loggedStatus } from "../../Service/loggedIn.service";
import { Router } from "@angular/router";
import { AuthService } from "../../Service/auth.service";

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
    public router: Router,
    public regions: Regions,
    public users: Users,

    public authService: AuthService
  ) // public loggedStatus: loggedStatus,
  {}

  ngOnInit() {
    this.regionsList = this.regions.getRegions();
    this.usersList = this.users.getUsers();
    // console.log(this.loggedStatus._isLoggedIn, this.loggedStatus.userNotFound);
  }

  login() {
    this.authService.login().subscribe(() => {
      if (this.authService.isLoggedIn) {
        // Usually you would use the redirect URL from the auth service.
        // However to keep the example simple, we will always redirect to `/admin`.
        const redirectUrl = "/main";

        // Redirect the user
        this.router.navigate([redirectUrl]);
      }
    });
  }
}

// for (var i = 0; i < this.usersList.length; i++) {
//   if (this.user.login == this.usersList[i].login) {
//     if (this.user.password == this.usersList[i].password) {
//       if (this.user.region == this.usersList[i].region) {
//         this.loggedStatus._isLoggedIn = true;
//         this.router.navigate(["/main"]);
//         console.log(this.loggedStatus._isLoggedIn, this.loggedStatus.userNotFound);
//       }
//     }
//   }
// }

// if (!this.loggedStatus._isLoggedIn) {
//   this.loggedStatus.userNotFound = true;
//   console.log(this.loggedStatus._isLoggedIn, this.loggedStatus.userNotFound);
//   this.user = new User();
// }
