import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { SliderPage } from '../slider/slider';
import { EditprofilePage } from '../editprofile/editprofile';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController,public storage: Storage, public navParams: NavParams, public ap: AuthenticationProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  signout(){
   this.ap.logoutUser().then(()=>{
    this.storage.clear();
     this.navCtrl.setRoot(SliderPage);
   })
  }

    editprofile(){
    this.navCtrl.push(EditprofilePage)
    }

}
