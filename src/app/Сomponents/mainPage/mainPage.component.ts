import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './mainPage.component.html',
  styleUrls: ['./mainPage.component.css']
})
export class mainPageComponent implements OnInit {

  constructor() { }

  addBookFormVisibility : boolean = false; 
  addBookBtnVisibility : boolean = true; 

  addBook(){
    this.addBookBtnVisibility = false;
    
    this.addBookFormVisibility = true;
    
  }
  ngOnInit() {
  }

}
