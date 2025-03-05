// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Reemplaza con tus propias credenciales de Firebase
// Puedes obtener esta información desde la consola de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAlHIK3ZRhfl6Zs97kdhWwIkpy65e-CU2s",
  authDomain: "suelto-64c32.firebaseapp.com",
  projectId: "suelto-64c32",
  storageBucket: "suelto-64c32.firebasestorage.app",
  messagingSenderId: "432835517745",
  appId: "1:432835517745:web:c7df1e3b8ecfc9fbbca410",
  measurementId: "G-250YSV6T4P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { app, analytics, db, storage, auth }; 0