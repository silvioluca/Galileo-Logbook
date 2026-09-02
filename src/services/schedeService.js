import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  serverTimestamp,
} from 'firebase/firestore';
import { db, firebaseReady } from './firebase';
import { mockSchede } from '../data/mockSchede';

const COLLECTION = 'schede';
const LOCAL_KEY = 'galileo-logbook-schede';

function loadLocal() {
  try {
    const raw = localStorage.getItem(LOCAL_KEY);
    return raw ? JSON.parse(raw) : mockSchede;
  } catch {
    return mockSchede;
  }
}

function saveLocal(schede) {
  try {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(schede));
  } catch {
    // storage non disponibile: la sessione corrente resta comunque funzionante
  }
}

// Le letture sono pubbliche (Firestore rules: allow read: if true), quindi in
// caso di errore di rete è ragionevole ripiegare sui dati locali/demo.
export async function getSchede() {
  if (firebaseReady) {
    try {
      const snap = await getDocs(collection(db, COLLECTION));
      return snap.docs.map((docSnap) => ({ id: docSnap.id, ...docSnap.data() }));
    } catch (err) {
      console.warn('Firestore non raggiungibile, uso i dati locali.', err);
    }
  }
  return loadLocal();
}

// Le scritture sono riservate al proprietario (Firestore rules). Se Firestore
// è configurato, un errore (es. permessi insufficienti perché non si è
// autenticati) deve arrivare a chi chiama, non essere nascosto salvando in
// locale come se fosse riuscito.
export async function addScheda(scheda) {
  if (firebaseReady) {
    const ref = await addDoc(collection(db, COLLECTION), {
      ...scheda,
      createdAt: serverTimestamp(),
    });
    return { id: ref.id, ...scheda };
  }
  const schede = loadLocal();
  const nuova = { ...scheda, id: crypto.randomUUID(), createdAt: new Date().toISOString() };
  saveLocal([nuova, ...schede]);
  return nuova;
}

export async function deleteScheda(id) {
  if (firebaseReady) {
    await deleteDoc(doc(db, COLLECTION, id));
    return;
  }
  saveLocal(loadLocal().filter((s) => s.id !== id));
}
