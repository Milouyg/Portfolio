import { Component } from '@angular/core';
import data from "../../../assets/json/info.json";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent{
    activeSummary:string = "";
    skillsData:Record<string, string> = data["skills"]; // We specify the key and the value as strings in skillsData
    constructor(){

    }

    setActiveSummary(text:string){
        this.activeSummary = text;
    }

}
