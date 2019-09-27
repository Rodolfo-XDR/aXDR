import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent extends BaseComponent implements OnInit {

  public clientOpen : boolean;
  
  constructor(injector : Injector) {
    super(injector);
  }

  ngOnInit() {
    this.clientShow.subscribe(v => this.clientOpen = v);
  }

  logout() {
    console.log("hola");
  }



}
