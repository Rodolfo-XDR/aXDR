import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { MenuService } from 'src/app/shared/menu.service';
import { menuItem } from 'src/app/models/menuItem.model';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn } from 'ng-animate';
import { Title } from '@angular/platform-browser';

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

  public tabs : menuItem[];
  public currentSubTabs : menuItem[];

  constructor(injector : Injector, private router : Router, private activatedRoute : ActivatedRoute, private titleService : Title) {
    super(injector);
  }

  ngOnInit() {
    this.tabs = this.menuTabs;
    console.log(this.tabs);
    this.currentSubTabs = this.subTabs;
    this.titleReplace();


    this.router.events.subscribe(e => {
      if(e instanceof NavigationEnd) {
        this.titleReplace();
        this.tabs.forEach(tab => {
          if(this.activatedRoute.firstChild.routeConfig.data.id == tab.id)
            this.currentSubTabs = tab.children;
        })
      }
    })
  }

  titleReplace()
  {
    let t = this.activatedRoute.firstChild.firstChild.routeConfig.data.title.replace('%HOTELNAME%', this.Config.siteName);
    this.titleService.setTitle(t + " - ");
  }

  disconnect() {
    this.logout();
  }

}
