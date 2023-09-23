import { AfterViewInit, Component } from '@angular/core';
import data from "../../../assets/json/info.json";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent  {
    contactData = data["contact"];
    copyText = data["contact"]["email"];
    constructor(){ }

    copyEmail(email:string){
        navigator.clipboard.writeText(email);
    }
}
