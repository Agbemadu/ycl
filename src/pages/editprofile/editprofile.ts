import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, Loading } from 'ionic-angular';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import firebase from 'firebase';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms/src/model';


@IonicPage()
@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html',
})
export class EditprofilePage {
  user;
  public loading: Loading;
  public editForm: FormGroup
  public user_data: any = { };
  public fullname: any;
  public school : any;
  public country: any;
  public age : any;
  public gender: any;
  public type : any;
  public exams : any;
  public email: any;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public viewCtrl: ViewController,public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,public ap: AuthenticationProvider
    ) {this.editForm = this.formBuilder.group({})
  }

  dismiss() {
   this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    this.ap.getUserProfile().on('value',userSnapshot => {
      this.user_data = userSnapshot.val(),
      this.user = firebase.auth().currentUser;
    })
    console.log(this.user_data);
    console.log('ionViewDidLoad EditprofilePage');
  }


  updateProfile(){
    this.displayPreloader();
    const fullname = this.user_data.fullname
    const school = this.user_data.school
    const country = this.onChange(this.user_data.country)
    const age = this.user_data.age
    const gender = this.onChange(this.user_data.gender);
    const type = this.onChange(this.user_data.type);
    const exams = this.user_data.exams;
    const email = this.user_data.email
    //const password = this.editForm.value.age
      console.log(email,fullname,country,gender,age,type,exams,school);
     this.ap.updateUser(country,fullname,age,gender,type,exams,email,school);
     this.hidePreloader().then(()=>{
      this.navCtrl.pop()
     // this.navCtrl.setRoot(HomePage)
     })
  }

  displayPreloader() : void
 {
    this.loading = this.loadingCtrl.create({
       content: 'Updating Account...'
    });

    this.loading.present();
 }

 hidePreloader() : Promise<any>
 {
   return this.loading.dismiss();
 }

 onChange(SelectedValue){
  return SelectedValue;
}
}
