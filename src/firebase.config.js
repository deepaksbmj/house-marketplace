import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAh9S23PyGi8BzjwxEqLp26i3hun4q9JrM",
  authDomain: "house-marketplace-app-6d3f4.firebaseapp.com",
  projectId: "house-marketplace-app-6d3f4",
  storageBucket: "house-marketplace-app-6d3f4.appspot.com",
  messagingSenderId: "975664304649",
  appId: "1:975664304649:web:0ec24e9051ad60c43e5ed8"
};

initializeApp(firebaseConfig);

export const db = getFirestore();