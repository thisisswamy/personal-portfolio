import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  menuOpenBSubject = new BehaviorSubject<Boolean>(false);
  constructor() { }

}
