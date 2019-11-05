import { Routes } from '@angular/router';
import { Routing } from 'src/routing';
import { SettingsComponent } from '../components/settings/settings.component';

export const SETTINGS_ROUTES : Routes = [
    {path: Routing.DEFAULT.url, component: SettingsComponent, data: { title:  Routing.USER.children.HABBO.children.SETTINGS.children.GENERAL.title } },
    //{path: Routing.USER.children.HABBO.children.SETTINGS.children.PREFERENCES.url, component: PreferencesComponent, pathMatch: 'full', data: { title: Routing.USER.children.HABBO.children.SETTINGS.children.PREFERENCES.title } },
    //{path: Routing.USER.children.HABBO.children.SETTINGS.children.CUSTOMIZATION.url, component: CustomizationComponent, pathMatch: 'full', data: { title: Routing.USER.children.HABBO.children.SETTINGS.children.CUSTOMIZATION.title } }
];