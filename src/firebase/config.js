import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDbnYTdFHG5L_YQJ-39bzvKVSkmk37gppg",
  authDomain: "mekade-a311d.firebaseapp.com",
  projectId: "mekade-a311d",
  storageBucket: "mekade-a311d.firebasestorage.app",
  messagingSenderId: "990121061879",
  appId: "1:990121061879:web:d12c9d433e767d169f12f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Firebase Storage (opcional, en caso de querer usarlo también)
export const storage = getStorage(app);

export default app;

