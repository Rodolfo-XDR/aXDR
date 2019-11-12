import { Component, OnInit, Injector } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn } from 'ng-animate';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-what-is',
  templateUrl: './what-is.component.html',
  styleUrls: ['./what-is.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', useAnimation(fadeIn, { params: { timing: 1.5 } } ))
    ])
  ]
})
export class WhatIsComponent extends BaseComponent implements OnInit {

  constructor(injector : Injector)
  { 
    super(injector);
  }

  ngOnInit() {
  }

}
