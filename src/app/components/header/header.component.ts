import { AfterViewInit, Component } from '@angular/core';
import data from "./../../../assets/json/info.json";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit  {
    title = 'portfolio';
    data;

    constructor(){
        this.data = data.nav; // We fetch the data here

    }

    ngAfterViewInit(): void {

    }

    openMenu() {
        const menu = document.getElementById("menu");
        menu?.classList.toggle("show");
    }
}
