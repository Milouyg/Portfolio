import { Component } from '@angular/core';
import data from "../../../assets/json/info.json";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent{
    data = data['about-me']; // We fetch the data here
}
