import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "../Сomponents/app.component";
import { loginFormComponent } from "../Сomponents/forms/loginForm.component";
import { startPageComponent } from "../Сomponents/startPage/startPage.component";
import { mainPageComponent } from "../Сomponents/mainPage/mainPage.component";
import { notFoundPageComponent } from "..//Сomponents/notFoundPage/notFoundPage.component";
import { CardComponent } from "../Сomponents/card/card.component";

@NgModule({
  declarations: [
    AppComponent,
    loginFormComponent,
    startPageComponent,
    mainPageComponent,
    notFoundPageComponent,
    CardComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
