import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

var firebaseConfig = {
  apiKey: 'AIzaSyBD3j92fQeX4_22_2xHxIAjD3oADnUGzo8',
  authDomain: 'posts-loader.firebaseapp.com',
  databaseURL: 'https://posts-loader.firebaseio.com',
  projectId: 'posts-loader',
  storageBucket: 'posts-loader.appspot.com',
  messagingSenderId: '372325603814',
  appId: '1:372325603814:web:6d6f8d9fd132312d7e5e27',
  measurementId: 'G-RJ1YRCHP0Y',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore();

export default firebase;
