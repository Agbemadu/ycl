import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the QuestionpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-questionpage',
  templateUrl: 'questionpage.html',
})
export class QuestionpagePage {
item; question;
page; pageItems;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pageItems = [{name: 'Sign Language'},
                      {name: 'Maths'},
                      {name: 'Science'},
                      {name: 'Social Studies'},
                      {name: 'I C T'},
                      {name: 'B D T'},
                      {name: 'Languages'},
                      {name: 'R M E'}]
  }

  ionViewDidLoad() {
    this.item = this.navParams.get('item');
    this.checkItem(this.item)
    console.log('ionViewDidLoad QuestionpagePage');
  }


  checkItem(item){
   if (item == 'Multiple Choice'){
     this.page = 'MCQ'
   }else if(item == 'Suggest Answer'){
    this.page = 'SA'
   }else{
     this.page = 'FILIN'
   }
  }

  previewMCQs(){
    this.page = 'PREVIEWMCQs'
  }

  previewSA(){
    this.page = 'PREVIEWSAs'
  }
}
