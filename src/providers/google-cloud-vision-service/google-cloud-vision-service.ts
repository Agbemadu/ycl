import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
/*
  Generated class for the GoogleCloudVisionServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GoogleCloudVisionServiceProvider {
  googleCloudVisionAPIKey = "AIzaSyDDe3ryTS45R-LZnk53C0zVcCtTZ_bA9gE";
  constructor(public http: Http) {
    console.log('Hello GoogleCloudVisionServiceProvider Provider');
  }

  getLabels(base64Image) {
    const body = {
      "requests": [
        {
          "image": {
            "content": base64Image
          },
          "features": [
            {
              "type": "LABEL_DETECTION"
            }
          ]
        }
      ]
    }
    return this.http.post('https://vision.googleapis.com/v1/images:annotate?fields=responses&key=' + this.googleCloudVisionAPIKey, body);
    }

}
