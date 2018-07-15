import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SettingsPage } from '../settings/settings';
import { CompleteprofilePage } from '../completeprofile/completeprofile';
import { SliderPage } from '../slider/slider';
import firebase from 'firebase';
import { HomePage } from '../home/home';
import { EditprofilePage } from '../editprofile/editprofile';
import { ProfilePage } from '../profile/profile';
import { StorePage } from '../store/store';
import { InvestorPage } from '../investor/investor';
import { LessonsPage } from '../lessons/lessons';
import { SupportPage } from '../support/support';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export interface PageInterface {
  title: string;
  name: string;
  component: any;
  icon: string;
  tabName?: string;
  tabComponent?: any;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  rootPage = HomePage
  currentUser = []
  userPages: PageInterface[] = [
    // { title: 'Edit Profile', name: 'UsereditPage', component: UsereditPage, tabComponent: UsereditPage,  icon: 'ios-contact' },
    { title: 'Settings', name: 'SettingsPage', component: SettingsPage, tabComponent: SettingsPage,  icon: 'ios-settings' },
  /*{ title: 'Chat', name: 'chatPage', component: chatPage, tabComponent: chatPage,  icon: 'chatbubbles' },*/
//  { title: 'Payments', name: 'paymentsPage', component: PaymentsPage, tabComponent: PaymentsPage, icon: 'ios-cash' },
/* { title: 'Location', name: 'locationPage', component: locationPage, tabComponent: locationPage, index: 2, icon: 'pin' }
 { title: 'About', name: 'TabsPage', component: TabsPage, tabComponent: AboutPage, index: 3, icon: 'information-circle' }*/
];

churchPages: PageInterface[] = [
 { title: 'Edit Profile', name: 'EditprofilePage', component: EditprofilePage, tabComponent: EditprofilePage,  icon: 'ios-contact' },
 { title: 'View Profile', name: 'ProfilePage', component: ProfilePage, tabComponent: ProfilePage,  icon: 'ios-person' },
{ title: 'YCL Store', name: 'Events', component: StorePage, tabComponent: StorePage, icon: 'ios-cart' },
{ title: 'Leader Board', name: '', component: '', tabComponent: '',  icon: 'ios-filing-outline' },
{ title: 'Investor', name: 'chatPage', component: InvestorPage, tabComponent: InvestorPage,  icon: 'logo-usd' },
{ title: 'Questions Factory', name: 'LessonsPage', component: LessonsPage, tabComponent: LessonsPage, icon: 'clipboard' },
{ title: 'FAQs & Support', name: 'Help', component: SupportPage, tabComponent: SupportPage, icon: 'ios-help-circle' }
 ];

  constructor(public navCtrl: NavController, 
              public storage: Storage,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {

    // this.storage.get('ClickChurch').then((ClickChurch) => {
  //     if (ClickChurch) {
  //       this.profileProvider.getChurchProfile().on('value', churchProfileSnapshot => {
  //         this.currentUser = churchProfileSnapshot.val();
  //         console.log(this.currentUser)
  //         let u = document.getElementsByName('churchPages')[0];
  //         u.style.display="block";
  //         let c = document.getElementsByName('userPages')[0];
  //         c.style.display="none";
  //       });
  //     } else {
  //       this.us.getUserProfile().on('value', userProfileSnapshot => {
  //         this.currentUser = userProfileSnapshot.val();
  //         console.log(this.currentUser)
  //       });
  //       let u = document.getElementsByName('churchPages')[0];
  //       u.style.display="none";
  //       let n = document.getElementsByName('userPages')[0];
  //       n.style.display="block"; 
  //   }
  // })

    console.log('ionViewDidLoad MenuPage');
  }

  openPage(page: PageInterface) {
    this.navCtrl.push(page.tabComponent);
    }

  testfunction(){
    this.storage.clear();
     firebase.auth().signOut().then(()=> {
      console.log("done");
      this.navCtrl.setRoot(SliderPage);
      }).catch(function(error) {
      // An error happened.
      });
   }

   

}
