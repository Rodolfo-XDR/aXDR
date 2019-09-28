import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent extends BaseComponent implements OnInit {

  private boolTest : boolean;

  constructor(injector : Injector) {
    super(injector);
  }

  ngOnInit() {
    this.isLogged.subscribe(v => this.boolTest = v);
  }

}
