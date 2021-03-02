import firebase from 'firebase/app'
import 'firebase/auth'

if (firebase.apps.length === 0) {
  firebase.initializeApp({
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    apiKey: 'MyExampleAppAPIKey123', // required
    authDomain: 'my-example-app.firebaseapp.com',
  });

  const auth = firebase.auth();
  auth.useEmulator("http://localhost:9099");
}

export default firebase;
