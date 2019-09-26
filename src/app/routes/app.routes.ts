import { Routes } from '@angular/router';
import { Routing } from 'src/routing';
import { LoginComponent } from '../components/login/login.component';

export const APP_ROUTES: Routes = [
    {
        path: Routing.GUEST.children.LOGIN.url,
        component: LoginComponent,
        data: { 
            title: Routing.GUEST.children.LOGIN.title, 
            onlyGuest: Routing.GUEST.children.LOGIN.onlyGuest 
        }
    }
]