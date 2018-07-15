import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidator } from '../../validators/email';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { HomePage } from '../home/home';
import { MenuPage } from '../menu/menu';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public loading: Loading;
  private userForm : FormGroup;
  constructor(public navCtrl: NavController,public ap: AuthenticationProvider,public formBuilder: FormBuilder,public loadingCtrl: LoadingController,public alt: AlertController,public navParams: NavParams) {
      this.userForm = this.formBuilder.group({
        password: ['', Validators.required],
       // username: ['', Validators.required],
        email: ['',Validators.compose([Validators.required, EmailValidator.isValid])],
        //rpassword: ['', Validators.required]
        })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginUser(){
    this.presentLoading();
    const email = this.userForm.value.email;
    const password = this.userForm.value.password
    this.ap.loginUser(email,password).then((er)=>{
    this.navCtrl.setRoot(MenuPage);
  })
  }

  presentLoading() {
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 5000,
      dismissOnPageChange: true
    }).present();
  }
}
