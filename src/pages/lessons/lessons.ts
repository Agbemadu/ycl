import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LearnPage } from '../learn/learn';
import { AllProvider } from '../../providers/all/all';
import { NewquestionPage } from '../newquestion/newquestion';

/**
 * Generated class for the LessonsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lessons',
  templateUrl: 'lessons.html',
})
export class LessonsPage {

  pageItems = [{name: 'Suggest a Question', icon: 'clipboard', description: 'Get free points for 30 created and approved questions', color: "yello"},
               {name: 'My Submissions', icon: 'md-list-box', description: 'Check the status of your questions', color: "secondary"}]

  constructor(public navCtrl: NavController, public navParams: NavParams,public all: AllProvider) {
  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad LessonsPage');
   
  }

  openDetails(info){
     console.log(info);
    this.navCtrl.push(NewquestionPage, {info: info})
  }
}
