import { Component, OnInit, Injector, AfterViewChecked } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { Habbo } from 'src/app/models/habbo.model';
import { stringify } from 'querystring';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent extends BaseComponent implements OnInit {

  constructor(injector : Injector) {
    super(injector);
  }

  ngOnInit() {
  }
}
