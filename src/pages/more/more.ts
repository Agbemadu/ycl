import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { CoursepagePage } from '../coursepage/coursepage';
import { AuthenticationProvider } from '../../providers/authentication/authentication';

/**
 * Generated class for the MorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage {
  title;
  it;
  members = []
   public more = []
  constructor(public storage: Storage, public navCtrl: NavController,public ap: AuthenticationProvider, public navParams: NavParams,public viewCtrl: ViewController,) {
  }

  ionViewDidLoad() {
    
    this.storage.get('More').then((more) => {
       this.it = this.navParams.get('i');
    if (!more){
      this.title = 'Class Mates'
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
    }else{
      this.title = 'More Courses'
      this.more = ['Nursing','Teacher Training','Vocational Skills','Entrepreneurship','Basic Life Support']
    }
    console.log('ionViewDidLoad MorePage');
    
    })
   
  }

  OpenCourse(c){
    console.log(c);
    this.navCtrl.push(CoursepagePage, { c: c })
   }

   dismiss() {
    this.viewCtrl.dismiss();
   }

   follow(f){
    console.log(f)
   }
}
