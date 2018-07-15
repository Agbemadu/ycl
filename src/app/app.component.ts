import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, Nav  } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from "firebase";
import { SliderPage } from '../pages/slider/slider';
import { HomePage } from '../pages/home/home';
import { FIREBASE_CREDENTIALS } from './config';
import { NotificationPage } from '../pages/notification/notification';
import { MenuPage } from '../pages/menu/menu';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any;

  constructor( public platform: Platform,public statusBar: StatusBar,public splashScreen: SplashScreen) {
    this.platformReady().then(()=>{firebase.initializeApp(FIREBASE_CREDENTIALS);
   const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (!user) {
         this.rootPage = SliderPage;
         unsubscribe();
        }else {
          this.nav.setRoot(MenuPage);
          unsubscribe();
        } });
}) }
  
 

  platformReady(): Promise<any> {
   return this.platform.ready().then(() => {
      this.splashScreen.hide();
    });
  }

  
}
