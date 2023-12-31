import { Component } from '@angular/core';
import data from "./../../../assets/json/info.json";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    headerData;

    constructor(){
        this.headerData = data.nav; // We fetch the data here
    }

    toggleMenu(menu:HTMLElement) {
        menu?.classList.toggle("show");
    }
}
