import { Component, OnInit } from "@angular/core";
import { Card } from "../../Entities/card";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent implements OnInit {
  
  card: Card = new Card();

  cardImg = this.card.cardImg;
  cardTitle = this.card.cardTitle;
  cardText = this.card.cardText;
  cardTextFooter = this.card.cardTextFooter;

  constructor() {}

  ngOnInit() {}
}
