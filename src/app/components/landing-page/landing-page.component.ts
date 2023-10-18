import { Component } from '@angular/core';
import data from "../../../assets/json/info.json";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
    data;

    constructor(){
        this.data = data["landing-page"]; // We fetch the data here
    }



}
