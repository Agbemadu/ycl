import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestionpagePage } from '../questionpage/questionpage';

/**
 * Generated class for the NewquestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newquestion',
  templateUrl: 'newquestion.html',
})
export class NewquestionPage {
title;
pageItems = []
page;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title=this.navParams.get('info')
  }

  ionViewDidLoad() {
  if (this.title == 'Suggest a Question'){
    this.page = 'card';
    this.pageItems = [{name: 'Multiple Choice', icon: 'clipboard', color: "yello"},
                {name: 'Suggest Answer', icon: 'md-list-box', color: "secondary"},
                // {name: 'FIll in the blank', icon: 'md-list-box', color: "secondary"}
              ]
    }else{
      this.page = 'div'; 
    }
    console.log('ionViewDidLoad NewquestionPage');
  }


  openDetails(item){
    this.navCtrl.push(QuestionpagePage, {item: item})
  }
}
