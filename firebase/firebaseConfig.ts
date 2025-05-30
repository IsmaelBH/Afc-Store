/* Firebase config */// src/firebase/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDUOcP7HCUVOmRxED64MHLzMq8di7lCdys",
    authDomain: "afc-store-6bfef.firebaseapp.com",
    databaseURL: "https://afc-store-6bfef-default-rtdb.firebaseio.com",
    projectId: "afc-store-6bfef",
    storageBucket: "afc-store-6bfef.appspot.com",
    messagingSenderId: "139179717888",
    appId: "1:139179717888:web:dd699072cab7ece26b2fe5"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const realtimeDb = getDatabase(app);

export { db, realtimeDb };