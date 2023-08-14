import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { FB_PORJECT_ID, FB_CLIENT_MAIL, FB_PRIVATE_KEY } from '$env/static/private';
import pkg from 'firebase-admin';

try {
	pkg.initializeApp({
		credential: pkg.credential.cert({
			projectId: FB_PORJECT_ID,
			clientEmail: FB_CLIENT_MAIL,
			privateKey: FB_PRIVATE_KEY
		})
	});
} catch (e: any) {
	if (!/already exists/u.test(e.message)) {
		console.error('Firebase admin error:', e.stack);
	}
}
export const adminDB = getFirestore();
export const adminAuth = getAuth();
