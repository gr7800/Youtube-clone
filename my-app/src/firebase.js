import firebase from 'firebase/compat/app'

import 'firebase/compat/auth'

const firebaseConfig = {
   apiKey: "AIzaSyC8se5sL1CNeKUjpr7Nm3qk9Zn62yZJQCo",
   authDomain: "auth-yt-14859.firebaseapp.com",
   projectId: "auth-yt-14859",
   storageBucket: "auth-yt-14859.appspot.com",
   messagingSenderId: "791643109474",
   appId: "1:791643109474:web:edd68fe23a47e8ae82393b",
   measurementId: "G-9FS5EZNLGM"
}

firebase.initializeApp(firebaseConfig)

export default firebase.auth()