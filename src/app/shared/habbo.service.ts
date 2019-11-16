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

  get Online()
  {
    return this.apiService.get('/community/usersOnline')
    .pipe(map(res => {
      if(res.usersOnline != undefined) return res.usersOnline;
    }));
  }

  get Staff()
  {
    return this.apiService.get('/community/staff')
    .pipe(map(res => 
    {
      if(res.staffList != undefined) return res.staffList;
    }));
  }

  get LeaderBoards()
  {
    return this.apiService.get('/community/leaderboards')
    .pipe(map(res => 
    {
      if(res.leaderboardsInfo != undefined) return res.leaderboardsInfo;
    }));
  }

  setHabbo(value : Habbo)
  {
    this.habbo = value;
  }
}
