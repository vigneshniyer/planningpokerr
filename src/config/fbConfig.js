import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9z9psOy-wQC6zDBoG9-PLbYqCo93EIt8",
  authDomain: "planningpokerr.firebaseapp.com",
  databaseURL: "https://planningpokerr.firebaseio.com",
  projectId: "planningpokerr",
  storageBucket: "planningpokerr.appspot.com",
  messagingSenderId: "88369990183",
  appId: "1:88369990183:web:ffcaa5267cbe291958dc02",
  measurementId: "G-VFPQFMNBNP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;