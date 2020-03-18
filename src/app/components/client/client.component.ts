import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { Location } from '@angular/common';
declare var window;
declare var document;

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent extends BaseComponent implements OnInit {

  private SWF : any = require('es-swfobject');

  public flashEnabled : boolean = false;
  private loading : boolean = false;
  private done : boolean = false;
  private sso : string = null;
  private message : string = 'Getting Ready';

  public showRadio : boolean = true;

  public clientOpen : boolean;

  constructor(injector : Injector, private location : Location) {
    super(injector)
  }

  async ngOnInit() {

    this.clientShow.subscribe(v => this.clientOpen = v)

    try {
      await this.checkFlash();
      await this.startClient();
      await this.loadInterface();
      
      window.addEventListener("message", this.processMessage);
    } catch(err) {

    }
  }

  async checkFlash() {
    if(this.SWF.hasFlashPlayerVersion('10'))
    {
      this.flashEnabled = true;
      return Promise.resolve();
    }

    this.flashEnabled = false;
    return Promise.reject(Error('flash_disabled'));
  }

  async startClient()
  {
    if(this.flashEnabled)
    {
      let oldClient : HTMLElement = document.getElementById('hotel-client');
      if(oldClient != undefined || null) oldClient.remove();

      let client: HTMLElement = document.createElement('div');
      client.id = 'hotel-client';

      document.getElementById('habbo-client-container').appendChild(client);
      
      this.sso = null;
      this.loading = true;
      this.done = false;

      this.sso = this.Habbo.auth_ticket;

      await this.buildClient();
    }
  }

  async buildClient() {
    let variables: Object = {
      "connection.info.host"          : this.Config.emulatorSettings.ip,
      "connection.info.port"          : this.Config.emulatorSettings.port,
      "url.prefix"                    : this.Config.siteLink,
      "site.url"                      : this.Config.siteLink,
      "client.reload.url"             : this.Config.siteLink + "/client",
      "client.fatal.error.url"        : this.Config.siteLink + "/client",
      "client.connection.failed.url"  : this.Config.siteLink + "/client",
      "external.variables.txt"        : this.Config.SWF.externalVariables,
      "external.texts.txt"            : this.Config.SWF.externalFlashTexts,
      "productdata.load.url"          : this.Config.SWF.productData,
      "furnidata.load.url"            : this.Config.SWF.furniData,
      "external.figurepartlist.txt"   : this.Config.SWF.figureList,
      "client.starting.revolving"     : "Para ciencia, \u00A1T\u00FA, monstruito!\/Cargando mensajes divertidos... Por favor, espera.\/\u00BFTe apetecen salchipapas con qu\u00E9?\/Sigue al pato amarillo.\/El tiempo es s\u00F3lo una ilusi\u00F3n.\/\u00A1\u00BFTodav\u00EDa estamos aqu\u00ED?!\/Me gusta tu camiseta.\/Mira a la izquierda. Mira a la derecha. Parpadea dos veces. \u00A1Ta-ch\u00E1n!\/No eres t\u00FA, soy yo.\/Shhh! Estoy intentando pensar.\/Cargando el universo de p\u00EDxeles.",
      "use.sso.ticket"                : "1",
      "sso.ticket"                    : this.sso,
      "processlog.enabled"            : "1",
      "flash.client.url"              : this.Config.SWF.base,
      "flash.client.origin"           : "popup",
      "client.allow.cross.domain"     : "0",
      "client.notify.cross.domain"    : "1"
    };

    let params = {
        "base"              : this.Config.SWF.base,
        "allowScriptAccess" : "always",
        "menu"              : "false"
    };

    this.SWF.embedSWF(this.Config.SWF.habboSWF, 'hotel-client', '100%', '100%', '10.0.0', '', variables, params, null);

    return Promise.resolve();
  }

  async loadInterface()
  {
      window.parent.FlashExternalInterface                = {};
      
      window.parent.FlashExternalInterface.disconnect     = () => console.log('disconnect');
      
      window.parent.FlashExternalInterface.logout         = () => document.getElementById("clientLogout").click();
      
      window.parent.FlashExternalInterface.openHabblet    = (page) => 
      { 
        if(page == 'avatars')
          console.log('Open Habblet Avatars');
      }

      window.parent.FlashExternalInterface.track = (action, label, value) => console.log(action + label + value);
      window.parent.FlashExternalInterface.legacyTrack = (action, label, value) => console.log(action + label + value);

      window.parent.FlashExternalInterface.logLoginStep = (step: string) =>
      {
        if(step == 'client.init.core.init') this.message = 'Connecting';
        if(step == 'client.init.handshake.start') this.message = 'Connected';
        if(step == 'client.init.auth.ok') this.message = 'Authenticating';
        if(step == 'client.init.core.running') this.message = 'Gathering Assets';

        if(step == 'client.init.config.loaded')
        {
            this.message = 'Almost Ready';

            return setTimeout(() =>
            {
                this.loading = false;
                this.done = true;
            }, 4000);
        }
      }

      return Promise.resolve();
  }

  processMessage(data: any)
  {
      let client: any = document.getElementById('client-area');

      if(data.data.call == 'open-room') return client.openlink('navigator/goto/' + data.data.target);
      if(data.data.call == 'open-group') return client.openlink('group/' + data.data.target);
      if(data.data.call == 'open-inventory') return client.openlink('inventory/open/' + data.data.target); // targets: [furni, badges]
      if(data.data.call == 'update-figure') return client.openlink('avatareditor/open');
      if(data.data.call == 'find-friends') return client.openlink('friendbar/findfriends');
      if(data.data.call == 'open-link') return client.openlink(data.data.target);
  }

  goBack() {
    //TODO Check if this.location is '/hotel' if yes, then return to default '/me'
    this.location.back();
  }

  toggleRadio() {
    this.showRadio = !this.showRadio;
  }

}
