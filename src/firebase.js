import * as firebase from 'firebase';
const config = {
  apiKey: "AIzaSyBjB-vAVVbchQD6HLYbn0GeXHijEdECRbA",
  authDomain: "pwa-hackathon-88701.firebaseapp.com",
  databaseURL: "https://pwa-hackathon-88701.firebaseio.com",
  projectId: "pwa-hackathon-88701",
  storageBucket: "pwa-hackathon-88701.appspot.com",
  messagingSenderId: "1089734971300"
};
export const firebaseApp = firebase.initializeApp(config);