import { Component, OnInit, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionService } from 'src/app/shared/session.service';
import { BehaviorSubject } from 'rxjs';
import { APIService } from 'src/app/shared/api.service';
import { AuthenticationService } from 'src/app/shared/authentication.service';
import { ClientService } from 'src/app/shared/client.service';
import { HabboService } from 'src/app/shared/habbo.service';
import { Habbo } from 'src/app/models/habbo.model';
import { MenuService } from 'src/app/shared/menu.service';
import { ConfigService } from 'src/app/shared/config.service';
import { SideService } from 'src/app/shared/side.service';
import { NotifyService } from 'ng-metro4';

@Component({
  selector: '',
  template: '',
  styleUrls: [],
  providers: [HttpClient]
})
export class BaseComponent {

  private sessionService : SessionService;
  private authService : AuthenticationService;
  private clientService : ClientService;
  private sideService : SideService;
  private habboService : HabboService;
  private menuService : MenuService
  private configService : ConfigService;
  private notifyService : NotifyService;

  constructor(private injector : Injector) {
    this.configService = this.injector.get(ConfigService);
    this.sessionService = this.injector.get(SessionService);
    this.authService = this.injector.get(AuthenticationService);
    this.clientService = this.injector.get(ClientService);
    this.sideService = this.injector.get(SideService);
    this.habboService = this.injector.get(HabboService);
    this.menuService = this.injector.get(MenuService);
    this.notifyService = this.injector.get(NotifyService);

    this.notifyService.setup({
      timeout: 5000
    });
  }

  get Config()
  {
    return this.configService.Configuration;
  }

  get Habbo() : Habbo {
    return this.habboService.Habbo;
  }

  get Staff() {
    return this.habboService.Staff;
  }

  get onlineCount() {
    return this.habboService.Online;
  }

  login(identification : string, password : string) {
    return this.authService.login(identification, password);
  }

  register(username : string, mail : string, password : string) {
    return this.authService.register(username, mail, password);
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

  get sideShow() {
    return this.sideService.SideShow;
  }

  get menuTabs() {
    return this.menuService.Tabs;
  }

  get subTabs() {
    return this.menuService.currentSubTabs;
  }

  prepareTabs() {
    return this.menuService.prepareTabs(this.Habbo.username, this.Config.siteName);
  }

  setClientShow(value : boolean) {
    this.clientService.ClientShow.next(value);
  }

  updateHabboSettings(data) {
    return this.habboService.updateHabboSettings(data);
  }

  notify(message : string, title : string, options : any)
  {
    this.notifyService.create(message, title, options);
  }
}
