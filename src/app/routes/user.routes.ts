import { Routing } from 'src/routing';
import { Routes } from '@angular/router';
import { COMMUNITY_ROUTES } from './community.routes';
import { HotelComponent } from '../components/hotel/hotel.component';
import { HABBO_ROUTES } from './habbo.routes';
import { DISCOVER_ROUTES } from './discover.routes';

export const USER_ROUTES : Routes = [
    { 
        path: Routing.USER.children.HABBO.url, 
        children: HABBO_ROUTES, 
        data: { 
            id: Routing.USER.children.HABBO.id,
            title: Routing.USER.children.HABBO.title, 
            directURL: Routing.USER.children.HABBO.directURL
        } 
    },
    {
        path: Routing.USER.children.HOTEL.url,
        component: HotelComponent
    },
    { 
        path: Routing.USER.children.COMMUNITY.url, 
        children: COMMUNITY_ROUTES, 
        data: { 
            id: Routing.USER.children.COMMUNITY.id,
            title: Routing.USER.children.COMMUNITY.title
        }
    },
    {
        path: Routing.USER.children.DISCOVER.url,
        children: DISCOVER_ROUTES,
        data: {
            id: Routing.USER.children.DISCOVER.id,
            title: Routing.USER.children.DISCOVER.title,
            directURL: Routing.USER.children.DISCOVER.directURL
        }
    }
]