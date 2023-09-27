import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "guHvTqxS8i4f8zlqNbSI1",
    authDomain: "emo-d728f.firebaseapp.com",
    projectId: "-demo-d72",
    storageBucket: "8f.appspot.com",
    messagingSenderId: "3065",
    appId: "06573:web:9024d93dd74"
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
