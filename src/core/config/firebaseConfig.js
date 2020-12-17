// Dependencies
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: 'AIzaSyCF1OH8ecQF4EzkK3T9QSYeE-Ke6x8GC3M',
  authDomain: 'stuffapp-ebfe7.firebaseapp.com',
  projectId: 'stuffapp-ebfe7',
  storageBucket: 'stuffapp-ebfe7.appspot.com',
  messagingSenderId: '837951499462',
  appId: '1:837951499462:web:0db2bf91bb16aa43243bc7',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;
