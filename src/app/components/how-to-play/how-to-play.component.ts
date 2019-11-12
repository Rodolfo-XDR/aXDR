import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn } from 'ng-animate';

@Component({
  selector: 'app-how-to-play',
  templateUrl: './how-to-play.component.html',
  styleUrls: ['./how-to-play.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', useAnimation(fadeIn, { params: { timing: 1.5 } } ))
    ])
  ]
})
export class HowToPlayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
