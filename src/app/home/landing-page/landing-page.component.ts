import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  skillsList =[
    {
      name:"Frontend Technologies",
      technolgies: [
        {
          techName:"HTML5", proficiency :95
        },
        {
          techName:"CSS", proficiency :80
        },
        {
          techName:"Java Script", proficiency :75
        },
        {
          techName:"Type Script", proficiency :85
        },
        {
          techName:"Angular", proficiency :90
        }
      ]

    },
    {
      name:"Database & Version Control",
      technolgies: [
        {
          techName:"SQL", proficiency :80
        },
        {
          techName:"MySQL", proficiency :70
        },
        {
          techName:"GIT", proficiency :85
        },
        {
          techName:"GitHub", proficiency :85
        },
        {
          techName:"Bit Bucket", proficiency :90
        }
      ]

    },
    {
      name:"Backend Technologies",
      technolgies: [
        {
          techName:"Java", proficiency :85
        },
        {
          techName:"Spring Boot", proficiency :85
        },
        {
          techName:"Spring Framework", proficiency :80
        },
        {
          techName:"Microservices", proficiency :70
        }
      ]

    }
  ]
}
