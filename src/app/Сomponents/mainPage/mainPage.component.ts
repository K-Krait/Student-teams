import { Component, OnInit } from "@angular/core";
import { Card } from "../../Entities/card";

@Component({
  selector: "app-main",
  templateUrl: "./mainPage.component.html",
  styleUrls: ["./mainPage.component.css"]
})
export class mainPageComponent implements OnInit {
  constructor() {}

  addBookFormVisibility: boolean = false;
  addBookBtnVisibility: boolean = true;

  addBookForm() {
    this.addBookBtnVisibility = false;
    this.addBookFormVisibility = true;
  }

  card: Card = new Card();

  addBookEnter(){
    this.addBookFormVisibility = false;
    this.addBookBtnVisibility = true;
  }
  
  addBookCancel() {
    this.addBookFormVisibility = false;
    this.addBookBtnVisibility = true;
  }

  ngOnInit() {}
}
