import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompleteprofilePage } from '../completeprofile/completeprofile';



/**
 * Generated class for the YearPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-begin',
  templateUrl: 'begin.html',
})
export class BeginPage {
people =[
  {name: 'Student', comment: 'Learn at all times' },
  {name: 'Teacher', comment: 'Learn & Monitor Students'},
  {name: 'Parent', comment: 'Learn & Monitor Kids' },
  ]
  constructor(public navCtrl: NavController,public storage: Storage, public navParams: NavParams) {
  }

  ionViewDidLoad() {
   
    console.log('ionViewDidLoad BeginPage');
  }

  openPeople(p){
    console.log(p);
    this.storage.clear();
    this.storage.set(p, 'true').then(() => {
    this.navCtrl.push(CompleteprofilePage, {person: p});
})
   }

}
