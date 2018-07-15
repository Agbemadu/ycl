import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import firebase from 'firebase';
/*
  Generated class for the ProProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProProvider {
  public leader: firebase.database.Reference;
  public userID: string;
  currentUser: any;
  constructor() {
    console.log('Hello AllProvider Provider');
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.userID = firebase.auth().currentUser.uid;
          //console.log(this.userId);
        this.leader = firebase
        .database()
        .ref(`/leaderboard/${this.userID}`);

      }
    });
  }



  saveScore(score: number): Promise<any> {
    return firebase
    .database()
    .ref(`/leaderboard/${this.userID}`).update({score});
}

getMyScore(): firebase.database.Reference{
  return firebase
  .database()
  .ref(`/leaderboard/${this.userID}`)
}

getProgress(): firebase.database.Reference {
  return firebase
  .database()
  .ref(`/leaderboard`);
}

/**************challenges***************** */
getChallengeQuestions(number): firebase.database.Reference{
  return firebase
  .database()
  .ref(`/challenge/questions/${number}`)
}

getChallengeAnswers(number){
  return firebase
  .database()
  .ref(`/challenge/questions/${number}/answers`)
}

sendchallengeRequest(myID,hisID,hisName,myName): firebase.database.Reference
{
  const myDone = false
  const hisDone = false
  return firebase
  .database()
  .ref(`/challenge`).push({myID,hisID,myDone,hisDone,hisName,myName})
}


getChallenges(): firebase.database.Reference{
  return firebase
  .database()
  .ref(`/challenge`);
}

getChallengeskey(key): firebase.database.Reference{
  return firebase
  .database()
  .ref(`/challenge/${key}`);
}

updateChallenges1(key): Promise<any>{
  return firebase
  .database()
  .ref(`/challenge/${key}`).update({myDone: true});
}

updateChallenges2(key): Promise<any>{
  return firebase
  .database()
  .ref(`/challenge/${key}`).update({hisDone: true});
}

}