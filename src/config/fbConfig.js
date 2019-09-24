import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCXiaaKeEoxxMCDoeiHToiRTnFad_KuAqg",
    authDomain: "nv-marioplan.firebaseapp.com",
    databaseURL: "https://nv-marioplan.firebaseio.com",
    projectId: "nv-marioplan",
    storageBucket: "",
    messagingSenderId: "823946612980",
    appId: "1:823946612980:web:8c57da3f320f3de21acea1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase;