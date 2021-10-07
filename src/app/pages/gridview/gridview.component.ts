import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gridview',
  templateUrl: './gridview.component.html',
  styleUrls: ['./gridview.component.css']
})
export class GridviewComponent implements OnInit {
  public childata
  constructor() { }

  ngOnInit(): void {

  }
  getdata(event)
  {
    this.childata=event;
    console.log(this.childata);
  }
}
