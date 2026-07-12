import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCSUfc9FAfxhbOloYr3m2Vr60NbcBkpaes",
  authDomain: "zentra-ai-a9bdd.firebaseapp.com",
  projectId: "zentra-ai-a9bdd",
  storageBucket: "zentra-ai-a9bdd.firebasestorage.app",
  messagingSenderId: "381054970940",
  appId: "1:381054970940:web:b54dc23e2275d9fdc0e739"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
