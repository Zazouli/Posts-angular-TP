import { Component } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {

constructor(){
  var firebaseConfig = {
    apiKey: "AIzaSyAtasNHAwRO8LWEStHjmF_246N0rpsw4bw",
    authDomain: "tp-angular-2.firebaseapp.com",
    databaseURL: "https://tp-angular-2.firebaseio.com",
    projectId: "tp-angular-2",
    storageBucket: "tp-angular-2.appspot.com",
    messagingSenderId: "480323135367",
    appId: "1:480323135367:web:6ee28414754e71efea5522",
    measurementId: "G-28MF8TZF8Y"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
} 
}
