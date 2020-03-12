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

  card: Card = new Card();
  cards: Card[] = [
    {
      ImgUrl: "Смайл",
      Title: "Книга 1",
      Text: " Описание книги",
      TextFooter: "1987"
    },
    {
      ImgUrl: "Смайл",
      Title: "Книга 2",
      Text: " Описание книги 2",
      TextFooter: "1999"
    }
  ];

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
    this.cards.push(this.card);
    this.card = new Card();
  }

  createBookCancel() {
    this.addBookFormVisibility = false;
    this.addBookBtnVisibility = true;
    this.cardDeckVisibility = true;
  }

  imgUrlBook: any;

  changeListener($event: any): void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    var file: File = inputValue.files[0];
    var reader: FileReader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      // return reader.result;
      console.log(reader.result);
      this.imgUrlBook = reader.result;
    };
  }
}
