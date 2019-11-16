import { Routes } from '@angular/router';
import { Routing } from 'src/routing';
import { CommunityComponent } from '../components/community/community.component';
import { ArticlesComponent } from '../components/articles/articles.component';
import { PhotoGalleryComponent } from '../components/photo-gallery/photo-gallery.component';
import { TeamComponent } from '../components/team/team.component';
import { TopComponent } from '../components/top/top.component';

export const COMMUNITY_ROUTES : Routes = [
    { path: Routing.DEFAULT.url, component: CommunityComponent, data: { title: Routing.USER.children.COMMUNITY.title } },
    { path: Routing.USER.children.COMMUNITY.children.ARTICLES.url, component: ArticlesComponent, data: { title: Routing.USER.children.COMMUNITY.children.ARTICLES.title } },
    //{ path: Routing.PHOTO_GALLERY.url, component: PhotoGalleryComponent, data: { title: Routing.PHOTO_GALLERY.title } },
    { path: Routing.USER.children.COMMUNITY.children.TOP.url, component: TopComponent, data: { title: Routing.USER.children.COMMUNITY.children.TOP.title } },
    { path: Routing.USER.children.COMMUNITY.children.TEAM.url, component: TeamComponent, data: {title: Routing.USER.children.COMMUNITY.children.TEAM.title } }
];