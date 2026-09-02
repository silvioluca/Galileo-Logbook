import { otteniBlobFileOriginale } from '../services/fileOriginaleService';
import { convertiViaGoogleDrive, MIME_PDF, MIME_DOCX } from '../services/googleDriveConvert';

function nomeConvertito(nomeOriginale, nuovaEstensione) {
  const base = nomeOriginale.replace(/\.[^.]+$/, '');
  return `${base}.${nuovaEstensione}`;
}

function scaricaBlob(blob, nome) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = nome;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

// Conversione vera tramite Google Drive/Docs (vedi googleDriveConvert.js):
// preserva font e impaginazione del documento originale molto meglio di un
// rendering client-side fatto in casa. Non è una scheda ricreata da zero.
export async function convertiOriginaleInPdf(fileOriginale, accessToken) {
  const blob = await otteniBlobFileOriginale(fileOriginale);
  const file = new File([blob], fileOriginale.nomeFile, { type: fileOriginale.tipo });
  const pdfBlob = await convertiViaGoogleDrive(accessToken, file, MIME_PDF);
  scaricaBlob(pdfBlob, nomeConvertito(fileOriginale.nomeFile, 'pdf'));
}

// Conversione vera tramite Google Drive/Docs (OCR sul PDF, come "Apri con
// Google Documenti"): a differenza dell'estrazione testo grezza, prova a
// mantenere paragrafi/titoli, non solo il contenuto.
export async function convertiOriginaleInDocx(fileOriginale, accessToken) {
  const blob = await otteniBlobFileOriginale(fileOriginale);
  const file = new File([blob], fileOriginale.nomeFile, { type: fileOriginale.tipo });
  const docxBlob = await convertiViaGoogleDrive(accessToken, file, MIME_DOCX);
  scaricaBlob(docxBlob, nomeConvertito(fileOriginale.nomeFile, 'docx'));
}
