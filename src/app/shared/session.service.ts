import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { APIService } from './api.service';
import { HabboService } from './habbo.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private isLogged : BehaviorSubject<boolean>;
  private session : BehaviorSubject<string>;

  constructor(private router : Router, private apiService : APIService, private habboService : HabboService) {
    this.isLogged = new BehaviorSubject<boolean>(false);
    this.session = new BehaviorSubject<string>(localStorage.getItem('currentUser'));

    if(this.session.value == null || undefined)
      this.isLogged.next(false);
    else
    {
      this.isLogged.next(true);
    }
  }

  pingStatus() {
    if(!this.isLogged.value) return;

    return this.apiService.get('/auth/session/get')
    .subscribe(data => {
      localStorage.setItem('currentUser', JSON.stringify(data.session.habbo));
      this.habboService.updateHabbo(JSON.parse(localStorage.getItem('currentUser')));
      this.isLogged.next(true);
    }, err => {
        this.IsLogged.next(false);
        localStorage.removeItem('currentUser');
        this.router.navigate(['/']);
    });
  }

  get IsLogged() {
    return this.isLogged;
  }
}
