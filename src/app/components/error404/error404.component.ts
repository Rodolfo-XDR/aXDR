import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.css']
})
export class Error404Component extends BaseComponent implements OnInit {

  constructor(injector : Injector) {
    super(injector);
  }

  ngOnInit() {
  }

}
