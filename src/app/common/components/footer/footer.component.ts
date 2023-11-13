import { Component } from '@angular/core';
import { DataServiceService } from '../../service/data-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  gmailAddress ="thudumswamy786@gmail.com"
  constructor(private readonly dataService:DataServiceService){}

  navigation(event:any){
    let tagName:any;
    if(event.target && event.target.tagName === 'LI'){
      tagName = event.target.id
      this.dataService.navigationSubject.next(tagName);
    }
    
  }

}
