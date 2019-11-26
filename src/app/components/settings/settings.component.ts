import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent extends BaseComponent implements OnInit {

  public settings = {
    web_background: null,
    web_header: null   
  }

  public bgOptions = [ 'default', 'dark', 'light', 'habbo' ];
  public headerOptions = [ 'default', 'darken', 'cold', 'crush' ];

  constructor(injector : Injector) {
    super(injector);

    this.settings.web_background = this.Habbo.settings.web_background;
    this.settings.web_header = this.Habbo.settings.web_header;
  }

  ngOnInit() {
  }

  checkValue(event: any){
    console.log(event);
 }
 
  changeBackground(event: any) {

    if(event == this.Habbo.settings.web_background) return;

    this.settings.web_background = event;
    this.updateHabboSettings({'data': this.settings}).subscribe(data => {
      this.Habbo.settings.updateBackground(this.settings.web_background);
      this.Habbo.updateLocalStorage();
      this.notify('Tus ajustes se han guardado correctamente.', 'Éxito', { cls: 'xdr' });
    },err => {});
  }

  changeHeader(event: any) {

    if(event == this.Habbo.settings.web_header) return;

    this.settings.web_header = event;
    this.updateHabboSettings({'data': this.settings}).subscribe(data => {
      this.Habbo.settings.updateHeader(this.settings.web_header);
      this.Habbo.updateLocalStorage();
      this.notify('Tus ajustes se han guardado correctamente.', 'Éxito', { cls: 'xdr' });
    },err => {});
  }
}
