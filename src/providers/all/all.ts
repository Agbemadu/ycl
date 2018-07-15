import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import firebase from 'firebase';
/*
  Generated class for the AllProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AllProvider {
  public courses: firebase.database.Reference;
  public coursesId: string;
  currentUser: any;
constructor(/*public http: HttpClient*/) {
    console.log('Hello AllProvider Provider');
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        //this.userId = firebase.auth().currentUser.uid;
          //console.log(this.userId);
        this.coursesId = user.uid;
        this.courses = firebase
        .database()
        .ref(`/data/Social Studies/JHS/JHS 1/SEC 1/The Environment & Environmental Problems/Air Pollution/What is Air Pollution`);

      }
    });
  }

  getTopicQuestionAnswer(cat,topic): firebase.database.Reference {
    return firebase
    .database()
    .ref(`courses/topics/${cat}/${topic}/answers`);
  }

  getTopicQuestionWithImages(cat,topic): firebase.database.Reference {
    return firebase
    .database()
    .ref(`courses/topics/${cat}/${topic}/images`);
  }

  getTopicQuestion(cat,topic): firebase.database.Reference {
    return firebase
    .database()
    .ref(`courses/topics/${cat}/${topic}`);
  }
  
  getCourseTitle(cat): firebase.database.Reference {
    return firebase
    .database()
    .ref(`courses/topics/${cat}`);
  }

gettopics(subject): firebase.database.Reference{
  return firebase
  .database()
  .ref(`courses/${subject}`);
}

  getTopicsDetailsWIthLesson(subject,cat,clas,sec,gen,topic): firebase.database.Reference {
    return firebase
    .database()
    .ref(`topics/${subject}/${cat}/${clas}/${sec}/${gen}/${topic}`);
  }


getReportDetails(detail): firebase.database.Reference {
    return firebase
    .database()
    .ref(`report/${detail}`);
  }

  getStudentReportDetails(uid,detail): firebase.database.Reference {
    return firebase
    .database()
    .ref(`studentreport/mlmf1TKkHLMZfBV3BFXB20U44893/${detail}`);
  }

}
