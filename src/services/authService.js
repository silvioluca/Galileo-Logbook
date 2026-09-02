import {
  signInWithRedirect,
  reauthenticateWithRedirect,
  getRedirectResult,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
} from 'firebase/auth';
import { auth, googleProvider, firebaseReady } from './firebase';

export function subscribeAuth(callback) {
  if (!firebaseReady) {
    callback(null);
    return () => {};
  }
  return onAuthStateChanged(auth, callback);
}

// GitHub Pages (e altri host statici) impostano un header
// Cross-Origin-Opener-Policy che rompe signInWithPopup (Firebase non riesce
// più a rilevare la chiusura del popup, e l'access token non arriva mai).
// signInWithRedirect evita del tutto il popup: la pagina naviga verso Google
// e torna indietro; il risultato va recuperato con elaboraRisultatoRedirect.
//
// Se l'utente ha già una sessione Firebase persistente, un normale
// signInWithRedirect può risolversi con un accesso "silenzioso" (Google vede
// che il consenso è già stato dato) che NON produce un nuovo access token
// tramite getRedirectResult: torna null anche se il login "funziona". Per
// forzare un vero nuovo scambio OAuth (e quindi un token fresco) bisogna
// usare reauthenticateWithRedirect sull'utente già loggato.
export function signInGoogle() {
  if (!firebaseReady) throw new Error('Firebase non configurato: impossibile accedere.');
  if (auth.currentUser) {
    return reauthenticateWithRedirect(auth.currentUser, googleProvider);
  }
  return signInWithRedirect(auth, googleProvider);
}

// Da chiamare una volta all'avvio dell'app: se l'utente sta tornando da un
// signInWithRedirect, restituisce l'access token OAuth di Google (serve per
// l'API di Google Drive usata nelle conversioni DOCX<->PDF). Ha vita breve
// (~1 ora); quando scade va semplicemente richiesto un nuovo accesso.
export async function elaboraRisultatoRedirect() {
  if (!firebaseReady) return null;
  try {
    const risultato = await getRedirectResult(auth);
    console.log('[GALILEO-DEBUG] getRedirectResult ->', risultato ? 'presente' : 'null', risultato);
    if (!risultato) return null;
    const credential = GoogleAuthProvider.credentialFromResult(risultato);
    console.log('[GALILEO-DEBUG] credential ->', credential, 'accessToken presente:', Boolean(credential?.accessToken));
    return credential?.accessToken || null;
  } catch (err) {
    console.warn('[GALILEO-DEBUG] Errore nel recupero del risultato di accesso Google.', err);
    return null;
  }
}

export async function signOutUser() {
  if (!firebaseReady) return;
  await signOut(auth);
}
