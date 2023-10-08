import { AfterViewInit, Component } from '@angular/core';
import data from "./../../../assets/json/info.json";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    data;

    constructor(){
        this.data = data.nav; // We fetch the data here

    }


    toggleMenu(menu:HTMLElement) {
        menu?.classList.toggle("show");
    }
}
