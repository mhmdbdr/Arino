// src/firebase.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBXus-F8z5cDsxSB8H8yT4EEzmtLdF6MjY",
  authDomain: "arino-clone.firebaseapp.com",
  databaseURL: "https://arino-clone-default-rtdb.firebaseio.com",
  projectId: "arino-clone",
  storageBucket: "arino-clone.appspot.com",
  messagingSenderId: "473651571329",
  appId: "1:473651571329:web:92e7ed9d978057b67bbb80",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
