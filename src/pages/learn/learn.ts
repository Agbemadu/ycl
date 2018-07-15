import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ModalController, AlertController, ToastController } from 'ionic-angular';
import { AllProvider } from '../../providers/all/all';
import { Observable } from 'rxjs/Observable';
import { MorePage } from '../more/more';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { ProProvider } from '../../providers/pro/pro';
declare var require: any;
//import { AllProvider } from '../../providers/all/all';

/**
 * Generated class for the LearnPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-learn',
  templateUrl: 'learn.html',
})
export class LearnPage {
  public score:any; language
  public myanswer: any;
  lesson_segment: string;
  public title: any; public sub: any; public cat: any;
   public yr: any; public sec: any; public topic: any; 
   public d: any;  public answer: Array<any>;
  public learns: any; public quest: any; public images: any; public final: any;

  constructor(public navCtrl: NavController,public modalCtrl: ModalController,private photoViewer: PhotoViewer, public navParams: NavParams,public actionsheetCtrl: ActionSheetController,
              public all: AllProvider,public alerCtrl: AlertController,public pro: ProProvider,public toastCtrl: ToastController) { 
   
  }

  ionViewDidLoad() {
    this.language = "English"
    this.pro.getMyScore().on('value', scoreSnap=>{
     this.score = scoreSnap.val();
    })
    this.lesson_segment = "learning";
    this.sub = this.navParams.get('sub');
    this.cat = this.navParams.get('cat');
    this.topic = this.navParams.get('topic');
    this.title = this.navParams.get('cat');
      console.log(this.sub,this.cat,this.yr, this.sec, this.topic, this.d, this.title);
      this.all.getTopicQuestion(this.cat, this.topic).on('value', courseSnapshot => {
        this.learns = courseSnapshot.val();
        this.myanswer = courseSnapshot.val().correct;
         console.log(this.learns);
       });
       this.all.getTopicQuestionAnswer(this.cat, this.topic).on('value', ansSnapshot => {
        this.answer = ansSnapshot.val();
         console.log(this.answer);
        });
        this.all.getTopicQuestionWithImages(this.cat, this.topic).on('value', imgSnapshot => {
          this.images = imgSnapshot.val();
          
           console.log(this.images);
          });
      // this.transilateEnglish()
  }


  doMore(){
    let actionSheet = this.actionsheetCtrl.create({
      buttons: [{text: 'Send Feeback', icon: 'md-paper-plane',handler: () => {this.sendFeedback()}},
                {text: 'Font Size', icon: 'logo-yahoo',handler: () => {this.changeFont();} },
                {text: "Copy Link", icon: 'ios-link',handler: () => {this.showToastWithCloseButton()}},
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

    
    showToastWithCloseButton() {
      const toast = this.toastCtrl.create({
        message: 'Link copied successfully',
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

  takeQuiz(){ this.lesson_segment = "quiz"}
  tryagain(){ this.lesson_segment = "learning"
  let u = document.getElementsByName('note')[0];
  u.style.display="block";
  let s = document.getElementsByName('alert')[0];
  s.style.display="none"}

  doOk(){this.lesson_segment = "learning"}

  openit(image){
    // let modal = this.modalCtrl.create(MorePage, {i: image});
    // modal.present();
    this.photoViewer.show(image, 'Title', {share: true});
  }

   subAns(answer){ this.final = answer}
  // subAn(a,b,c,d,e){
  //   this.final = []
  //   this.final.push(a,b,c,d,e);
 // }
  checkthem(){console.log(this.final)}
  check(){
  if (this.final == this.myanswer){
     let u = document.getElementsByName('note')[0];
      u.style.display="none";
      let s = document.getElementsByName('alert')[0];
      s.style.display="block";
      let r = document.getElementsByName('right')[0];
      r.style.display="block";
      let w = document.getElementsByName('wrong')[0];
      w.style.display="none";
      let t = document.getElementsByName('correct')[0];
      t.innerHTML = "Correct!!!";
      t.style.color="#76da04";
      if (this.score != null){this.score = this.score.score + 5;}else{this.score = 5}
      this.pro.saveScore( this.score)
      console.log('Correct');
  }else{
    let u = document.getElementsByName('note')[0];
    u.style.display="none";
    let s = document.getElementsByName('alert')[0];
    s.style.display="block";
    let r = document.getElementsByName('right')[0];
    r.style.display="none";
    let w = document.getElementsByName('wrong')[0];
    w.style.display="block";
    let t = document.getElementsByName('correct')[0];
    t.innerHTML = "Wrong!!!";
    t.style.color="#bd0505";
      console.log('Sorry')
  }
  console.log(this.final, this.myanswer)
  }
  
  openLan() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Languages',
      cssClass: 'action-sheets-basic-page',
      buttons: [{text: 'French',handler: () => {this.transilateFrench()} },{text: 'English',handler: () => {this.transilateEnglish()}},{text: 'Twi',handler: () => {} },
      {text: 'Cancel',role: 'cancel', handler: () => { console.log('Cancel clicked');}}]});
    actionSheet.present();
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
   this.ionViewDidLoad();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  transilateFrench(){
    this.language= "French";
    let u = document.getElementsByName('english')[0];
    u.style.display="none";
    let s = document.getElementsByName('french')[0];
    s.style.display="block";
  }

  transilateEnglish(){
    this.language= "English";
    let u = document.getElementsByName('english')[0];
    u.style.display="block";
    let s = document.getElementsByName('french')[0];
    s.style.display="none";
  }

}
