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

    copyEmail(email:string, event:Event){
        navigator.clipboard.writeText(email);
        const copyIcon = event.target as HTMLElement; // Here we say what datatype it is
        copyIcon!.className = "";
        copyIcon!.classList.add("fa-solid", "fa-check");
    }
}
