import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { ChallangePage } from '../challange/challange';
import { ProProvider } from '../../providers/pro/pro';

/**
 * Generated class for the WeaponPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-weapon',
  templateUrl: 'weapon.html',
})
export class WeaponPage {
title; members; key; curnt;
  constructor(public navCtrl: NavController,public auth: AuthenticationProvider,public pp: ProProvider,public ap: AuthenticationProvider, public viewCtrl: ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.auth.getUserProfile().on('value', user => {
      this.curnt = user.val().fullname;
     })
   this.title = this.navParams.get('n');
   this.ap.getUserProfiles().on('value', userSnap=>{
    this.members = []
        userSnap.forEach(snap => {
          this.members.push({
          id: snap.key,
          fullname: snap.val().fullname,
          school: snap.val().school
         });
         console.log(this.members)
     return false; 
      })
    })
    console.log('ionViewDidLoad WeaponPage');
    //console.log(this.title);
  }

  dismiss() {
    this.viewCtrl.dismiss();
   }

   openChallange(name,id){
    const me = this.pp.userID;
    this.pp.sendchallengeRequest(me,id,name,this.curnt).on('value',snap =>{
      this.key = snap.key
    })
    console.log(this.key)
    this.navCtrl.push(ChallangePage, {name: name, title: this.title, id: id, key: this.key})
   }

}
