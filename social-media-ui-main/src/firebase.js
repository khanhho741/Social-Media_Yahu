import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyAJL_TvUARj5mCtzxkY48QkmRJSwu6KhBk',
    authDomain: 'leaf-5c2c4.firebaseapp.com',
    databaseURL: 'https://leaf-5c2c4-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'leaf-5c2c4',
    storageBucket: 'leaf-5c2c4.appspot.com',
    messagingSenderId: '488344241433',
    appId: '1:488344241433:web:8889a4c0a9d2bf667e7188',
    measurementId: 'G-RCM6XN8RCM',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
