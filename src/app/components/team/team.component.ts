import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { first } from 'rxjs/operators';
import { Rank } from 'src/app/models/rank.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent extends BaseComponent implements OnInit {

  private ranks = [];

  constructor(injector : Injector) {
    super(injector);
  }

  ngOnInit() {
    this.getStaff().pipe(first())
    .subscribe(
      data => 
      {
        data.forEach(element => {
          this.ranks.push(new Rank(element.id, element.rank_name, element.users));
        });
      }, 
      err =>
      {

      });
  }

}
