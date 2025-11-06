import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDbnYTdFHG5L_YQJ-39bzvKVSkmk37gppg",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "mekade-a311d.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "mekade-a311d",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "mekade-a311d.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "990121061879",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:990121061879:web:d12c9d433e767d169f12f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Firebase Storage (opcional, en caso de querer usarlo también)
export const storage = getStorage(app);

export default app;

