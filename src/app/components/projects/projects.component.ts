import { Component } from '@angular/core';
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
}
