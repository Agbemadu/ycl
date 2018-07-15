import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {RoundProgressModule} from 'angular-svg-round-progressbar';
import {ProgressBarModule} from "angular-progress-bar"
import { Contacts } from '@ionic-native/contacts';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { SMS } from '@ionic-native/sms';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Storage, IonicStorageModule } from '@ionic/storage';
import { Diagnostic } from '@ionic-native/diagnostic';
import { ChartsModule } from 'ng2-charts';

import { MyApp } from './app.component';
import { HomePage, PopoverPage, SelectWeaponPage } from '../pages/home/home';
import { SliderPage } from '../pages/slider/slider';
import { AuthPage } from '../pages/auth/auth';
import { CoursepagePage } from '../pages/coursepage/coursepage';

import { SectionPage } from '../pages/section/section';
import { LoginPage } from '../pages/login/login';
import { AuthenticationProvider } from '../providers/authentication/authentication';
import { TopicdetailsPage } from '../pages/topicdetails/topicdetails';
import { LessonsPage } from '../pages/lessons/lessons';
import { LearnPage } from '../pages/learn/learn';
import { AllProvider } from '../providers/all/all';
import { SettingsPage } from '../pages/settings/settings';
import { ProProvider } from '../providers/pro/pro';
import { ProfilePage, ExamsPage } from '../pages/profile/profile';
import { CompleteprofilePage } from '../pages/completeprofile/completeprofile';
import { MorePage } from '../pages/more/more';
import { EditprofilePage } from '../pages/editprofile/editprofile';
import { ContactPage } from '../pages/contact/contact';
import { WeaponPage } from '../pages/weapon/weapon';
import { StorePage, BuyPage } from '../pages/store/store';
import { Camera } from '@ionic-native/camera';
import { NotificationPage } from '../pages/notification/notification';
import { ChallangePage } from '../pages/challange/challange';
import { MonitorPage } from '../pages/monitor/monitor';
import { GoogleCloudVisionServiceProvider } from '../providers/google-cloud-vision-service/google-cloud-vision-service';
import { HttpModule } from '@angular/http';
import { BeginPage } from '../pages/begin/begin';
import { LookPage } from '../pages/look/look';
import { InvestorPage } from '../pages/investor/investor';
import { MenuPage } from '../pages/menu/menu';
import { NewquestionPage } from '../pages/newquestion/newquestion';
import { QuestionpagePage } from '../pages/questionpage/questionpage';
import { DoyouknowPage } from '../pages/doyouknow/doyouknow';
import { SupportPage } from '../pages/support/support';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SliderPage,
    AuthPage,
    LoginPage,
    CoursepagePage,
    LookPage,
    BeginPage,SupportPage,
    SectionPage,DoyouknowPage,
    TopicdetailsPage,NewquestionPage,QuestionpagePage,
    LessonsPage,SelectWeaponPage,BuyPage,ExamsPage,InvestorPage,MenuPage,
    LearnPage,ContactPage,WeaponPage,StorePage,NotificationPage,ChallangePage,MonitorPage,
    PopoverPage,SettingsPage,ProfilePage,CompleteprofilePage,MorePage,EditprofilePage
  ],
  imports: [
    RoundProgressModule,
    ProgressBarModule,HttpModule,
    BrowserModule,ChartsModule,
    IonicModule.forRoot(MyApp),IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SliderPage,
    AuthPage,
    LoginPage,SupportPage,
    CoursepagePage,
    LookPage,
    BeginPage,DoyouknowPage,
    SectionPage,NewquestionPage,QuestionpagePage,
    TopicdetailsPage,MenuPage,
    LessonsPage,ContactPage,SelectWeaponPage,BuyPage,ExamsPage,InvestorPage,
    LearnPage,WeaponPage,StorePage,NotificationPage,ChallangePage,MonitorPage,
    PopoverPage,SettingsPage,ProfilePage,CompleteprofilePage,MorePage,EditprofilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,Contacts,PhotoViewer,SMS,SocialSharing, Diagnostic,Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthenticationProvider,
    AllProvider,
    ProProvider,
    GoogleCloudVisionServiceProvider
  ]
})
export class AppModule {}
