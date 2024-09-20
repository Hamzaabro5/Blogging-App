import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBM_tGOvMbtUmTScVJVuHatzeeMDmRJQA4",
  authDomain: "blogging-app-61c5a.firebaseapp.com",
  projectId: "blogging-app-61c5a",
  storageBucket: "blogging-app-61c5a.appspot.com",
  messagingSenderId: "1069471657485",
  appId: "1:1069471657485:web:a9cf6df8401c3724036f44"
};

const app = initializeApp(firebaseConfig);
export default app