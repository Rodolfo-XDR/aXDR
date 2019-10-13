import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private habbo : BehaviorSubject<User>;
  private clientShow : BehaviorSubject<boolean>;
  private isLogged : BehaviorSubject<boolean>;

  constructor(private http : HttpClient, private router : Router) { 
    this.habbo = new BehaviorSubject<User>(null);
    this.clientShow = new BehaviorSubject<boolean>(false);
    this.isLogged = new BehaviorSubject<boolean>(false);

    
    let currentUser = localStorage.getItem('currentUser');

    if(currentUser == null || undefined) {
      this.isLogged.next(false);
      return;
    }
    else
    {
      let object = JSON.parse(currentUser);
      let tempHabbo : User = new User(object.id, object.username, object.mail, object.motto, object.look, object.rank, object.auth_ticket);
      this.habbo.next(tempHabbo);

      this.ping()
      .subscribe(
        data => { 
          this.isLogged.next(true); 
        },
        err => { 
          this.forceLogout();
        });

      this.isLogged.next(true);
    }
  }

  register(username : string, mail : string, password : string) {
    return this.http.post('http://localhost:3000/api/user/add', { username, mail, password }, { withCredentials: true })
    .pipe(map(user => {
      return user;
    }));
  }

  login(identification : string, password : string) {
    //TODO check for login duplicates
    return this.http.post('http://localhost:3000/api/auth/login', { identification, password }, { withCredentials: true })
    .pipe(map(user => { 

      if(user) {
        let tempHabbo : User = new User(user['session']['habbo']['id'], user['session']['habbo']['username'], user['session']['habbo']['mail'], user['session']['habbo']['motto'],user['session']['habbo']['look'], user['session']['habbo']['rank'], user['session']['habbo']['auth_ticket']);

        this.habbo.next(tempHabbo);
        localStorage.setItem('currentUser', JSON.stringify(user['session']['habbo']));
        this.isLogged.next(true);
      }

      return user; 
    }));
  }

  logout() {
    return this.http.get('http://localhost:3000/api/auth/session/logout', { withCredentials: true })
    .pipe(map(res => {
      this.forceLogout();

      return res;
    }));
  }

  forceLogout() {
    if(localStorage.getItem('currentUser') != null || undefined) {
      localStorage.removeItem('currentUser');
      this.isLogged.next(false);
    }
  }

  ping() {
    return this.http.get('http://localhost:3000/api/auth/session/get', { withCredentials: true });
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

  get Habbo() {
    return this.habbo;
  }

  get IsLogged() {
    return this.isLogged;
  }
}
