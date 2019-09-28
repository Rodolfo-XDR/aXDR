import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private habbo : BehaviorSubject<User>;
  private clientShow : BehaviorSubject<boolean>;
  private isLogged : BehaviorSubject<boolean>;

  constructor(private http : HttpClient) { 
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

      this.ping().subscribe(data => { console.log('Success'); }, err => { console.log('Error'); });

      this.isLogged.next(true);
    }
  }

  login(identification : string, password : string) {
    //TODO check for duplicates (This goes on the aXDR API and just display an error)
    return this.http.post('http://localhost:3000/api/auth/login', { identification, password }, { withCredentials: true })
    .pipe(map(user => { 

      if(user) {
        let tempHabbo : User = new User(user['session']['habbo']['id'], user['session']['habbo']['username'], user['session']['habbo']['mail'], user['session']['habbo']['motto'],user['session']['habbo']['look'], user['session']['habbo']['rank'], user['session']['habbo']['auth_ticket']);

        this.habbo.next(tempHabbo);
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.isLogged.next(true);
      }

      return user; 
    }));
  }

  logout() {
    return this.http.get('http://localhost:3000/api/auth/session/logout', { withCredentials: true })
    .pipe(map(res => {
      if(localStorage.getItem('currentUser') != null || undefined) {
        localStorage.removeItem('currentUser');
        this.isLogged.next(false);
      }

      return res;
    }));
  }

  ping() {
    return this.http.get('http://localhost:3000/api/authentication/session/get', { withCredentials: true });
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
