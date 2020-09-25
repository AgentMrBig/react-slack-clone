import firebase from 'firebase/app';
import "firebase/auth"
import "firebase/database"
import "firebase/storage"

var firebaseConfig = {
    apiKey: "AIzaSyCvxtYmQBHOlJCIYvJmcrCmVDrJCfa3DSA",
    authDomain: "react-slack-clone-bf953.firebaseapp.com",
    databaseURL: "https://react-slack-clone-bf953.firebaseio.com",
    projectId: "react-slack-clone-bf953",
    storageBucket: "react-slack-clone-bf953.appspot.com  ",
    messagingSenderId: "730873077812",
    appId: "1:730873077812:web:33cd8529559f97d7f2aa61",
    measurementId: "G-Q5K605WHYP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;