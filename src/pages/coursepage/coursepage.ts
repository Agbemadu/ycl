import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { YearPage } from '../year/year';
import { AllProvider } from '../../providers/all/all';
import { SectionPage } from '../section/section';
import { TopicdetailsPage } from '../topicdetails/topicdetails';

/**
 * Generated class for the CoursepagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coursepage',
  templateUrl: 'coursepage.html',
})
export class CoursepagePage {
public title: any;
public sub: any;
public categories: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public all: AllProvider ) {
  }

  ionViewDidLoad() {
    // this.sub = this.navParams.get('c');
    this.title = this.navParams.get('c');
    this.all.gettopics(this.title).on('value', noSnapshot => {
      this.categories = noSnapshot.val()
      });
      console.log(this.categories);
    console.log('ionViewDidLoad CoursepagePage');
  }

  openCat(cat){
    console.log(cat);
    if(cat == 'Alphabets' || cat == 'Numbers' || cat == 'Things at Home'){
      this.navCtrl.push(TopicdetailsPage, { cat: cat, sub: this.title})
    }else{
    this.navCtrl.push(SectionPage, { cat: cat, sub: this.title})
    }
    
   }

   
}
