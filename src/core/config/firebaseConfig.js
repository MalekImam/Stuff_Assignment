// Dependencies
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: 'AIzaSyAEw2FdW6DXEfGAXSBY7LMyg9diKPsPDjQ',
  authDomain: 'stuff-assignment.firebaseapp.com',
  projectId: 'stuff-assignment',
  storageBucket: 'stuff-assignment.appspot.com',
  messagingSenderId: '523689283503',
  appId: '1:523689283503:web:00d4d20737b57bfbfae95a',
  measurementId: 'G-2D639YLZ5B',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;
