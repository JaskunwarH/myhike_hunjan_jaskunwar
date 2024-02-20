//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyB2I6eGtiIOv7-Ad6nOuCSiUT9x9rd4NlI",
    authDomain: "comp1800-202410.firebaseapp.com",
    projectId: "comp1800-202410",
    storageBucket: "comp1800-202410.appspot.com",
    messagingSenderId: "860569210316",
    appId: "1:860569210316:web:41c888a33466c9aa58e169"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
