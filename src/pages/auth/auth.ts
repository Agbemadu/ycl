import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { CompleteprofilePage } from '../completeprofile/completeprofile';

/**
 * Generated class for the AuthPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
})
export class AuthPage {
type;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
   this.type = this.navParams.get('person');
    console.log('ionViewDidLoad AuthPage');
  }

  Signup(){
    this.navCtrl.push(CompleteprofilePage, {person: this.type})
  }

  skip(){
    this.navCtrl.push(HomePage);
  }

  Login(){
    this.navCtrl.push(LoginPage);
  }
}
