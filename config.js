import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBhj3IPjK_erIylSmRGdq7morY_mmwhP8Y",
    authDomain: "schoolattendance-7bff0.firebaseapp.com",
    databaseURL: "https://schoolattendance-7bff0-default-rtdb.firebaseio.com",
    projectId: "schoolattendance-7bff0",
    storageBucket: "schoolattendance-7bff0.appspot.com",
    messagingSenderId: "437951550038",
    appId: "1:437951550038:web:f3194f3a254e9d965021f7"
  };
 firebase.initializeApp(firebaseConfig);
  export default firebase.database()
 

  