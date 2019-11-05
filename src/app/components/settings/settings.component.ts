import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent extends BaseComponent implements OnInit {

  private background;
  private header;

  private bgOptions = [ 'default', 'dark', 'light', 'habbo' ];
  private headerOptions = [ 'default', 'darken', 'cold', 'crush' ];

  constructor(injector : Injector) {
    super(injector);

    this.background = this.Habbo.settings.web_background;
    this.header = this.Habbo.settings.web_header;
  }

  ngOnInit() {
  }

  checkValue(event: any){
    console.log(event);
 }
 
 //TODO Call this to UPDATE Database
  changeBackground(event: any) {
    this.background = event;
    this.Habbo.settings.updateBackground(event);
    this.Habbo.updateLocalStorage();
  }

  //TODO Call this to UPDATE Database
  changeHeader(event: any) {
    this.header = event;
    this.Habbo.settings.updateHeader(event);
    this.Habbo.updateLocalStorage();
  }

}
