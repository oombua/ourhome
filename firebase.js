

// Firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBW_xmybzINRGYMb9T8c1hNGrBapBdN2bA",
    authDomain: "ourhome-8e252.firebaseapp.com",
    projectId: "ourhome-8e252",
    storageBucket: "ourhome-8e252.firebasestorage.app",
    messagingSenderId: "806739799876",
    appId: "1:806739799876:web:1c8a34ce68819874847111",
    measurementId: "G-7FL17Z4JHP"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

window.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("comeInsideBtn");

  btn?.addEventListener("click", async (e) => {

    e.preventDefault(); // stop jumping to #floor1 immediately

    try {

      const result = await signInWithPopup(auth, provider);

      console.log("Logged in:", result.user.displayName);

      // after successful login
      window.location.hash = "floor1";

    } catch (error) {

      console.error(error);

    }

  });

});

console.log("Firebase Connected!");
const analytics = getAnalytics(app);
console.log("Firebase Connected!");
