import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD_mg7rPCPRcytP0wTrE9tSBxSe5N4PJ5g",
  authDomain: "disney-plus-clone-7631b.firebaseapp.com",
  projectId: "disney-plus-clone-7631b",
  storageBucket: "disney-plus-clone-7631b.appspot.com",
  messagingSenderId: "808767791012",
  appId: "1:808767791012:web:68cecda2d4214905c5ab31",
  measurementId: "G-J3YWL8BL7M",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
