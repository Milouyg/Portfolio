import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import data from "../../../assets/json/info.json";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements AfterViewInit{
    contactData = data["contact"];
    constructor(){ }

    @ViewChild('section')section?:ElementRef; // A reference to an element

    ngAfterViewInit(): void {
        const observer = new IntersectionObserver((entries) => { // IntersectionObserver checks for when 2 element cross
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    entry.target.classList.add("show");
                }else{
                    entry.target.classList.remove("show");
                }
            });
        });

        if(this.section){
            const element = this.section.nativeElement as Element;
            observer.observe(element); // Fetch the element from the ElementRef
        }
    }

}
