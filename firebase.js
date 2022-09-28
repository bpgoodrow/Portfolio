import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyBdyw70s8eGr8j1mtnCX9NwwqS9MbVoUF0",
  authDomain: "portfolio-e52c6.firebaseapp.com",
  projectId: "portfolio-e52c6",
  storageBucket: "portfolio-e52c6.appspot.com",
  messagingSenderId: "892487933110",
  appId: "1:892487933110:web:1dfe184e6662cb00481a17",
  measurementId: "G-2BWDKYCWPY"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);