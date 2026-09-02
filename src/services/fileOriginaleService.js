import { collection, doc, getDoc, getDocs, writeBatch } from 'firebase/firestore';
import { db, firebaseReady } from './firebase';

// Firebase Storage richiede il piano a pagamento (Blaze), non disponibile.
// Un singolo documento Firestore è limitato a 1 MiB, troppo poco per un file
// fino a 8 MB una volta codificato in base64 (~+33%). Soluzione: il file
// viene spezzato in più documenti (collezione "fileOriginali", ciascuno con
// una sottocollezione "chunk"), sotto il limite per documento, e riassemblato
// al momento del download. Resta tutto nel piano gratuito.
const LIMITE_TOTALE = 8 * 1024 * 1024; // 8 MB di file grezzo
const DIMENSIONE_CHUNK = 900000; // caratteri base64 per chunk (~900 KB)

function leggiComeDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function base64DaDataUrl(dataUrl) {
  return dataUrl.slice(dataUrl.indexOf(',') + 1);
}

export async function caricaFileOriginale(file) {
  if (file.size > LIMITE_TOTALE) {
    throw new Error(
      `Il file è troppo grande (${(file.size / 1024 / 1024).toFixed(1)} MB): il limite è ${LIMITE_TOTALE / 1024 / 1024} MB.`,
    );
  }
  if (!firebaseReady) {
    throw new Error('Firebase non configurato: impossibile conservare il file originale.');
  }

  const dataUrl = await leggiComeDataUrl(file);
  const base64 = base64DaDataUrl(dataUrl);
  const tipo = file.type || 'application/octet-stream';
  const estensione = file.name.split('.').pop()?.toLowerCase() || 'bin';

  const chunk = [];
  for (let i = 0; i < base64.length; i += DIMENSIONE_CHUNK) {
    chunk.push(base64.slice(i, i + DIMENSIONE_CHUNK));
  }

  const fileId = crypto.randomUUID();
  const batch = writeBatch(db);
  batch.set(doc(db, 'fileOriginali', fileId), {
    nomeFile: file.name,
    estensione,
    tipo,
    totaleChunk: chunk.length,
  });
  chunk.forEach((dati, indice) => {
    batch.set(doc(db, 'fileOriginali', fileId, 'chunk', String(indice)), { dati });
  });
  await batch.commit();

  return { fileId, nomeFile: file.name, estensione, tipo };
}

export async function otteniBlobFileOriginale({ fileId, tipo }) {
  const manifestSnap = await getDoc(doc(db, 'fileOriginali', fileId));
  if (!manifestSnap.exists()) throw new Error('File originale non trovato.');
  const { totaleChunk } = manifestSnap.data();

  const chunkSnap = await getDocs(collection(db, 'fileOriginali', fileId, 'chunk'));
  const perIndice = new Map();
  chunkSnap.forEach((d) => perIndice.set(Number(d.id), d.data().dati));

  let base64 = '';
  for (let i = 0; i < totaleChunk; i++) {
    base64 += perIndice.get(i) || '';
  }

  const risposta = await fetch(`data:${tipo};base64,${base64}`);
  return risposta.blob();
}

export async function scaricaFileOriginale(fileOriginale) {
  const blob = await otteniBlobFileOriginale(fileOriginale);
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = fileOriginale.nomeFile;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

export async function eliminaFileOriginale(fileId) {
  if (!firebaseReady || !fileId) return;
  try {
    const chunkSnap = await getDocs(collection(db, 'fileOriginali', fileId, 'chunk'));
    const batch = writeBatch(db);
    chunkSnap.forEach((d) => batch.delete(d.ref));
    batch.delete(doc(db, 'fileOriginali', fileId));
    await batch.commit();
  } catch (err) {
    console.warn('Impossibile eliminare il file originale.', err);
  }
}
