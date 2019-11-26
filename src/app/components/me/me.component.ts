import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent extends BaseComponent implements OnInit {

  public OnlineCount : number = 0;

  constructor(injector : Injector) {
    super(injector);
  }

  ngOnInit() {
    this.onlineCount.subscribe(v => this.OnlineCount = v);
  }

}
