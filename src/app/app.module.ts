import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule  } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { BaseComponent } from './components/base/base.component';
import { UserComponent } from './components/user/user.component';
import { GuestComponent } from './components/guest/guest.component';
import { MeComponent } from './components/me/me.component';
import { SettingsComponent } from './components/settings/settings.component';
import { CommunityComponent } from './components/community/community.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { PhotoGalleryComponent } from './components/photo-gallery/photo-gallery.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { Error404Component } from './components/error404/error404.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HowToPlayComponent } from './components/how-to-play/how-to-play.component';
import { WhatIsComponent } from './components/what-is/what-is.component';
import { HelpComponent } from './components/help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    UserComponent,
    GuestComponent,
    MeComponent,
    SettingsComponent,
    CommunityComponent,
    ArticlesComponent,
    PhotoGalleryComponent,
    HotelComponent,
    Error404Component,
    LoginComponent,
    RegisterComponent,
    HowToPlayComponent,
    WhatIsComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
