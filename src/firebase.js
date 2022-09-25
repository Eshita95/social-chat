// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDF-DawWZQsl4IbN6ihKRfWhj9Qy2XavgU",
  authDomain: "social-chat-f6039.firebaseapp.com",
  projectId: "social-chat-f6039",
  storageBucket: "social-chat-f6039.appspot.com",
  messagingSenderId: "762995889202",
  appId: "1:762995889202:web:32c1b89484ed72f233d82b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();