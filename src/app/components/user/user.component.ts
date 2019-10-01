import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent extends BaseComponent implements OnInit {

  public clientOpen : boolean;
  
  constructor(injector : Injector, private router : Router) {
    super(injector);
  }

  ngOnInit() {
    this.clientShow.subscribe(v => this.clientOpen = v);
  }

  disconnect() {
    this.logout()
    .pipe(first())
    .subscribe(data => {
      this.router.navigate(['/']);
    }, err => {
      this.setLogged(false);
      localStorage.removeItem('currentUser');
      this.router.navigate(['/']);
    });
  }



}
