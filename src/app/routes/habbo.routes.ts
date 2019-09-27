import { Routes } from '@angular/router';
import { MeComponent } from '../components/me/me.component';
import { Routing } from 'src/routing';

export const HABBO_ROUTES : Routes = [
    { path: Routing.USER.children.HABBO.children.HOME.url, component: MeComponent, data: { title: Routing.USER.children.HABBO.children.HOME.title } },
    //{ path: Routing.USER.children.HABBO.children.SETTINGS.url, children: SETTINGS_ROUTES, data: { title: Routing.USER.children.HABBO.children.SETTINGS.title } }
];