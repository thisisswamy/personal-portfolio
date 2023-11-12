import { Component } from '@angular/core';
import { DataConstants } from 'src/app/common/service/DataConstants';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  skillsList = DataConstants.skillsDetails;
  projectsList = DataConstants.projectDetails
}
