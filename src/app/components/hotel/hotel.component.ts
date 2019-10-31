import { Component, OnInit, OnDestroy, Injector } from '@angular/core';
import { extend } from 'webdriver-js-extender';
import { BaseComponent } from '../base/base.component';
import { ClientService } from 'src/app/shared/client.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent extends BaseComponent implements OnInit, OnDestroy {

  constructor(injector : Injector, private clientService : ClientService) { 
    super(injector);
  }

  ngOnInit() {
    this.clientService.ClientShow.next(true);
  }

  ngOnDestroy() {
    this.clientService.ClientShow.next(false);
  }
}
