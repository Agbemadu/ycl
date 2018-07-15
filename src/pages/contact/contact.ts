import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { Contacts} from '@ionic-native/contacts';
import { SMS } from '@ionic-native/sms';
import { SocialSharing } from '@ionic-native/social-sharing';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})

export class ContactPage {
  allContact = []
 groupedContacts = []

constructor( public navCtrl: NavController,public loadingCtrl: LoadingController, public navParams: NavParams,public toastCtrl: ToastController,private contacts: Contacts,private sms: SMS) {
  this.presentLoading()
  contacts.find(["displayName", "phoneNumbers"], {multiple: true, hasPhoneNumber: true}).then((contacts) => {

    for (var i=0 ; i < contacts.length; i++){
     if(contacts[i].displayName !== null){
       var obj = {};
       obj["name"] = contacts[i].displayName;
       obj["number"] = contacts[i].phoneNumbers[0].value;
       this.allContact.push(obj)    // adding in separate array with keys: name, number
     }      
    }
  
    this.groupContacts(this.allContact);
  })
}

ionViewDidLoad() {
  console.log('ionViewDidLoad ContactPage');
}

groupContacts(allContact){

  let sortedContacts = allContact.sort(function(a, b){
    if(a.name < b.name) return -1;
    if(a.name > b.name) return 1;
    return 0;
   });

  let currentLetter = false;
  let currentContacts = [];

  sortedContacts.forEach((value, index) => {
    if(value.name.charAt(0) != currentLetter){
      currentLetter = value.name.charAt(0);

      let newGroup ={
        letter: currentLetter,
        contacts:[]
      };

      currentContacts = newGroup.contacts;
      this.groupedContacts.push(newGroup);
    }
    currentContacts.push(value);
  });
}

SendInvitation(number ){
  var options={
    replaceLineBreaks: false, // true to replace \n by a new line, false by default
    android: {
         intent: 'INTENT'  // Opens Default sms app
        // intent: '' // Sends sms without opening default sms app
      }
    }
  const num = number
  const message = "You Can Learn with me on YCL, join now... http://com.ycl.web.?#gjhgfhsdjf?%74=app"
  this.sms.send(num, message, options).then((result) => {
    let successToast = this.toastCtrl.create({
      message:  "Text message sent successfully! :)",
      duration: 3000
    })
    successToast.present();
  }, (error) => {
    let errorToast = this.toastCtrl.create({
      message: "Text message not sent. :(",
      duration: 3000
    })
    errorToast.present();
  });
}

presentLoading() {
  this.loadingCtrl.create({
    content: 'Loading Contacts...',
    duration: 6000,
    dismissOnPageChange: true
  }).present();
}

}
