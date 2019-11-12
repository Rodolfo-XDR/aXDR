import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { MenuService } from 'src/app/shared/menu.service';
import { menuItem } from 'src/app/models/menuItem.model';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn } from 'ng-animate';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', useAnimation(fadeIn, { params: { timing: 1 } } ))
    ])
  ]
})
export class HeaderComponent extends BaseComponent implements OnInit {

  public Tabs : menuItem[];
  public currentSubTabs : menuItem[];

  constructor(injector : Injector, private menuService : MenuService, private router : Router, private activatedRoute : ActivatedRoute) {
    super(injector);
  }

  ngOnInit() {
    this.Tabs = this.menuService.Tabs;

    this.Tabs.forEach(tab => {
      tab.title = tab.title.replace("%USERNAME%", this.Habbo.username);
      tab.title = tab.title.replace('%HOTELNAME%', this.HotelName);
      tab.children.forEach(child => {
        child.title = child.title.replace("%USERNAME%", this.Habbo.username);
        child.title = child.title.replace('%HOTELNAME%', this.HotelName);
      })

      if(this.activatedRoute.firstChild.routeConfig.data.id == tab.id)
        this.currentSubTabs = tab.children;
    });

    this.router.events.subscribe(e => {
      if(e instanceof NavigationEnd) {
        this.Tabs.forEach(tab => {
          if(this.activatedRoute.firstChild.routeConfig.data.id == tab.id)
            this.currentSubTabs = tab.children;
        })
      }
    })

  }

  disconnect() {
    this.logout();
  }

}
