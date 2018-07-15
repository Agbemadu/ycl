import { Component } from '@angular/core';
import { IonicPage,AlertController, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import firebase from "firebase";
import { GoogleCloudVisionServiceProvider } from '../../providers/google-cloud-vision-service/google-cloud-vision-service';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
/**
 * Generated class for the CategoriespagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-look',
  templateUrl: 'look.html',
})
export class LookPage {
  item; image
  constructor(public navCtrl: NavController,public vision: GoogleCloudVisionServiceProvider,public auth: AuthenticationProvider,
    public camera: Camera, public alert: AlertController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
   this.auth.getStudentImageAndSay().on('value',imageSnap =>{
     this.item = imageSnap.val();
   })
    console.log('ionViewDidLoad CategoriespagePage');
  }

  

  showAlert(message) {
    let alert = this.alert.create({
      title: 'Error',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }


  selectImage() : Promise<any>
  {
     return new Promise(resolve =>
     {
        let cameraOptions : CameraOptions = {
            sourceType         : this.camera.PictureSourceType.CAMERA,
            destinationType    : this.camera.DestinationType.DATA_URL,
            quality            : 100,
            targetWidth: 700,
            targetHeight: 700,
            allowEdit : true,
            encodingType       : this.camera.EncodingType.JPEG,
            correctOrientation : true
        };
  
        this.camera.getPicture(cameraOptions)
        .then((data) =>
        {
           this.image 	= "data:image/jpeg;base64," + data;
           resolve(this.image);
           this.vision.getLabels(this.image).subscribe((result) => {
            this.auth.saveStudentImageAndSay(this.image, result);
          }, err => {
            this.showAlert(err);
          });
        }, err => {
          this.showAlert(err);
        });
  })
  }

  takePhoto() {
    const options: CameraOptions = {
      quality: 100,
      targetHeight: 500,
      targetWidth: 500,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      this.vision.getLabels(imageData).subscribe((result) => {
        this.auth.saveStudentImageAndSay(imageData, result);
      }, err => {
        this.showAlert(err);
      });
    }, err => {
      this.showAlert(err);
    });
  }


}
