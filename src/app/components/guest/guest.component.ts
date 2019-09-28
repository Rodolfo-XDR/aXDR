import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounceInDown } from 'ng-animate';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css'],
  animations: [
    trigger('bounceDown', [
      transition(':enter', useAnimation(bounceInDown, { params: { timing: 1 } }))
    ])
  ]
})
export class GuestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
