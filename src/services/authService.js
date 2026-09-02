import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth, googleProvider, firebaseReady } from './firebase';

export function subscribeAuth(callback) {
  if (!firebaseReady) {
    callback(null);
    return () => {};
  }
  return onAuthStateChanged(auth, callback);
}

export async function signInGoogle() {
  if (!firebaseReady) throw new Error('Firebase non configurato: impossibile accedere.');
  await signInWithPopup(auth, googleProvider);
}

export async function signOutUser() {
  if (!firebaseReady) return;
  await signOut(auth);
}
