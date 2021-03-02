import './firebase'
import admin from 'firebase-admin'

let app;

if (!process.browser) {
  if (admin.apps.length === 0) {
    app = admin.initializeApp({
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    })
  } else {
    app = admin.apps[0];
  }
}

export default app;
