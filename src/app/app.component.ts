import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    const config = {
      apiKey: "AIzaSyABtWhtvBazA-uP93FmcFyUFl6iWw9kvyE",
      authDomain: "post12112018.firebaseapp.com",
      databaseURL: "https://post12112018.firebaseio.com",
      projectId: "post12112018",
      storageBucket: "post12112018.appspot.com",
      messagingSenderId: "217493973393"
    };
    firebase.initializeApp(config);
  }

}
