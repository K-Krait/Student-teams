import { Component, OnInit } from '@angular/core';
import { Card } from '../../Entities/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  card: Card = new Card();

  constructor() {
    
  // this.cardImg: string;
  // this.cardTitle = cardTitle;
  // this.cardText: string;
  // this.cardTextFooter: string;

   }

  ngOnInit() {
  }

}


  