import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {MYTUDOS,OTHERTUDOS} from '../mock-tudu'
@Injectable({
  providedIn: 'root'
})
export class TudoService {

  private myToduList = new BehaviorSubject(MYTUDOS)

  private otherToduList = new BehaviorSubject(OTHERTUDOS)

  myTodu = this.myToduList.asObservable()

  otherTodu = this.otherToduList.asObservable()

  constructor() { }

  

}
