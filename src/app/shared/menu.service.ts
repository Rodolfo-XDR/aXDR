import { Injectable } from '@angular/core';
import { menuItem } from '../models/menuItem.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private USER : string = "";
  private HOTELNAME : string = "";

  public Tabs : menuItem[] = [];
  public currentSubTabs : menuItem[] = [];

  constructor(private router : Router, private activatedRoute : ActivatedRoute, private configService : ConfigService) 
  {
    this.generateMenu();
  }

  generateMenu() : void
  {
    this.router.config.forEach(Page => {
      
      if(Page.data == undefined || null) return;
      
      if(Page.data.title == 'GUEST') return;

      let mainPath = (Page.path == '') ? '' : '/' + Page.path;

      Page.children.forEach(tab => {
        if(tab.data == undefined || null) return;

        let tabPath = mainPath + '/' + tab.path + (tab.data.directURL == undefined ? '' : '/' + tab.data.directURL);
        let tabPath_ = (tab.path == '') ? '' : '/' + tab.path;

        let children : menuItem[] = [];

        tab.children.forEach(subTab => {
          if(subTab.data == undefined) return;

          let subTabPath = (subTab.path == '' ? tabPath_ : tabPath_ + '/' + subTab.path);

          children.push(new menuItem(subTab.data.title, subTabPath, []));
        });

        this.Tabs.push(new menuItem(tab.data.title, tabPath, children, tab.data.id));
      });
    });

    this.prepareTabs();
  }

  prepareTabs()
  {
    this.Tabs.forEach(tab => {
      tab.title = tab.title.replace("%USERNAME%", this.USER);
      tab.title = tab.title.replace('%HOTELNAME%', this.HOTELNAME);
      tab.children.forEach(child => {
        child.title = child.title.replace("%USERNAME%", this.USER);
        child.title = child.title.replace('%HOTELNAME%', this.HOTELNAME);
      })
    })
  }

  retrieveSubTabs() 
  {
    this.Tabs.forEach(tab => {
      if(this.activatedRoute.firstChild.routeConfig.data.id == tab.id)
        this.currentSubTabs = tab.children;
    })

    return this.currentSubTabs;
  }

  setUser(value : string)
  {
    this.USER = value;
  }

  setHotelname(value : string)
  {
    this.HOTELNAME = value;
  }
  
}
