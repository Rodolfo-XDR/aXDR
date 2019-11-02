import { Injectable } from '@angular/core';
import { Habbo } from '../models/habbo.model';

@Injectable({
  providedIn: 'root'
})
export class HabboService {

  private habbo : Habbo;

  constructor() {
    if(localStorage.getItem('currentUser') != null)
    {
      let tempHabbo = JSON.parse(localStorage.getItem('currentUser'));
      this.habbo = new Habbo(tempHabbo.id, tempHabbo.username, tempHabbo.mail, tempHabbo.motto, tempHabbo.look, tempHabbo.account_created, tempHabbo.rank, tempHabbo.auth_ticket, tempHabbo.last_online, tempHabbo.last_login);
    }
  }

  get Habbo() : Habbo {
    return this.habbo;
  }

  setHabbo(value : Habbo)
  {
    this.habbo = value;
  }
}
