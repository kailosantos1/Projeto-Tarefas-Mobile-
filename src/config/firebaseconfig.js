import firebase from "firebase"
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDIyP4aorM5cL2ci5AyVOg4PHWGISWV21M",
  authDomain: "task-4be94.firebaseapp.com",
  projectId: "task-4be94",
  storageBucket: "task-4be94.appspot.com",
  messagingSenderId: "656491825684",
  appId: "1:656491825684:web:703d8f28fc9200dda03501"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();
export default database;