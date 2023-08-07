import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../service/data-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  isMenuOpened:any;
  constructor(private dataService:DataServiceService){}
  
  ngOnInit(): void {
   this.dataService.menuOpenBSubject.subscribe((data:any)=> this.isMenuOpened =data)
  }
  menuEvents(){
   if(this.isMenuOpened){
    this.dataService.menuOpenBSubject.next(false)
    this.enableBodyScroll()
   }else{
    this.dataService.menuOpenBSubject.next(true)
    this.disableBodyScroll()
   }

  }

  disableBodyScroll(){
    const body = document.querySelector("body")
    if(body){
      body.style.overflow = "hidden"
    }
  }
  enableBodyScroll(){
    const body = document.querySelector("body")
    if(body){
      body.style.overflow = "auto"
    }
  }

}
