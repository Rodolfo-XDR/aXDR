import { Routes } from '@angular/router';
import { Routing } from 'src/routing';
import { WhatIsComponent } from '../components/what-is/what-is.component';
import { HowToPlayComponent } from '../components/how-to-play/how-to-play.component';

export const DISCOVER_ROUTES : Routes = [
    { path: Routing.USER.children.DISCOVER.children.WHATIS.url, component: WhatIsComponent, data: { title: Routing.USER.children.DISCOVER.children.WHATIS.title } },
    { path: Routing.USER.children.DISCOVER.children.HOWTOPLAY.url, component: HowToPlayComponent, data: { title: Routing.USER.children.DISCOVER.children.HOWTOPLAY.title } },
    //{ path: Routing.HELP.url, component: HelpComponent, data: { title: Routing.HELP.title } }
];