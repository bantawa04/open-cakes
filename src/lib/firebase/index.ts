// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCo292vfgsm0qPKiz5Bh6y-xvFZ9kh6h6g',
	authDomain: 'sveltkit-cff55.firebaseapp.com',
	projectId: 'sveltkit-cff55',
	storageBucket: 'sveltkit-cff55.appspot.com',
	messagingSenderId: '1080627794587',
	appId: '1:1080627794587:web:fd1eb0d55b116c9dbeec3e',
	measurementId: 'G-NJ2R9K4K6K'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
