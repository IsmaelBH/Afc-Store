// src/firebase/firebase.ts

import { initializeApp } from 'firebase/app';
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from 'firebase/auth/react-native';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
