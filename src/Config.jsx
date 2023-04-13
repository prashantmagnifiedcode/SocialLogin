import { initializeApp } from 'firebase/app';
import { getAuth,GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB4b92adxssQb9vwP-Yj_1QJT_RtFaBw3U",
  authDomain: "todolist-5b09d.firebaseapp.com",
  databaseURL: "https://todolist-5b09d-default-rtdb.firebaseio.com",
  projectId: "todolist-5b09d",
  storageBucket: "todolist-5b09d.appspot.com",
  messagingSenderId: "876434318665",
  appId: "1:876434318665:web:77420e7c45fe055e76a698"
};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const database = getFirestore();



