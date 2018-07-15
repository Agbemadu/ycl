import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ActionSheetController, ToastController } from 'ionic-angular';
import { LessonsPage } from '../lessons/lessons';
import { AllProvider } from '../../providers/all/all';
import { ProProvider } from '../../providers/pro/pro';

/**
 * Generated class for the TopicdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-topicdetails',
  templateUrl: 'topicdetails.html',
})
export class TopicdetailsPage {
  public lesson: any = ['1','2','3','4','5','6','7','8','9','10']
  lang; title;
  lesson_segment; count:number = 0;
  myanswer; final; score
  constructor(public all: AllProvider,public navCtrl: NavController, public navParams: NavParams,public actionsheetCtrl: ActionSheetController,
    public alerCtrl: AlertController,public pro: ProProvider,public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {

    this.lesson_segment = this.lesson[this.count]
    this.pro.getMyScore().on('value', scoreSnap=>{
      this.score = scoreSnap.val();
     })
    this.title = this.navParams.get('cat');
    this.all.getCourseTitle(this.title).on('value', noSnapshot => {
      this.lang = noSnapshot.val()
      });
      console.log(this.lang);
  }

  openDetails(d){
     
  }
  doMore(){
    let actionSheet = this.actionsheetCtrl.create({
      buttons: [{text: 'Send Feeback', icon: 'md-paper-plane',handler: () => {this.sendFeedback()}},
                {text: 'Font Size', icon: 'logo-yahoo',handler: () => {this.changeFont();} },
                {text: "Copy Link", icon: 'ios-link',handler: () => {this.showToastWithCloseButton('Link copied successfully')}},
                {text: 'Cancel',role: 'cancel', handler: () => { console.log('Cancel clicked');}}]});
      actionSheet.present()
  }

  changeFont(){
      let alert = this.alerCtrl.create({
        title: 'Font',
        message: '<ion-range dualKnobs="true" pin="true" [(ngModel)]="structure" color="dark">'+
        '<ion-icon range-left small name="brush"></ion-icon>'+
        '<ion-icon range-right name="brush"></ion-icon>'+
        '</ion-range>',
        buttons: ['Ok']
      });
      alert.present()
    }
  
    sendFeedback(){
      let alert = this.alerCtrl.create({
        title: 'Font',
        inputs: [{
          name: 'feedback',
          placeholder: 'type feedback here'
        }],
        buttons: ['Ok']
      });
      alert.present()
    }

    
    showToastWithCloseButton(message) {
      const toast = this.toastCtrl.create({
        message: message,
        showCloseButton: true,
        position: 'buttom',
        duration: 2000,
        closeButtonText: 'ok'
      });
      toast.present();
    }


 

  help(){let actionSheet = this.actionsheetCtrl.create({
    title: 'Help',
    cssClass: 'action-sheets-basic-page',
    buttons: [{text: 'Ask a friend', icon: 'person',handler: () => {} },{text: "50-50", icon: 'information',handler: () => {}},
    {text: 'Cancel',role: 'cancel', handler: () => { console.log('Cancel clicked');}}]});
    actionSheet.present()}

  takeQuiz(){ this.lesson_segment = this.lesson[this.count++]}
  tryagain(){ this.lesson_segment = this.lesson[this.count--]
  // let u = document.getElementsByName('note')[0];
  // u.style.display="block";
  // let s = document.getElementsByName('alert')[0];
  // s.style.display="none"
}


  

   subAns(answer, possible){ 
     this.final = answer
      this.myanswer  = possible
    }
  
  checkthem(){console.log(this.final,this.myanswer)}
  check(){
  if (this.final == this.myanswer){
    //  let u = document.getElementsByName('note')[0];
    //   u.style.display="none";
    //   let s = document.getElementsByName('alert')[0];
    //   s.style.display="block";
    //   let r = document.getElementsByName('right')[0];
    //   r.style.display="block";
    //   let w = document.getElementsByName('wrong')[0];
    //   w.style.display="none";
    //   let t = document.getElementsByName('correct')[0];
    //   t.innerHTML = "Correct!!!";
    //   t.style.color="#76da04";
    this.showToastWithCloseButton('Correct!!!')
      if (this.score != null){this.score = this.score.score + 5;}else{this.score = 5}
      this.pro.saveScore( this.score)
      this.lesson_segment = this.lesson[this.count++]
      console.log('Correct');
  }else{
    // let u = document.getElementsByName('note')[0];
    // u.style.display="none";
    // let s = document.getElementsByName('alert')[0];
    // s.style.display="block";
    // let r = document.getElementsByName('right')[0];
    // r.style.display="none";
    // let w = document.getElementsByName('wrong')[0];
    // w.style.display="block";
    // let t = document.getElementsByName('correct')[0];
    // t.innerHTML = "Wrong!!!";
    // t.style.color="#bd0505";
      console.log('Sorry')
      this.showToastWithCloseButton('Wrong!!!')
      // this.lesson_segment = this.lesson[--this.count]
  }

  console.log(this.final, this.myanswer)
  
  }

}
