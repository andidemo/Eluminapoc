import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenericserviceService {
public gridValue:any;
  constructor() { 
    console.log(this.gridValue);
  }
}
