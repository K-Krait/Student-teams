import { Component, OnInit } from "@angular/core";
import { Card } from "../../Entities/card";
import { logoRepository } from "../../Entities/logoRepository";

@Component({
  selector: "app-main",
  templateUrl: "./mainPage.component.html",
  styleUrls: ["./mainPage.component.css"]
})
export class mainPageComponent {
  addBookFormVisibility: boolean = false;
  addBookBtnVisibility: boolean = true;
  cardDeckVisibility: boolean = true;

  logo = new logoRepository();
  todaDate: Date = new Date();

  card: Card = new Card();
  cards: Card[] = [];

  constructor() {}

  getCards() {
    return this.cards;
  }

  addBook() {
    this.addBookBtnVisibility = false;
    this.cardDeckVisibility = false;
    this.addBookFormVisibility = true;
  }

  createBook() {
    this.addBookFormVisibility = false;
    this.cardDeckVisibility = true;
    this.addBookBtnVisibility = true;
    this.cuttingTextarea();
    this.cards.push(this.card);
    this.card = new Card();
  }

  createBookCancel() {
    this.addBookFormVisibility = false;
    this.addBookBtnVisibility = true;
    this.cardDeckVisibility = true;
  }

  changeListener($event: any): void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    var file: File = inputValue.files[0];
    var reader: FileReader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      this.card.Img = reader.result;
    };
  }

  cuttingTextarea() {
    if (this.card.Text) {
      if (this.card.Text.length >= 200) {
        this.card.Text = this.card.Text.substring(0, 150) + " ...";
      }
    }
  }

  checkingTextFooter() {
    let date = this.todaDate.getFullYear();
    if (this.card.TextFooter > date) {
      this.card.TextFooter = null;
    }
  }
}
