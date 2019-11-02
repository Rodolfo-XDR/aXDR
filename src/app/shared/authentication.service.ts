import { Injectable } from '@angular/core';
import { APIService } from './api.service';
import { SessionService } from './session.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { map, first } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HabboService } from './habbo.service';
import { Habbo } from '../models/habbo.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private apiService : APIService, private sessionService : SessionService, private habboService : HabboService, private router : Router) { }

  login(identification, password) 
  {
    return this.apiService.post('/auth/login', {identification, password })
    .pipe(map(res => {
      localStorage.setItem('currentUser', JSON.stringify(res.session.habbo));
      let tempHabbo = JSON.parse(localStorage.getItem('currentUser'));
      this.habboService.setHabbo(new Habbo(tempHabbo.id, tempHabbo.username, tempHabbo.mail, tempHabbo.motto, tempHabbo.look, tempHabbo.account_created, tempHabbo.rank, tempHabbo.auth_ticket, tempHabbo.last_online, tempHabbo.last_login));
      this.sessionService.IsLogged.next(true);
      this.router.navigate(['/me']);
      return res;
    }));
  }

  register(username, mail, password)
  {
    return this.apiService.post('/user/add', {username, mail, password})
    .pipe(map(res => {
      this.login(username, password).pipe(first()).subscribe();
    }))
  }

  logout()
  {
    return this.apiService.get('/auth/session/logout')
    .subscribe(res => {
        localStorage.removeItem('currentUser');
        this.sessionService.IsLogged.next(false);
        this.router.navigate(['/']);
      });
  }
}