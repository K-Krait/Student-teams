import { Component, OnInit } from "@angular/core";

@Component({
  selector: "filereader",
  templateUrl: "./inputFileReader.component.html",
  styleUrls: ["./inputFileReader.component.css"]
})
export class inputFileReaderComponent implements OnInit {
  imgUrlBook: any;

  changeListener($event: any): void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    var file: File = inputValue.files[0];
    var reader: FileReader = new FileReader();

    reader.onloadend = () => {
      reader.readAsDataURL(file);
      this.imgUrlBook = reader.result;
    };
    console.log(this.imgUrlBook);
  }

  ngOnInit() {}
}
