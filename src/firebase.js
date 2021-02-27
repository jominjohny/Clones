import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB3Cno2-eqFTUyQAYw5x_ug6T7m-684YUw",
  authDomain: "clone-4f5f7.firebaseapp.com",
  databaseURL: "https://clone-4f5f7.firebaseio.com",
  projectId: "clone-4f5f7",
  storageBucket: "clone-4f5f7.appspot.com",
  messagingSenderId: "71380470585",
  appId: "1:71380470585:web:9ecb4bd1e8dafd28d936e8",
  measurementId: "G-HP3BC1DSL5"
});

// const db = firebaseApp.firestore();
const auth =firebase.auth();

// export {db , auth};
export {auth};