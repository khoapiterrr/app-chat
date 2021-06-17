import firebase from 'firebase/app';
import 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBaieC71D5S0NWUEF_6gKAwat57K2SaV2w',
  authDomain: 'call-video-d0b21.firebaseapp.com',
  projectId: 'call-video-d0b21',
  storageBucket: 'call-video-d0b21.appspot.com',
  messagingSenderId: '9432513500',
  appId: '1:9432513500:web:d11b2590b4ceaa973bad19',
  measurementId: 'G-Y0XJ68B1Q4',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;
