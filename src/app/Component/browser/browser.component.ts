import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.css']
})
export class BrowserComponent implements OnInit {
  @Output() msgToSibling = new EventEmitter<any>();
  wronfile: boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  selectedFile
  jsonObj: {} // json object
  uploadFile(event) {
    if(event.target.files[0].type=="application/json")
    {
      this.wronfile=false;
      this.selectedFile = event.target.files[0];
      const fileReader = new FileReader();
      fileReader.readAsText(this.selectedFile);
      fileReader.onload = () => {
        console.log(fileReader.result.toString());
        this.jsonObj = (JSON.parse(fileReader.result.toString()));
        this.msgToSibling.emit(this.jsonObj)
      }
      fileReader.onerror = (error) => {
        console.log(error);
      }
    }
    else{
      this.wronfile=true;

    }
  
  }
}
