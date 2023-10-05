import { Component, ElementRef, ViewChild } from '@angular/core';
import data from "../../../assets/json/info.json";
import { Project } from 'src/app/interfaces/Project';

@Component({
    selector: 'app-project',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectComponent {
    projectData = data["projects"];
    activeProject:Project = this.projectData["project-info"][0];

    setActiveProject(project: Project) {
        this.activeProject = project;
    }

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
