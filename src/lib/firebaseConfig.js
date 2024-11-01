// Import required functions from Firebase SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS-JmNfVthNcvZpqGR9tGtwjJfUnJpcPA",
  authDomain: "linkedin-clone-2abbc.firebaseapp.com",
  projectId: "linkedin-clone-2abbc",
  storageBucket: "linkedin-clone-2abbc.appspot.com",
  messagingSenderId: "731527746910",
  appId: "1:731527746910:web:78dc2e87e88c69f00c6bcf",
  measurementId: "G-C80PFYWT0Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

