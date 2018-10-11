import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBlofQBTC9coF_rn7FrftX9TYuRJKxJ3-M",
    authDomain: "instock-3ac1c.firebaseapp.com",
    databaseURL: "https://instock-3ac1c.firebaseio.com",
    projectId: "instock-3ac1c",
    storageBucket: "instock-3ac1c.appspot.com",
    messagingSenderId: "59231702940"
  };

if (!firebase.apps.length) {
  firebase.initializeApp(config);
  }

const auth = firebase.auth();

export {
  auth,
  };