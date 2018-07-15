import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Alert, LoadingController, Loading } from 'ionic-angular';
import { EmailValidator } from '../../validators/email';
import { NgForm,Validators, FormBuilder, FormGroup  } from '@angular/forms';
import { ProProvider } from '../../providers/pro/pro';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { HomePage } from '../home/home';
/**
 * Generated class for the CompleteprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-completeprofile',
  templateUrl: 'completeprofile.html',
})
export class CompleteprofilePage {
  submitted = false;
  public loading: Loading;
  public churchProfile: any = {};
  public current: any = {};
  churchID; type; exams; school;
  private signupForm : FormGroup;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public formBuilder: FormBuilder,
              public alertCtrl: AlertController,
              public ap: AuthenticationProvider,
              public loadingCtrl: LoadingController,
              public pro: ProProvider) {
    this.signupForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      country: ['', Validators.required],
      school: [''],
      age: ['', Validators.required],
      password: ['', Validators.required],
      repassword: ['', Validators.required],
      gender: ['', Validators.required],
      exams: [''],
      type: ['', Validators.required],
      email: ['',Validators.compose([Validators.required, EmailValidator.isValid])],
                     })
  }


  ionViewDidLoad() {
    
  this.type = this.navParams.get('person');
  console.log('ionViewDidLoad CompleteprofilePage');
  if(this.type != "Student"){
    let it = document.getElementsByName('exams')[0]
    it.style.display = "none";
  }
  if(this.type == "Parent"  ){
    let it = document.getElementsByName('school')[0]
    it.style.display = "none";
  }
//console.log(this.current);
}

changephoto(){

}

onChange(SelectedValue){
  return SelectedValue;
}

signupChurchAcount(){
  const fullname = this.signupForm.value.fullname
  this.school = this.signupForm.value.school
  const country = this.onChange(this.signupForm.value.country)
  const age = this.signupForm.value.age
  const gender = this.onChange(this.signupForm.value.gender);
  const type = this.signupForm.value.type;
   this.exams = this.onChange(this.signupForm.value.exams);
  const email = this.signupForm.value.email
  const password = this.signupForm.value.password
  if(this.exams == null ){this.exams = "None"}
  if (this.school == null){this.school = "None"}
  
    console.log(email,password,fullname,country,gender,age,type,this.exams,this.school);
   this.ap.signUpEmail(email,password,fullname,country,gender,age,type,this.exams,this.school).then(
    user => {
      this.loading.dismiss().then(() => {
        this.navCtrl.setRoot(HomePage,{person: this.type});
      });
    },
    error => {
      this.loading.dismiss().then(() => {
        let alert = this.alertCtrl.create({
          message: error.message,
          buttons: [{ text: "Ok", role: "cancel" }]
        });
        alert.present();
      });
    }
  );
  this.loading = this.loadingCtrl.create({content: 'Creating Account...'});
  this.loading.present();
}



doNexts(){
  let a = document.getElementsByName('firsts')[0];
  a.style.display="none";
  let s = document.getElementsByName('seconds')[0];
  s.style.display="block";
}

doPrev(){
  let a = document.getElementsByName('seconds')[0];
  a.style.display="none";
  let s = document.getElementsByName('firsts')[0];
  s.style.display="block";
}

}
