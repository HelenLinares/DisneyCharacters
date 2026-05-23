// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrc-r4HJLMppgNTP6wjJ_VlOZhKWS2KV4",
  authDomain: "disneyapp-6b43e.firebaseapp.com",
  projectId: "disneyapp-6b43e",
  storageBucket: "disneyapp-6b43e.firebasestorage.app",
  messagingSenderId: "571234922483",
  appId: "1:571234922483:web:ee42156c66e029461eec86",
  measurementId: "G-8WVV0NQMP3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);