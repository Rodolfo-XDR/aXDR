import { Routes } from '@angular/router';
import { Routing } from 'src/routing';
import { LoginComponent } from '../components/login/login.component';
import { Error404Component } from '../components/error404/error404.component';
import { UserComponent } from '../components/user/user.component';
import { GuestComponent } from '../components/guest/guest.component';
import { USER_ROUTES } from './user.routes';
import { GUEST_ROUTES } from './guest.routes';
import { UnauthGuard } from '../guards/unauth.guard';
import { AuthGuard } from '../guards/auth.guard';
import { PapersComponent } from '../components/papers/papers.component';
import { PAPERS_ROUTES } from './papers.routes';

export const APP_ROUTES: Routes = [
    { 
        path: Routing.GUEST.url, 
        component: GuestComponent,
        children: GUEST_ROUTES, 
        data: {
            title: Routing.GUEST.title
        },
        canActivateChild: [UnauthGuard]
    },
    { 
        path: Routing.USER.url, 
        component: UserComponent, 
        children: USER_ROUTES, 
        data: { 
            hasMenuContent: true,
            title: Routing.USER.title 
        },
        canActivateChild: [AuthGuard]
    },
    {
        path: 'papers',
        component: PapersComponent,
        children: PAPERS_ROUTES
    },
    { 
        path: '**', 
        component: Error404Component 
    }
]