import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TopicdetailsPage } from '../topicdetails/topicdetails';
import { AllProvider } from '../../providers/all/all';
import { LearnPage } from '../learn/learn';

/**
 * Generated class for the SectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-section',
  templateUrl: 'section.html',
})
export class SectionPage {
  public title: any; public sub: any; public cat: any; public yr: any; public sec: any;
  public topic;
  public topics = [];
    // 'The Environment & Environmental Problems',
    // 'Adolescent Reproductive Health'
 
  constructor(public navCtrl: NavController,public all: AllProvider, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.sub = this.navParams.get('sub');
    this.cat = this.navParams.get('cat');
    this.title = this.navParams.get('cat');
    console.log('ionViewDidLoad SectionPage');   
     this.all.getCourseTitle(this.cat).on('value', Snap =>{
      this.topics  = Snap.val();
      console.log(this.topics);
    })
  }

  ngOnInit() {
     
  }

  openTopic(t){
    console.log(t);
    this.navCtrl.push(LearnPage, {sub: this.sub, cat: this.cat, topic: t })
  }

}
