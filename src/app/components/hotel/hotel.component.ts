import { Component, OnInit, OnDestroy, Injector } from '@angular/core';
import { extend } from 'webdriver-js-extender';
import { BaseComponent } from '../base/base.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent extends BaseComponent implements OnInit, OnDestroy {

  constructor(injector : Injector, private title : Title) { 
    super(injector);
  }

  ngOnInit() {
    this.clientShow.next(true);
  }

  ngOnDestroy() {
    this.clientShow.next(false);
  }
}
