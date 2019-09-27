import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent extends BaseComponent implements OnInit {

  public clientOpen : boolean;

  constructor(injector : Injector, private location : Location) {
    super(injector)
  }

  ngOnInit() {
    this.clientShow.subscribe(v => this.clientOpen = v);
  }

  goBack() {
    this.location.back();
  }

}
