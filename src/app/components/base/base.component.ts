import { Component, OnInit, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionService } from 'src/app/shared/session.service';
import { BehaviorSubject } from 'rxjs';
import { APIService } from 'src/app/shared/api.service';
import { AuthenticationService } from 'src/app/shared/authentication.service';
import { ClientService } from 'src/app/shared/client.service';
import { HabboService } from 'src/app/shared/habbo.service';
import { Habbo } from 'src/app/models/habbo.model';

@Component({
  selector: '',
  template: '',
  styleUrls: [],
  providers: [HttpClient]
})
export class BaseComponent {

  private sessionService : SessionService;
  private apiService : APIService;
  private authService : AuthenticationService;
  private clientService : ClientService;
  private habboService : HabboService;
  
  public HotelName : string = "Gabbuz";

  constructor(private injector : Injector) {
    this.sessionService = this.injector.get(SessionService);
    this.apiService = this.injector.get(APIService);
    this.authService = this.injector.get(AuthenticationService);
    this.clientService = this.injector.get(ClientService);
    this.habboService = this.injector.get(HabboService);
  }

  register(username : string, mail : string, password : string) {
    return this.authService.register(username, mail, password);
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

  get clientShow() {
    return this.clientService.ClientShow;
  }

  setClientShow(value : boolean) {
    this.clientService.ClientShow.next(value);
  }

  get Habbo() : Habbo {
    return this.habboService.Habbo;
  }

  updateHabboSettings(data) {
    return this.habboService.updateHabboSettings(data);
  }

  getStaff() {
    return this.habboService.Staff;
  }
}
