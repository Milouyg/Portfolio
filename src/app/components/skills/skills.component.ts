import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import data from "../../../assets/json/info.json";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements AfterViewInit{
    activeSummary:string = "";
    skillsData = data["skills"];

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

    setActiveSummary(text:string){
        this.activeSummary = text;
    }

}
