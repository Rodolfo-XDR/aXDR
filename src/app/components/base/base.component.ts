import { Component, OnInit, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionService } from 'src/app/shared/session.service';
import { BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';

@Component({
  selector: '',
  template: '',
  styleUrls: [],
  providers: [HttpClient]
})
export class BaseComponent implements OnInit {

  private sessionService : SessionService;

  constructor(private injector : Injector) {
    this.sessionService = this.injector.get(SessionService);
  }

  ngOnInit() {
  }

  showClient() {
    this.sessionService.showClient();
  }

  hideClient() {
    this.sessionService.hideClient();
  }

  register(username : string, mail : string, password : string) {
    return this.sessionService.register(username, mail, password);
  }

  login(identification : string, password : string) {
    return this.sessionService.login(identification, password);
  }

  logout() {
    return this.sessionService.logout();
  }

  forceLogout() {
    return this.sessionService.forceLogout();
  }

  ping() {
    return this.sessionService.ping();
  }
  
  get Habbo() : BehaviorSubject<User> {
    return this.sessionService.Habbo;
  }

  get clientShow() : BehaviorSubject<boolean> {
    return this.sessionService.ClientShow;
  }

  get isLogged() : BehaviorSubject<boolean> {
    return this.sessionService.IsLogged;
  }

  setLogged(value : boolean) : void {
    this.sessionService.IsLogged.next(value);
  }
}
