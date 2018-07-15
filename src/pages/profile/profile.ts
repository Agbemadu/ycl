import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ActionSheetController } from 'ionic-angular';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import firebase from 'firebase';
import { EditprofilePage } from '../editprofile/editprofile';
import * as $ from "jquery";
import { AllProvider } from '../../providers/all/all';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-exams',
  templateUrl: 'bookexams.html',
})
export class ExamsPage {
 public data;
 // Doughnut



  constructor(public navCtrl: NavController,public all: AllProvider,
              public actionsheetCtrl: ActionSheetController, public ap: AuthenticationProvider,
              public navParams: NavParams,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.data = this.navParams.get('name')
    
   
    
    }
    

 
  }

  
/************************* */






@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
 public me: any; lesson_segment;
 public user: any; name; username;
 public data;
 // Doughnut
dd = [
{name: 'Sign Language',per: '45'},
{name: 'Maths',per: '25'},
{name: 'Science',per: '35'},
{name: 'Social Studies',per: '85'},
{name: 'I C T',per: '65'},
{name: 'B D T',per: '45'},
{name: 'Languages',per: '5'},
{name: 'R M E',per: '45'}
]

public doughnutChartLabels:string[] = ['Completed', 'Incomplete'];
public doughnutChartData:number[] = [150, 400];
public doughnutChartType:string = 'pie';

//Bar
public barChartOptions:any = {
  scaleShowVerticalLines: false,
  responsive: true
};
barChartLabel;
// public : Array<any> = [['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Augt', 'Sept', 'Oct', 'Nov', 'Dec'],['2018', '2019', '2020', '2021', '2022']];
public barChartType:string = 'bar';
public barChartLegend:boolean = false;
barChartLabels = []
barChartDatas
public barChartData:any[] =[
  {data: [65, 59, 80, 81, 56, 55, 45,65, 59, 80, 81, 56, 55, 70], label: 'Peack Times'},
]
  // 


  constructor(public navCtrl: NavController,public all: AllProvider,
              public actionsheetCtrl: ActionSheetController, public ap: AuthenticationProvider,
              public navParams: NavParams,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.name = this.navParams.get('name')
    if(this.name != null){
    this.username = this.name
    }else{
      this.ap.getUserProfile().on('value',userSnapshot => {
      this.me = userSnapshot.val(),
      this.user = firebase.auth().currentUser;
      this.username = this.me.fullname
    })
   
    console.log(this.me);
    }
    this.data ="Daily";
    if (this.data == "Daily"){
      this.searchDetails(this.data)
     this.barChartDatas = this.barChartData[0]
    }
    this.lesson_segment = "dashboard";
    

    
    console.log('ionViewDidLoad ProfilePage');
  }

  searchDetails(details){
    this.all.getReportDetails(details).on('value', Snap =>{
      this.barChartLabel  = Snap.val();
      this.barChartLabels  = this.barChartLabel.splice(0, 1);
      // }
      console.log(this.barChartLabel)
      console.log(this.barChartLabels)
    })
  }
  
  // getStudentReport(details){
  //   this.all.getStudentReportDetails(1,details).on('value', Snap =>{
  //     this.barChartData  = Snap.val();
  //     // console.log(this.barChartData)
  //     for(let bar of this.barChartData){
  //     console.log(bar.monday)
  //   }
  //   })
    
  // }

  public chartClicked(e:any):void {
    console.log(e);
  }
  
  public chartHovered(e:any):void {
    console.log(e);
  }

  openOptions(){
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Activitey Feed',
      cssClass: 'action-sheets-basic-page',
      buttons: [{text: 'Daily',handler: () => {
      this.data="Daily"
      this.searchDetails(this.data)
      ;} },
      {text: 'Monthly',handler: () => {
        this.data="Monthly";
        // this.barChartLabels = this.barChartLabel[1]
        this.searchDetails(this.data);
        this.barChartDatas = this.barChartData[1]
    } },{text: 'Yearly',handler: () => {
      this.data="Yearly"
      // this.barChartLabels = this.barChartLabel[2]
      this.searchDetails(this.data)
      this.barChartDatas = this.barChartData[2]
    } },
      {text: 'Cancel',role: 'cancel', handler: () => { console.log('Cancel clicked');}}]});
    actionSheet.present();
  }


  openExams(){
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Exams Type',
      cssClass: 'action-sheets-basic-page',
      buttons: [{text: 'BECE',handler: () => {this.book('BECE')} },
      {text: 'WASSCE',handler: () => {this.book('WASSCE') } },
      {text: 'JAMB',handler: () => {this.book('JAMB') } }
      ]});
    actionSheet.present();
  }

  book(name){
   this.navCtrl.push(ExamsPage, {name: name})
  }
  
/************************* */

public randomize():void {
  // Only Change 3 values
  let data = [
    Math.round(Math.random() * 100),
    59,
    80,
    (Math.random() * 100),
    56,
    (Math.random() * 100),
    40];
  let clone = JSON.parse(JSON.stringify(this.barChartData));
  clone[0].data = data;
  this.barChartData = clone;
  /**
   * (My guess), for Angular to recognize the change in the dataset
   * it has to change the dataset variable directly,
   * so one way around it, is to clone the data, change it and then
   * assign it;
   */
 }
}
