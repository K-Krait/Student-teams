import { Component, OnInit } from "@angular/core";
import { Card } from "../../Entities/card";

@Component({
  selector: "app-main",
  templateUrl: "./mainPage.component.html",
  styleUrls: ["./mainPage.component.css"]
})
export class mainPageComponent implements OnInit {
  
  addBookFormVisibility: boolean = false;
  addBookBtnVisibility: boolean = true;
  
  card: Card = new Card();
  
  constructor() {}

  public cardsItem: string[];

  getcardsItem() {
    return this.card;
    }
  
  createBook() {
    this.addBookBtnVisibility = false;
    this.addBookFormVisibility = true;
  }

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
