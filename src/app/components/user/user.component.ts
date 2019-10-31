import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/shared/client.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent extends BaseComponent implements OnInit {

  public hideNav : boolean;
  
  constructor(injector : Injector, private router : Router, private clientService : ClientService) {
    super(injector);

    this.clientService.ClientShow.subscribe(v => this.hideNav = v);
  }

  ngOnInit() {
  }
}
