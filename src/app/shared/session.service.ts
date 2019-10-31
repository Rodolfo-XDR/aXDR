import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { APIService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private habbo : BehaviorSubject<User>;
  private isLogged : BehaviorSubject<boolean>;
  private session : BehaviorSubject<string>;

  constructor(private router : Router, private apiService : APIService) {
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
      this.isLogged.next(true);
    }, err => {
        this.IsLogged.next(false);
        localStorage.removeItem('currentUser');
        this.router.navigate(['/']);
    });
  }

  get Habbo() {
    return this.habbo;
  }

  get IsLogged() {
    return this.isLogged;
  }
}
