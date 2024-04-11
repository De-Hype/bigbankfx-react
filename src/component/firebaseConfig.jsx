
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAvSyftKTu4YXj7W3OaSLGLerKLvdhyZbg",
  authDomain: "bigbankfx-85424.firebaseapp.com",
  projectId: "bigbankfx-85424",
  storageBucket: "bigbankfx-85424.appspot.com",
  messagingSenderId: "277140046013",
  appId: "1:277140046013:web:d7f99ca9d5ce7c998f37d4",
  measurementId: "G-29X0DT2KM5"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getFirestore(app);