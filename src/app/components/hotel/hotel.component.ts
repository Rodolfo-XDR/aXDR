import { Component, OnInit, OnDestroy, Injector } from '@angular/core';
import { extend } from 'webdriver-js-extender';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent extends BaseComponent implements OnInit, OnDestroy {

  constructor(injector : Injector) { 
    super(injector);
  }

  ngOnInit() {
    this.showClient();
  }

  ngOnDestroy() {
    this.hideClient();
  }
}
