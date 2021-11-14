import firebase from 'firebase/app';
import 'firebase/auth';
import config from 'src/creds/firebase-sa.json';

const firebaseConfig = {
  apiKey: config.NODE_API_KEY,
  authDomain: config.NODE_AUTH_DOMAIN,
  projectId: config.NODE_PROJECT_ID,
  storageBucket: config.NODE_STORAGE_BUCKET,
  messagingSenderId: config.NODE_MESSAGING_SENDER_ID,
  appId: config.NODE_APP_ID,
  measurementId: config.NODE_MEASUREMENT_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
