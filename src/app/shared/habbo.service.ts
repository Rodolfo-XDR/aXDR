import { Injectable } from '@angular/core';
import { Habbo } from '../models/habbo.model';
import { APIService } from './api.service';
import { first, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HabboService {

  private habbo : Habbo;

  constructor(private apiService : APIService) {
    if(localStorage.getItem('currentUser') != null)
    {
      this.updateHabbo(JSON.parse(localStorage.getItem('currentUser')));
    }
  }

  get Habbo() : Habbo {
    return this.habbo;
  }

  updateHabbo(tempHabbo : string) : void {
    this.habbo = new Habbo(tempHabbo);
  }

  updateHabboSettings(data) {
    return this.apiService.post('/user/update/settings', data);
  }

  get Staff()
  {
    return this.apiService.get('/community/staff')
    .pipe(map(res => 
    {
      if(res.staffList != undefined)
        return res.staffList;
    }));
  }

  setHabbo(value : Habbo)
  {
    this.habbo = value;
  }
}
