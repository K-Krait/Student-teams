import { Component, OnInit } from '@angular/core';
import { logoRepository } from "../../Entities/logoRepository";

@Component({
  selector: 'app-home-page',
  templateUrl: './startPage.component.html',
  styleUrls: ['./startPage.component.css']
})
export class startPageComponent implements OnInit {

  logo = new logoRepository();
  getLogo() {
    return this.logo.logoData;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
