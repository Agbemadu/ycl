import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ProProvider } from '../../providers/pro/pro';

/**
 * Generated class for the ChallangePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

export interface PTimer {
  time: number;
  timeRemaining: number;
  runTimer: boolean;
  hasStarted: boolean;
  hasFinished: boolean;
  displayTime: string;
 }


@IonicPage()
@Component({
  selector: 'page-challange',
  templateUrl: 'challange.html',
})
export class ChallangePage {
  public lesson: any = [1,2,3,4,5]
  questionNumber: number; count: number = 0; counts: number = 0;
  question = [];
  answers = [];
  public score:any;
  public key; c
  public myanswer: any; 
  public final: any;
  public timer: PTimer; timeInSeconds;
  name; title; id; cid
  constructor(public navCtrl: NavController,public toastCtrl: ToastController, public navParams: NavParams, public pro: ProProvider) {


  }

  ionViewDidLoad() {
    this.pro.getMyScore().on('value', scoreSnap=>{
      this.score = scoreSnap.val();
     })

    this.key = this.navParams.get('key');
    
     this.c = this.navParams.get('c');
    if (this.c == 1 || this.c == 0){
      this.cid = this.navParams.get('cid');
      this.title = "Social Studies"
      this.name = this.navParams.get('chiName');
    }else{
      this.id = this.navParams.get('id');
      this.name = this.navParams.get('name');
      this.title = this.navParams.get('title');
    }
    console.log('ionViewDidLoad ChallangePage');
    console.log(this.key);

   this.questionNumber = this.lesson[this.count]
   this.getQuestions(this.questionNumber);
   this.getAnswers(this.questionNumber)
  }

getQuestions(number){
  this.pro.getChallengeQuestions(number).on('value', questSnap =>{
    this.question = questSnap.val().ques
      console.log(this.question)
      return false
      
    })
  // })
}
  getAnswers(number){
    this.pro.getChallengeAnswers(number).on('value', ansSnap =>{
      this.answers = ansSnap.val()
      this.myanswer = ansSnap.val().correct
        console.log(this.myanswer)

        
      })
    // })
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

shuffule(number){
 if (number < 6){
   console.log(number)
   this.getQuestions(number)
  this.getAnswers(number)
  this.initTimer()
  this.startTimer()
 }else{
   this.done(number)
 }
}

  ngOnInit() {
    this.initTimer();
    }
   
   hasFinished() {
    return this.timer.hasFinished;
    }

    initTimer(){
    if (!this.timeInSeconds) { this.timeInSeconds = 30;
      
     }
   
   this.timer = <PTimer>{
    time: this.timeInSeconds,
    runTimer: false,
    hasStarted: false,
    hasFinished: false,
    timeRemaining: this.timeInSeconds
    };
    this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.timeRemaining);
    }
   
   getSecondsAsDigitalClock(inputSeconds: number) {
    var sec_num = parseInt(inputSeconds.toString(), 10); 
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);
    var hoursString = '';
    var minutesString = '';
    var secondsString = '';
    
    minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
    secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
    console.log(sec_num)
    return  minutesString + ':' + secondsString;
    }

    

   startTimer() {
     let c = document.getElementsByName('compare')[0]
     c.style.display = "none";
     let d = document.getElementsByName('challangepage')[0]
     d.style.display = "block";
      this.timer.hasStarted = true;
      this.timer.runTimer = true;
      this.timerTick();
 }
  

 timerTick() {
  setTimeout(() => {
 
 if (!this.timer.runTimer) { return; }
  this.timer.timeRemaining--;
  this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.timeRemaining);
  if (this.timer.timeRemaining > 0) {
  this.timerTick(); 
  }
  else {
  this.timer.hasFinished = true;
  this.check()
  }
  }, 1000);
  }

  subAns(g){
     this.final = g;
     console.log(g)
  }

  check(){
    this.questionNumber =this.lesson[++this.count]
    if (this.final == this.myanswer){
        this.showToastWithCloseButton('correct!!')
        if (this.score != null){this.score = this.score.score + 2}else{this.score = 2}
        this.pro.saveScore(this.score)
        console.log('Correct');
       ++this.counts
        this.getQuestions(this.questionNumber)
        this.getAnswers(this.questionNumber)
        this.initTimer()
        this.startTimer()
    }else{
     this.showToastWithCloseButton('Wrong!!!')
     this.getQuestions(this.questionNumber)
     this.getAnswers(this.questionNumber)
     this.initTimer()
     this.startTimer()
     --this.counts
    }
    this.done(this.questionNumber)
    console.log(this.final, this.myanswer)
    }
    
    done(num){
      if(num == 5){
        if (this.c == 1){
      console.log(this.cid)
    this.pro.updateChallenges2(this.cid)
    }else{
      console.log(this.key)
    this.pro.updateChallenges1(this.key)
    }
    let c = document.getElementsByName('compare')[0]
    c.style.display = "block";
    let d = document.getElementsByName('challangepage')[0]
    d.style.display = "none";
    let a = document.getElementsByName('after')[0]
    a.style.display = "block";
    let b = document.getElementsByName('before')[0]
    b.style.display = "none";
    let f = document.getElementsByName('footer')[0]
    f.style.display = "block";
    this.initTimer()
      } 
      
  }
    
}
