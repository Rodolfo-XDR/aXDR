import { Routes } from '@angular/router';
import { Routing } from 'src/routing';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';

export const GUEST_ROUTES : Routes = [
    { 
        path: Routing.GUEST.children.LOGIN.url, 
        component: LoginComponent, 
        data: { 
            title: Routing.GUEST.children.LOGIN.title, 
            onlyGuest: Routing.GUEST.children.LOGIN.onlyGuest 
        }
    },
    { 
        path: Routing.GUEST.children.REGISTER.url, 
        component: RegisterComponent, 
        data: { 
            title: Routing.GUEST.children.REGISTER.title, 
            onlyGuest: Routing.GUEST.children.REGISTER.onlyGuest 
        }
    }
]