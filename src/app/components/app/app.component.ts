import { Component, Injector, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BaseComponent } from '../base/base.component';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ConfigService } from 'src/app/shared/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends BaseComponent {
  constructor(injector : Injector) {
    super(injector);
  }
}
