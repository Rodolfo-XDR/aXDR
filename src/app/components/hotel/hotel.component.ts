import { Component, OnInit, OnDestroy, Injector } from '@angular/core';
import { extend } from 'webdriver-js-extender';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent extends BaseComponent implements OnInit, OnDestroy {

  //TODO Fix this "ExpressionChangedAfterItHasBeenCheckedError" error coming, when opening the Hotel view

  constructor(injector : Injector) { 
    super(injector);
  }

  ngOnInit() {
    this.clientShow.next(true);
  }

  ngOnDestroy() {
    this.clientShow.next(false);
  }
}
