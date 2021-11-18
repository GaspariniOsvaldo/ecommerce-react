import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBKoF5RBH5YnnZ9Vu8pge1Lak817V2BLFk",
    authDomain: "react-ecommerce-4af1f.firebaseapp.com",
    projectId: "react-ecommerce-4af1f",
    storageBucket: "react-ecommerce-4af1f.appspot.com",
    messagingSenderId: "570954344373",
    appId: "1:570954344373:web:8af83fec527573d9abdbfc",
    measurementId: "G-CJ015BWLQH"
};

const app = initializeApp(firebaseConfig);

export const getFirebase = () => app;

export { getFirestore };



