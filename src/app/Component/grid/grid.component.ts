import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input() data;
  constructor() {

   }

  ngOnInit(): void {

  }
  ngOnChanges()
  {
    console.log("ngonchanges")
    console.log(this.data);
  }
  getfilterdata(user)
  {
    return Object.keys(user);
  }
  getfilterrowdata(user)
  {
    return Object.values(user);

  }
}
