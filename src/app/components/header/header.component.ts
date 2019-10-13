import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends BaseComponent implements OnInit {

  constructor(injector : Injector, private router : Router) {
    super(injector);
  }

  ngOnInit() {
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
