import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "../Сomponents/app.component";
import { loginFormComponent } from "../Сomponents/forms/loginForm.component";
import { startPageComponent } from "../Сomponents/startPage/startPage.component";
import { mainPageComponent } from "../Сomponents/mainPage/mainPage.component";
import { notFoundPageComponent } from "../Сomponents/notFoundPage/notFoundPage.component";
import { RegionsService } from "../Service/regions.service";
import { UsersService } from "../Service/users.service";
import { AuthService } from "../Service/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    loginFormComponent,
    startPageComponent,
    mainPageComponent,
    notFoundPageComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [RegionsService, UsersService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
