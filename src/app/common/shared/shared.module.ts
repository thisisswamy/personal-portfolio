import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../components/project-card/project-card.component';
import { ExperienceCardComponent } from '../components/experience-card/experience-card.component';
import { SkillsCardComponent } from '../components/skills-card/skills-card.component';


const commonComponents = [ProjectCardComponent,ExperienceCardComponent, SkillsCardComponent]

@NgModule({
  declarations: [commonComponents],
  imports: [
    CommonModule
  ],
  exports:[commonComponents]
})
export class SharedModule { }
