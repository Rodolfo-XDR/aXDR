import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RecaptchaModule } from 'ng-recaptcha';
import { NgMetro4Module } from 'ng-metro4';

import { ConfigService } from './shared/config.service';
import { LoaderService } from './shared/loader.service';

import { LoaderInterceptor } from './shared/loader.interceptor';

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
import { ClientComponent } from './components/client/client.component';
import { HeaderComponent } from './components/header/header.component';
import { SideComponent } from './components/side/side.component';
import { TeamComponent } from './components/team/team.component';
import { TopComponent } from './components/top/top.component';
import { LoaderComponent } from './components/loader/loader.component';
import { TestComponent } from './components/test/test.component';
import { PapersComponent } from './components/papers/papers.component';
import { TermsComponent } from './components/terms/terms.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { CookiesComponent } from './components/cookies/cookies.component';

const appConfig = (config : ConfigService) => {
  return() => {
    return config.loadConfiguration();
  }
}

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
    HelpComponent,
    ClientComponent,
    HeaderComponent,
    SideComponent,
    TeamComponent,
    TopComponent,
    LoaderComponent,
    TestComponent,
    PapersComponent,
    TermsComponent,
    PrivacyComponent,
    CookiesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RecaptchaModule,
    NgMetro4Module
  ],
  providers: [
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: appConfig,
      multi: true,
      deps: [ConfigService]
    },
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor, 
      multi: true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
