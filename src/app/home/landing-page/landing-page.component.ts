import { Component, OnInit } from '@angular/core';
import { DataConstants } from 'src/app/common/service/DataConstants';
import { DataServiceService } from 'src/app/common/service/data-service.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit{
  skillsList = DataConstants.skillsDetails;
  projectsList = DataConstants.projectDetails

  constructor(private readonly dataService:DataServiceService){}
  ngOnInit(): void {
    this.dataService.navigationSubject.subscribe((navURL:any )=> {
      const navArea= document.getElementById(navURL);
      navArea?.scrollIntoView({
        behavior:'smooth'
      })
      
    })
  }

}
