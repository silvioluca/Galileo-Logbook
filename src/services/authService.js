import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from 'firebase/auth';
import { auth, googleProvider, firebaseReady } from './firebase';

export function subscribeAuth(callback) {
  if (!firebaseReady) {
    callback(null);
    return () => {};
  }
  return onAuthStateChanged(auth, callback);
}

// Restituisce anche l'access token OAuth di Google (serve per chiamare
// l'API di Google Drive per le conversioni DOCX<->PDF). Ha vita breve
// (~1 ora) e la SDK di Firebase non lo rinnova da sola: quando scade va
// semplicemente richiesto un nuovo accesso (signInGoogle di nuovo).
export async function signInGoogle() {
  if (!firebaseReady) throw new Error('Firebase non configurato: impossibile accedere.');
  const risultato = await signInWithPopup(auth, googleProvider);
  const credential = GoogleAuthProvider.credentialFromResult(risultato);
  return credential?.accessToken || null;
}

export async function signOutUser() {
  if (!firebaseReady) return;
  await signOut(auth);
}
