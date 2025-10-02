// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCGYNL2Tpl8tFAOUtWEY4HjQqfVdjhxXUE",
  authDomain: "rosewood-3bcb6.firebaseapp.com",
  databaseURL: "https://rosewood-3bcb6-default-rtdb.firebaseio.com",
  projectId: "rosewood-3bcb6",
  storageBucket: "rosewood-3bcb6.firebasestorage.app",
  messagingSenderId: "451113840029",
  appId: "1:451113840029:web:787668868e0c490407d374",
  measurementId: "G-TLE9093569",
};

const app = initializeApp(firebaseConfig);

// ✅ Auth & DB
export const auth = getAuth(app);
export const database = getDatabase(app);

// ✅ Sign in anonymously at startup (so `.read` rules work)
signInAnonymously(auth).catch((error) => {
  console.error("Anonymous sign-in failed:", error.code, error.message);
});
