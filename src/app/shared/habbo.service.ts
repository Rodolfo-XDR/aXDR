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
      this.habbo = new Habbo(tempHabbo);
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
