import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent extends BaseComponent implements OnInit {

  constructor(injector : Injector) {
    super(injector);
  }

  ngOnInit() {
  }

}
