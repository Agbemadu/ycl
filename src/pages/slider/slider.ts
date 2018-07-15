import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { BeginPage } from '../begin/begin';
import { LoginPage } from '../login/login';

/**
 * Generated class for the SliderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-slider',
  templateUrl: 'slider.html',
})
export class SliderPage {
  showSkip = true;

	@ViewChild('slides') slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SliderPage');
  }

  startNEWApp() {
      this.navCtrl.push(BeginPage).then(() => {
        //this.storage.set('hasSeenSlide', 'true');
      })
    }

    loginApp(){
      this.navCtrl.push(LoginPage).then(() => {
      })
    }

    onSlideChangeStart(slider: Slides) {
      // this.showSkip = !slider.isEnd();
    }

  	

}
