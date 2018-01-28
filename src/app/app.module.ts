import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EntrantsPage } from '../pages/entrants/entrants';
import { ProfilePage } from '../pages/profile/profile';
import { StatsPage } from '../pages/stats/stats';
import { AboutPage } from '../pages/about/about';
import { EntrantprofilePage } from '../pages/entrantprofile/entrantprofile';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { Ng2OrderModule } from 'ng2-order-pipe';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EntrantsPage,
    ProfilePage,
    StatsPage,
    AboutPage,
    EntrantprofilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule,
    Ng2OrderModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EntrantsPage,
    ProfilePage,
    StatsPage,
    AboutPage,
    EntrantprofilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
