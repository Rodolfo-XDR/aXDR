import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private habbo : User;
  private clientShow : BehaviorSubject<boolean>;

  constructor() { 
    this.clientShow = new BehaviorSubject<boolean>(false);
  }

  showClient() {
    this.clientShow.next(true);
  }

  hideClient() {
    this.clientShow.next(false);
  }

  get ClientShow() {
    return this.clientShow;
  }
}
