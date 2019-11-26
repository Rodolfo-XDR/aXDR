import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideService {

  private sideShow = new BehaviorSubject<boolean>(false);

  constructor() { }

  get SideShow()
  {
    return this.sideShow;
  }
}
