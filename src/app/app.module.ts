import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProjectComponent } from './components/projects/projects.component';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import { ButtonComponent } from './components/button/button.component';
import { SkillsComponent } from './components/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TitleBarComponent,
    ButtonComponent,
    LandingPageComponent,
    AboutMeComponent,
    SkillsComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
