// Conversione DOCX<->PDF tramite Google Drive/Docs: si carica il file
// chiedendo a Drive di importarlo come Google Doc (stessa conversione che
// avviene aprendo un .docx con "Apri con Google Documenti"), poi si esporta
// il Doc nel formato desiderato. Gratis (quota standard dell'account Google
// dell'utente, nessuna chiave da esporre), usa l'access token OAuth ottenuto
// al login (scope drive.file — solo i file creati da questa app).
const DRIVE_UPLOAD_URL = 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart';
const DRIVE_FILES_URL = 'https://www.googleapis.com/drive/v3/files';
const MIME_GOOGLE_DOC = 'application/vnd.google-apps.document';

function erroreAutorizzazione(risposta) {
  return risposta.status === 401 || risposta.status === 403;
}

async function caricaEImporta(accessToken, file) {
  const boundary = 'galileo_logbook_boundary';
  const metadata = { name: file.name, mimeType: MIME_GOOGLE_DOC };

  const encoder = new TextEncoder();
  const parti = [
    encoder.encode(`--${boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n${JSON.stringify(metadata)}\r\n`),
    encoder.encode(`--${boundary}\r\nContent-Type: ${file.type || 'application/octet-stream'}\r\n\r\n`),
    await file.arrayBuffer(),
    encoder.encode(`\r\n--${boundary}--`),
  ];

  const risposta = await fetch(DRIVE_UPLOAD_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': `multipart/related; boundary=${boundary}`,
    },
    body: new Blob(parti),
  });

  if (!risposta.ok) {
    if (erroreAutorizzazione(risposta)) {
      throw new Error('Autorizzazione Google Drive scaduta o mancante: accedi di nuovo con Google e riprova.');
    }
    throw new Error(`Caricamento su Google Drive fallito (${risposta.status}).`);
  }
  return risposta.json();
}

async function esporta(accessToken, fileId, mimeTypeExport) {
  const risposta = await fetch(
    `${DRIVE_FILES_URL}/${fileId}/export?mimeType=${encodeURIComponent(mimeTypeExport)}`,
    { headers: { Authorization: `Bearer ${accessToken}` } },
  );
  if (!risposta.ok) throw new Error(`Esportazione da Google Drive fallita (${risposta.status}).`);
  return risposta.blob();
}

function elimina(accessToken, fileId) {
  fetch(`${DRIVE_FILES_URL}/${fileId}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${accessToken}` },
  }).catch(() => {});
}

export async function convertiViaGoogleDrive(accessToken, file, mimeTypeExport) {
  if (!accessToken) {
    throw new Error('Accedi con Google per usare la conversione (serve l\'autorizzazione a Drive).');
  }
  const caricato = await caricaEImporta(accessToken, file);
  try {
    return await esporta(accessToken, caricato.id, mimeTypeExport);
  } finally {
    elimina(accessToken, caricato.id);
  }
}

export const MIME_PDF = 'application/pdf';
export const MIME_DOCX = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
