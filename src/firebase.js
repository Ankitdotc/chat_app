import firebase from 'firebase'
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyCPqWPInDyv-_zZzW618rvUrmoqPph8CXo",
  authDomain: "chat-app-ed6a2.firebaseapp.com",
  projectId: "chat-app-ed6a2",
  storageBucket: "chat-app-ed6a2.appspot.com",
  messagingSenderId: "490606341293",
  appId: "1:490606341293:web:d453560aa134711eb46a24"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider }
  export default db

