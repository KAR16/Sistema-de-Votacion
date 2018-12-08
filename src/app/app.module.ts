import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { VotosPage } from '../pages/votos/votos';
import { ListPage } from '../pages/list/list';
import { NewUserPage } from '../pages/new-user/new-user';

import { UserService } from '../services/users.service';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

export const firebaseConfig = {
  apiKey: "AIzaSyALdD2RbFu_TLxQj6dLg1mNmjFPGgab-M0",
  authDomain: "sistemavotaciones-b418a.firebaseapp.com",
  databaseURL: "https://sistemavotaciones-b418a.firebaseio.com",
  projectId: "sistemavotaciones-b418a",
  storageBucket: "sistemavotaciones-b418a.appspot.com",
  messagingSenderId: '941749879030'
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    VotosPage,
    NewUserPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    VotosPage,
    NewUserPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserService
  ]
})
export class AppModule {}
