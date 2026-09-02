import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from 'firebase/auth';
import { auth, googleProvider, firebaseReady } from './firebase';

export function subscribeAuth(callback) {
  if (!firebaseReady) {
    callback(null);
    return () => {};
  }
  return onAuthStateChanged(auth, callback);
}

// signInWithRedirect è stato provato ma è rotto per questo tipo di hosting:
// con l'authDomain di default (*.firebaseapp.com, diverso dal dominio
// dell'app) il round-trip dipende da storage di terze parti che Chrome
// 115+/Firefox 109+/Safari 16.1+ bloccano di default — getRedirectResult
// torna sempre null (bug noto, confermato dal team Firebase:
// https://github.com/firebase/firebase-js-sdk/issues/9366). La correzione
// vera richiederebbe Firebase Hosting su dominio proprio, non disponibile
// su GitHub Pages. Il popup resta la soluzione pratica raccomandata da
// Firebase stessa per questo caso.
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
