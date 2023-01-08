import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBB9B7j78cSguHvTqxS8i4f8zlqNbSI1JM",
    authDomain: "otp-app-demo-d728f.firebaseapp.com",
    projectId: "otp-app-demo-d728f",
    storageBucket: "otp-app-demo-d728f.appspot.com",
    messagingSenderId: "244168306573",
    appId: "1:244168306573:web:9c74623b3024d93d96d7c4"
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);