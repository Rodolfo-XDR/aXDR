import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent extends BaseComponent implements OnInit {

  public OnlineCount : number = 0;

  constructor(injector : Injector) {
    super(injector);
  }

  ngOnInit() {
    this.onlineCount.subscribe(v => this.OnlineCount = v);
  }

}
