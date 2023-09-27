import { AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import data from "../../../assets/json/info.json";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements AfterViewInit {
    data = data['about-me']; // We fetch the data here

    @ViewChild('content')content?:ElementRef; // A reference to an element

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

        if(this.content){
            const element = this.content.nativeElement as Element;
            observer.observe(element); // Fetch the element from the ElementRef
        }
    }
}
