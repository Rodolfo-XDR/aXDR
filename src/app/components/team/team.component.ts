import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { first } from 'rxjs/operators';
import { Rank } from 'src/app/models/rank.model';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn } from 'ng-animate';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', useAnimation(fadeIn, { params: { timing: 1.5 } } ))
    ])
  ]
})
export class TeamComponent extends BaseComponent implements OnInit {

  public ranks : Rank[] = [];

  constructor(injector : Injector) {
    super(injector);
  }

  ngOnInit() {
    this.Staff.pipe(first())
    .subscribe(
      data => 
      {
        data.forEach(element => {
          this.ranks.push(new Rank(element.id, element.rank_name, element.badge, element.users));
        });
      }, 
      err =>
      {

      });
  }

}
