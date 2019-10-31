import { Injectable } from '@angular/core';
import { APIService } from './api.service';
import { SessionService } from './session.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { map, first } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private apiService : APIService, private sessionService : SessionService, private router : Router, private http : HttpClient) { }

  login(identification, password) 
  {
    return this.apiService.post('/auth/login', {identification, password })
    .subscribe(res => {
      if(res.session == undefined || null) return new Error('invalid_session');

      localStorage.setItem('currentUser', JSON.stringify(res.session.habbo));
      this.sessionService.IsLogged.next(true);
      this.router.navigate(['/me']);
      return true;
    }, err => { return false; });
  }

  register(username, mail, password)
  {
    return this.apiService.post('/user/add', {username, mail, password})
    .subscribe(res => {
      this.login(username, password);
    });
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