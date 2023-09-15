import { AfterViewInit, Component } from '@angular/core';
import data from "../../../assets/json/info.json";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements AfterViewInit  {
    title = 'portfolio';
    data;

    constructor(){
        this.data = data["landing-page"]; // We fetch the data here
    }
    ngAfterViewInit(): void {

    }


}
