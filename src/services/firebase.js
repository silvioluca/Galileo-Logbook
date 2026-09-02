import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Configurazione Firebase: valorizzare tramite variabili d'ambiente (vedi .env.example).
// Finché VITE_FIREBASE_API_KEY e VITE_FIREBASE_PROJECT_ID non sono impostate,
// l'app funziona con i dati locali (vedi schedeService.js) senza richiedere Firestore.
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

export const firebaseReady = Boolean(firebaseConfig.apiKey && firebaseConfig.projectId);

const app = firebaseReady ? initializeApp(firebaseConfig) : null;

export const db = firebaseReady ? getFirestore(app) : null;
export const auth = firebaseReady ? getAuth(app) : null;
export const googleProvider = new GoogleAuthProvider();
// Scope aggiuntivo per convertire DOCX<->PDF tramite Google Drive/Docs
// (import con conversione automatica + export), gratis e senza chiavi da
// esporre: usa il consenso OAuth dell'utente già loggato con Google.
// "drive.file" è il permesso minimo: riguarda solo i file creati dall'app.
googleProvider.addScope('https://www.googleapis.com/auth/drive.file');
