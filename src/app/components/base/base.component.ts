import { Component, OnInit, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionService } from 'src/app/shared/session.service';
import { BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import { APIService } from 'src/app/shared/api.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/authentication.service';

@Component({
  selector: '',
  template: '',
  styleUrls: [],
  providers: [HttpClient]
})
export class BaseComponent implements OnInit {

  private sessionService : SessionService;
  private apiService : APIService;
  private authService : AuthenticationService

  constructor(private injector : Injector) {
    this.sessionService = this.injector.get(SessionService);
    this.apiService = this.injector.get(APIService);
    this.authService = this.injector.get(AuthenticationService);
  }

  ngOnInit() {
  }

  register(username : string, mail : string, password : string) {
    this.authService.register(username, mail, password);
  }

  login(identification : string, password : string) {
    return this.authService.login(identification, password);
  }

  logout() {
    this.authService.logout();
  }

  get isLogged() : BehaviorSubject<boolean> {
    return this.sessionService.IsLogged;
  }

  setLogged(value : boolean) : void {
    this.sessionService.IsLogged.next(value);
  }
}
