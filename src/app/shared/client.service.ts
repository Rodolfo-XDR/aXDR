import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private clientShow = new BehaviorSubject<boolean>(false);

  constructor() {
    
  }

  get ClientShow() {
    return this.clientShow;
  }
}
