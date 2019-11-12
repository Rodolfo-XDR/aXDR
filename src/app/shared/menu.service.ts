import { Injectable } from '@angular/core';
import { menuItem } from '../models/menuItem.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  public Tabs : menuItem[] = [];

  constructor(private router : Router) 
  {
    this.generateMenu();
  }

  private generateMenu() : void
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
  }
}
