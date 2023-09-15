import { AfterViewInit, Component } from '@angular/core';
import data from "../../../assets/json/info.json";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements AfterViewInit  {
    title = 'portfolio';
    data;

    constructor(){
        this.data = data; // We fetch the data here
      
    }
    ngAfterViewInit(): void {

    }


}
