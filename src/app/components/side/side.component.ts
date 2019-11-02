import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { Habbo } from 'src/app/models/habbo.model';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent extends BaseComponent implements OnInit {

  private myHabbo : Habbo;

  constructor(injector : Injector) {
    super(injector);
    this.myHabbo = this.Habbo;
  }

  ngOnInit() {
  }

}
