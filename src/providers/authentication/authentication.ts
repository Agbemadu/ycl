//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  firebase  from 'firebase'
/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenticationProvider {
  public userProfile: firebase.database.Reference;
  public userId: string;
  currentUser: any;
constructor(/*public http: HttpClient*/) {
    console.log('Hello AuthenticationProvider Provider');
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        //this.userId = firebase.auth().currentUser.uid;
          //console.log(this.userId);
        this.currentUser = user.uid;
        this.userProfile = firebase
        .database()
        .ref(`/user/${this.currentUser}`);

      }
    });
  }

  loginUser(email: string, password: string): Promise<any> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }


  logoutUser(): Promise<any>{
   return firebase.auth().signOut().then(function() {
  console.log("done");
  }).catch(function(error) {
    // An error happened.
  });
  }


  getUserProfile(): firebase.database.Reference{
    return firebase
    .database()
    .ref(`/user/${this.currentUser}`);
 }

 getUserProfileAddToken(token): Promise<any>{
  return this.userProfile.update({token})
}

 getUserProfiles(): firebase.database.Reference{
  return firebase
  .database()
  .ref(`/user`)
}
 
   signUpEmail(email: string,password: string,fullname: string,country: string,gender: string,age: string,type: string,exams: string,school: string): Promise<any> {
     return firebase
       .auth()
       .createUserWithEmailAndPassword(email, password)
       .then(newUser => {
         firebase
           .database()
           .ref(`/user/${newUser.uid}`)
           .set({country,fullname,age,gender,type,exams,email,school});
 
       })
       .catch(error => console.error(error));
       //this.accountType="";
   }

   updateUser(country,fullname,age,gender,type,exams,email,school): Promise<any>{
     return this.userProfile.update({country,fullname,age,gender,type,exams,email,school});
   }

sendFollowRequest(){
  return firebase
.database()
.ref(`/follow/${this.currentUser}`).push({})
}

saveStudentImageAndSay(imageData,responds){
return firebase
.database()
.ref(`/images/${this.currentUser}`).push({imageData,responds})
}

getStudentImageAndSay(){
return firebase
.database()
.ref(`/images/${this.currentUser}`)
}
  

}
