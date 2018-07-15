import { Component, ViewChild, ElementRef } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, Content, NavParams, PopoverController,ViewController, ModalController, ActionSheetController } from 'ionic-angular';
import { CoursepagePage } from '../coursepage/coursepage';
import { AllProvider } from '../../providers/all/all';
import { SettingsPage } from '../settings/settings';
import { ProfilePage } from '../profile/profile';
import { MorePage } from '../more/more';
import { EditprofilePage } from '../editprofile/editprofile';
import { ContactPage } from '../contact/contact';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ProProvider } from '../../providers/pro/pro';
import { WeaponPage } from '../weapon/weapon';
import { StorePage } from '../store/store';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { ChallangePage } from '../challange/challange';
// import { BeginPage } from '../begin/begin';
import { LookPage } from '../look/look';
import { NotificationPage } from '../notification/notification';
import { DoyouknowPage } from '../doyouknow/doyouknow';


/**********PopOver*********************** */

@Component({
      templateUrl: `pop.html`,
       selector: 'page-pop',
         })
   export class PopoverPage {
    background: string;
     contentEle: any;
         textEle: any;
       fontFamily;

  

  constructor(private socialSharing: SocialSharing,
    private navParams: NavParams,public modalCtrl: ModalController,public navCtrl: NavController,
     public view: ViewController) {

  }

  ngOnInit() {
    
  }

 
  editprofile(){
    let modal = this.modalCtrl.create(EditprofilePage);
    modal.present();
    this.view.dismiss();
  }

  inviteFriends(){
    this.navCtrl.push(ContactPage).then(()=>{
    this.view.dismiss();
    })
 }



shareItem() {
  const message = "You Can Learn with me on YCL, join now... http://com.ycl.web.?#gjhgfhsdjf?%74=app";
  // this code is to use the social sharing plugin
  // message, subject, file, url
  this.socialSharing.share(message)
  .then(() => {
  })
  .catch(() => {
  });
  this.view.dismiss();
}

openstore(){
  this.navCtrl.push(StorePage)
  this.view.dismiss();
}

 opensettings(){
      this.navCtrl.push(SettingsPage).then(()=>{
       this.view.dismiss();
       })
   }

}

/**********End*********************** */




/**********************Weapon Select********************************** */

@Component({
  templateUrl: `weaponselect.html`,
   selector: 'page-weaponselect',
     })
export class SelectWeaponPage {
  public courses = []
constructor(private navParams: NavParams,public navCtrl: NavController, public view: ViewController) {}

ngOnInit() {

}

ionViewDidLoad() {
  this.courses = this.navParams.get('c')
   console.log('ionViewDidLoad SelectWeaponPage');
   console.log(this.courses);
 }


 openNext(name){
  //console.log(name);
  if (name == 'Social Studies'){
 this.navCtrl.push(WeaponPage, { n: name }).then(()=>{this.view.dismiss();})
  }
 }
openstore(){
this.navCtrl.push(StorePage)
this.view.dismiss();
}

opensettings(){
  this.navCtrl.push(SettingsPage).then(()=>{
   this.view.dismiss();
   })
}

}
/**********End*********************** */




/**********Home*********************** */


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lesson_segment; myRequest = []; theirRequest= []; noRequest = [];
  person; curnt =[]; students; name;
  ourRequest: any = []
  public swipe: number = 0;
  public seg = ['challenge','home','learning']
  @ViewChild('popoverContent', { read: ElementRef }) content: ElementRef;
  @ViewChild('popoverText', { read: ElementRef }) text: ElementRef;

  public courses = [
  {name: 'Sign Language', current: 500},
  {name: 'Maths', current: 2900},
  {name: 'Science', current: 3600},
  {name: 'Social Studies', current: 4000},
  {name: 'I C T', current: 1750},
  {name: 'B D T', current: 2550},
  {name: 'Languages', current: 1920},
  {name: 'R M E', current: 1470},
  ]

   
    show: boolean =true;
    current: number;
    max: number = 10000;
    stroke: number = 6;
    radius: number = 50;
    semicircle: boolean = false;
    rounded: boolean = true;
    responsive: boolean = false;
    clockwise: boolean = true;
    color: string = '#45ccce';
    background: string = '#dddbdb';
    duration: number = 800;
    animation: string = 'easeOutCubic';
    animationDelay: number = 10;
    animations: string[] = [];
    gradient: boolean = false;
    realCurrent: number;
    rate: number;
    mycurrent: number;
  constructor(public storage: Storage,private navParams: NavParams, public navCtrl: NavController,public modalCtrl: ModalController,private popoverCtrl: PopoverController,public all: AllProvider,public pro: ProProvider,
              public actionsheetCtrl: ActionSheetController,public view: ViewController,public auth: AuthenticationProvider) {
  }


  ionViewDidLoad() { 
    this.auth.getUserProfile().on('value',userSnapshot => {
      this.name = userSnapshot.val().fullname 
      this.person = userSnapshot.val().type
    })
    this.doUKnow();
    this.storage.get('Parent').then((Parent) => {
    if (Parent){
     this.person = "Parent"
    }
    // else{
    // this.person = "Student"
    // }
    })
    this.storage.get('Teacher').then((Teacher) => {
      if (Teacher){
       this.person = "Teacher"
      }
      // else{
      //   this.person = "Student"
      // }
    })
      this.storage.get('Student').then((Student) => {
        if (Student){
         this.person = "Student"
        }
        // else{
        //   this.person = "Student"
        // }
        this.pro.getMyScore().on('value', score => {
        this.mycurrent = score.val();
        console.log(this.mycurrent);
        })
       
      console.log(this.person);
    })

 this.auth.getUserProfiles().on('value', userSnap=>{
      this.students = []
          userSnap.forEach(snap => {
            if (snap.val().type == "Student"){
            this.students.push({
            id: snap.key,
            fullname: snap.val().fullname,
            school: snap.val().school
           });
          }
           console.log(this.students)
       return false; 
        })
      })

    this.lesson_segment = this.seg[1];
    this.swipe = 1
    this.auth.getUserProfile().on('value', user => {
      this.curnt = user.val();
      
     })


    
   
   
   let challengeref = this.pro.getChallenges()
   const me = this.pro.userID;
   challengeref.orderByChild("hisDone").equalTo(false).on('value', courseSnapshot => {
      this.myRequest = [];
      courseSnapshot.forEach(snap =>{
        var myid = snap.val().myID
        var mydone = snap.val().myDone
        if (myid == me && mydone == true){
         this.myRequest.push({
           id: snap.key,
           hisName: snap.val().hisName
        }) 
        }
        return false
      });
    });

    challengeref.orderByChild("myDone").equalTo(true).on('value', theirSnapshot => {
      this.theirRequest = [];
      theirSnapshot.forEach(snap =>{
        var hisid = snap.val().hisID
        var hisdone = snap.val().hisDone
        if (hisid == me && hisdone == false){
         this.theirRequest.push({
           id: snap.key,
           hisName: snap.val().hisName
        }) 
        }
        return false
      });
      console.log(this.theirRequest);
    });

    challengeref.orderByChild("myDone").equalTo(true).on('value', ourSnapshot => {
      this.ourRequest = [];
      ourSnapshot.forEach(snap =>{
        var myid = snap.val().myID
        var hisid = snap.val().hisID
        var hisdone = snap.val().hisDone
        if (myid == me || hisid == me && hisdone == true){
         this.ourRequest.push({
           id: snap.key,
           hisName: snap.val().hisName
        }) 
        }
        return false
      });
      console.log(this.ourRequest);
    });

    challengeref.orderByChild("myDone").equalTo(false).on('value', noSnapshot => {
      this.noRequest = [];
      noSnapshot.forEach(snap =>{
        var myid = snap.val().myID
        var hisdone = snap.val().hisDone
        if (myid == me && hisdone == false){
         this.noRequest.push({
           id: snap.key,
           hisName: snap.val().hisName
        }) 
        }
        return false
      });
      console.log(this.noRequest);
    });
  }

  AddStudents(){

  }

  callpage(){
    this.navCtrl.push(LookPage)
  }

  openstore(){
    this.navCtrl.push(StorePage)
  }

  OpenCourse(c){
   console.log(c);
    this.navCtrl.push(CoursepagePage, { c: c }) 
  }

  finishIt(id,hisname){
    this.navCtrl.push(ChallangePage, { c: 1, cid: id,chiName: hisname})
  }

  play(id,hisname){
    this.navCtrl.push(ChallangePage, { c: 0, cid: id,chiName: hisname})
  }
  
  presentPopover(ev) {

    let popover = this.popoverCtrl.create(PopoverPage, {
      contentEle: this.content.nativeElement,
      textEle: this.text.nativeElement
    });

    popover.present({
      ev: ev
    });
  }
  
  openProfile(text){
    if(text != null){
      this.navCtrl.push(ProfilePage,{name: text});
    }else{
      this.navCtrl.push(ProfilePage); 
    }
  }

  openNotification(){
    this.navCtrl.push(NotificationPage); 
  }

  viewClassmates(){
    this.storage.remove('More').then(()=>{
     this.navCtrl.push(MorePage) 
    })
    
  }

  more(More){
    this.storage.set('More', 'true').then(() => {
    this.navCtrl.push(MorePage, { c: More })
  })
  }
  
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
   this.ionViewDidLoad();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  openChallenge(ev){
    let popover = this.popoverCtrl.create(SelectWeaponPage, {
      contentEle: this.content.nativeElement,
      textEle: this.text.nativeElement,
      c: this.courses
    });

    popover.present({ev:ev});

    // let modal = this.modalCtrl.create(WeaponPage, {c: this.courses});
    // modal.present();
}

doUKnow(){
  let popover = this.popoverCtrl.create(DoyouknowPage, {
    contentEle: this.content.nativeElement,
    textEle: this.text.nativeElement,
    c: this.courses
  });
  popover.present();
}

swipeEvent(e) {
  if(e.direction === 2) { // Swipe Right
    if (this.swipe != 0)
    {
     this.swipe-- 
     this.lesson_segment = this.seg[this.swipe] 
    }
  }

     if(e.direction === 1) { // Swipe Left
      if (this.swipe != this.seg.length-1){
      this.swipe++
    this.lesson_segment = this.seg[this.swipe]
    
  }
  }
  
console.log('Swiped:'+this.swipe +' times')

}
swipefunction(){
  for(var i = 0; i < this.seg.length; i++){
  if (i == this.seg.length){
    i = 0
  }else if (i < this.seg.length){
    i++
  }
}

}


}
