import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAUQCea-A8JUBsgBJVYo9qbOTVJlPHH1YM",
    authDomain: "discord-clone-af799.firebaseapp.com",
    databaseURL: "https://discord-clone-af799.firebaseio.com",
    projectId: "discord-clone-af799",
    storageBucket: "discord-clone-af799.appspot.com",
    messagingSenderId: "70084728444",
    appId: "1:70084728444:web:d878add1639c2f64009bf9",
    measurementId: "G-H2JZL3JMGZ"
  };

  //For connecting with firebase and app
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  //For db
  const db = firebaseApp.firestore();
  //For authentication
  const auth = firebase.auth();
  //For google  authentication
  const provider = new firebase.auth.GoogleAuthProvider();

  export{auth, provider};
  export default db;