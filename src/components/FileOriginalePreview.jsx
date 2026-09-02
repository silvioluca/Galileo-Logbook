import { useEffect, useState } from 'react';
import mammoth from 'mammoth';
import { otteniBlobFileOriginale } from '../services/fileOriginaleService';

// Anteprima del file reale di una scheda importata: usata sia in creazione
// (blob locale, non ancora servito da Firestore) sia in modifica (fileOriginale
// già caricato, va recuperato dai chunk). Non rigenera nulla: mostra il file
// così com'è, coerente con la scelta di non alterare i file importati.
export default function FileOriginalePreview({ file, fileOriginale }) {
  const [stato, setStato] = useState('caricamento'); // 'caricamento' | 'pronto' | 'errore'
  const [contenuto, setContenuto] = useState(null); // { tipo: 'pdf'|'html'|'testo', url?, html?, testo? }

  useEffect(() => {
    let attivo = true;
    let urlDaRevocare = null;
    setStato('caricamento');
    setContenuto(null);

    async function carica() {
      try {
        const blob = file || (await otteniBlobFileOriginale(fileOriginale));
        const estensione = (fileOriginale?.estensione || file?.name.split('.').pop() || '').toLowerCase();

        if (estensione === 'pdf') {
          const url = URL.createObjectURL(blob);
          urlDaRevocare = url;
          if (attivo) setContenuto({ tipo: 'pdf', url });
        } else if (estensione === 'docx') {
          const buffer = await blob.arrayBuffer();
          const { value: html } = await mammoth.convertToHtml({ arrayBuffer: buffer });
          if (attivo) setContenuto({ tipo: 'html', html });
        } else {
          const testo = await blob.text();
          if (attivo) setContenuto({ tipo: 'testo', testo });
        }
        if (attivo) setStato('pronto');
      } catch (err) {
        console.warn('Anteprima file originale non disponibile.', err);
        if (attivo) setStato('errore');
      }
    }

    carica();

    return () => {
      attivo = false;
      if (urlDaRevocare) URL.revokeObjectURL(urlDaRevocare);
    };
  }, [file, fileOriginale]);

  if (stato === 'caricamento') return <p className="form-notice">Caricamento anteprima…</p>;
  if (stato === 'errore') return <p className="form-notice">Anteprima non disponibile per questo file.</p>;

  if (contenuto.tipo === 'pdf') {
    return <iframe className="anteprima-file-pdf" src={contenuto.url} title="Anteprima del file importato" />;
  }
  if (contenuto.tipo === 'html') {
    return (
      <div
        className="anteprima-file-docx"
        dangerouslySetInnerHTML={{ __html: contenuto.html }}
      />
    );
  }
  return <pre className="anteprima-file-testo">{contenuto.testo}</pre>;
}
