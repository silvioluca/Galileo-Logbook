import { collection, getDocs, addDoc, deleteDoc, doc, setDoc } from 'firebase/firestore';
import { db, firebaseReady } from './firebase';

const COLLECTION = 'templates';
const LOCAL_KEY = 'galileo-logbook-templates';

function loadLocal() {
  try {
    const raw = localStorage.getItem(LOCAL_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveLocal(templates) {
  try {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(templates));
  } catch {
    // storage non disponibile: la sessione corrente resta comunque funzionante
  }
}

// Lettura pubblica (Firestore rules: allow read: if true).
export async function getTemplates() {
  if (firebaseReady) {
    try {
      const snap = await getDocs(collection(db, COLLECTION));
      return snap.docs.map((docSnap) => ({ id: docSnap.id, ...docSnap.data() }));
    } catch (err) {
      console.warn('Firestore non raggiungibile, uso i template locali.', err);
    }
  }
  return loadLocal();
}

// Scrittura riservata al proprietario (Firestore rules): un errore di permessi
// deve arrivare a chi chiama, non essere nascosto scrivendo in locale.
export async function addTemplate(template) {
  if (firebaseReady) {
    const ref = await addDoc(collection(db, COLLECTION), template);
    return { id: ref.id, ...template };
  }
  const templates = loadLocal();
  const nuovo = { ...template, id: crypto.randomUUID() };
  saveLocal([nuovo, ...templates]);
  return nuovo;
}

// Usato per i template predefiniti (id fisso): a differenza di addTemplate,
// scrivere due volte con lo stesso id sovrascrive invece di duplicare. Rende
// il seeding all'avvio idempotente anche in caso di doppio mount/race.
export async function setTemplateById(id, template) {
  if (firebaseReady) {
    await setDoc(doc(db, COLLECTION, id), template);
    return { id, ...template };
  }
  const templates = loadLocal().filter((t) => t.id !== id);
  const nuovo = { ...template, id };
  saveLocal([nuovo, ...templates]);
  return nuovo;
}

export async function deleteTemplate(id) {
  if (firebaseReady) {
    await deleteDoc(doc(db, COLLECTION, id));
    return;
  }
  saveLocal(loadLocal().filter((t) => t.id !== id));
}
