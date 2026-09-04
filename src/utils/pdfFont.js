// jsPDF's font di base (times/helvetica/courier) coprono solo l'ASCII esteso
// (WinAnsi) e non riescono a disegnare lettere greche o simboli matematici
// come Δ, α, ± o √: qualunque carattere del genere sparisce semplicemente dal
// PDF. Per risolverlo carichiamo DejaVu Sans, un font libero con una delle
// coperture Unicode più ampie disponibili (latino, greco, simboli
// matematici, frecce), e lo registriamo in jsPDF al volo, solo quando serve
// generare un PDF (i file sono ~2,7 MB in totale, non vogliamo appesantire
// il caricamento iniziale del sito).

const FILE_PER_STILE = {
  normal: 'DejaVuSans.ttf',
  bold: 'DejaVuSans-Bold.ttf',
  italic: 'DejaVuSans-Oblique.ttf',
  bolditalic: 'DejaVuSans-BoldOblique.ttf',
};

const cacheBase64 = new Map();

function arrayBufferABase64(buffer) {
  const bytes = new Uint8Array(buffer);
  const dimensioneBlocco = 0x8000;
  let binaria = '';
  for (let i = 0; i < bytes.length; i += dimensioneBlocco) {
    binaria += String.fromCharCode(...bytes.subarray(i, i + dimensioneBlocco));
  }
  return btoa(binaria);
}

async function caricaBase64(nomeFile) {
  if (cacheBase64.has(nomeFile)) return cacheBase64.get(nomeFile);
  const risposta = await fetch(`${import.meta.env.BASE_URL}fonts/${nomeFile}`);
  if (!risposta.ok) throw new Error(`Impossibile caricare il font ${nomeFile}`);
  const buffer = await risposta.arrayBuffer();
  const base64 = arrayBufferABase64(buffer);
  cacheBase64.set(nomeFile, base64);
  return base64;
}

// Registra il font "DejaVu" (con le quattro varianti normal/bold/italic/
// bolditalic) sull'istanza jsPDF passata, pronto per essere usato con
// doc.setFont('DejaVu', <stile>).
export async function registraFontUnicode(doc) {
  await Promise.all(
    Object.entries(FILE_PER_STILE).map(async ([stile, nomeFile]) => {
      const base64 = await caricaBase64(nomeFile);
      doc.addFileToVFS(nomeFile, base64);
      doc.addFont(nomeFile, 'DejaVu', stile);
    }),
  );
}
