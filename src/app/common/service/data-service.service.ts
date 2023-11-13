import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  menuOpenBSubject = new BehaviorSubject<Boolean>(false);

  navigationSubject = new Subject();
  headerNavigationSubject = new Subject();
  constructor() { }

}
