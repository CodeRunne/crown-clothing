import { initializeApp, getApp } from 'firebase/app';
import { getFirestore } "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const config = {
    apiKey: "AIzaSyAMX-gcUIullNgAJUZK17lCU0XHfMKbxx0",
    authDomain: "crwn-clothing-6c856.firebaseapp.com",
    projectId: "crwn-clothing-6c856",
    storageBucket: "crwn-clothing-6c856.appspot.com",
    messagingSenderId: "268206000647",
    appId: "1:268206000647:web:45dd0273c635d2b2ad38a2"
};

initializeApp(config)

export const auth = getAuth();
export const firestore = getFirestore();
console.log(getApp(), getApp().name)

const provider = new GoogleAuthProvider(); 
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
provider.setCustomParameters({
    'login_hint': 'user@example.com'
});