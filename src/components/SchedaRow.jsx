import { useState } from 'react';
import { scaricaDocx, scaricaPdf, apriInOverleaf } from '../utils/exportScheda';
import { scaricaFileOriginale } from '../services/fileOriginaleService';
import { convertiOriginaleInPdf, convertiOriginaleInDocx } from '../utils/convertiOriginale';
import { useAuth } from '../context/AuthContext';

function etichettaModello(modello) {
  if (!modello) return '—';
  const nome = modello.toLowerCase();
  if (nome.includes('importat')) return 'Modello importato';
  if (nome.includes('classico')) return 'Modello Classico';
  if (nome.includes('compatto')) return 'Modello Compatto';
  if (nome.includes('artistico')) return 'Modello Artistico';
  return modello;
}

export default function SchedaRow({ scheda, templateContenuto, onDelete }) {
  const { titolo, modello, durataMinuti, numeroEsperienze, difficolta, fileOriginale } = scheda;
  const { googleAccessToken, signIn } = useAuth();
  const [azioneInCorso, setAzioneInCorso] = useState('');

  const eseguiAzione = async (nome, azione) => {
    setAzioneInCorso(nome);
    try {
      await azione();
    } catch (err) {
      window.alert(err.message || 'Operazione non riuscita.');
      console.warn(err);
    } finally {
      setAzioneInCorso('');
    }
  };

  // Le conversioni DOCX<->PDF passano da Google Drive: servono l'accesso e il
  // consenso Google di chi clicca (non necessariamente il proprietario del
  // catalogo). L'accesso avviene per redirect (i popup non funzionano su
  // GitHub Pages), quindi non possiamo "accedi e continua" nello stesso
  // click: se manca il token, mandiamo l'utente ad accedere e si riprova
  // dopo, quando sarà tornato sulla pagina.
  const eseguiConversione = (nome, funzioneConversione) => {
    if (!googleAccessToken) {
      window.alert('Ti sto portando ad accedere con Google: al ritorno premi di nuovo il pulsante per convertire.');
      signIn();
      return;
    }
    eseguiAzione(nome, () => funzioneConversione(googleAccessToken));
  };

  return (
    <tr className="scheda-row">
      <td className="col-titolo">{titolo}</td>
      <td className="col-modello">{etichettaModello(modello)}</td>
      <td className="col-numero-esperienze">
        {numeroEsperienze} {numeroEsperienze === 1 ? 'esperienza' : 'esperienze'}
      </td>
      <td className="col-durata">{durataMinuti} min</td>
      <td className="col-difficolta">
        <span className={`difficolta difficolta-${(difficolta || '').toLowerCase()}`}>
          {difficolta || '—'}
        </span>
      </td>
      <td className="scheda-azioni">
        {fileOriginale ? (
          <>
            <button
              type="button"
              className="scheda-export"
              disabled={azioneInCorso !== ''}
              onClick={() => eseguiAzione('originale', () => scaricaFileOriginale(fileOriginale))}
            >
              {azioneInCorso === 'originale' ? '…' : fileOriginale.estensione.toUpperCase()}
            </button>
            {fileOriginale.estensione === 'docx' && (
              <button
                type="button"
                className="scheda-export"
                disabled={azioneInCorso !== ''}
                title="Converti in PDF (via Google Drive, richiede di accedere con Google)"
                onClick={() => eseguiConversione('pdf', (token) => convertiOriginaleInPdf(fileOriginale, token))}
              >
                {azioneInCorso === 'pdf' ? 'Converto…' : 'PDF'}
              </button>
            )}
            {fileOriginale.estensione === 'pdf' && (
              <button
                type="button"
                className="scheda-export"
                disabled={azioneInCorso !== ''}
                title="Converti in DOCX (via Google Drive, richiede di accedere con Google)"
                onClick={() => eseguiConversione('docx', (token) => convertiOriginaleInDocx(fileOriginale, token))}
              >
                {azioneInCorso === 'docx' ? 'Converto…' : 'DOCX'}
              </button>
            )}
          </>
        ) : (
          <>
            <button type="button" className="scheda-export" onClick={() => scaricaDocx(scheda)}>
              DOCX
            </button>
            <button type="button" className="scheda-export" onClick={() => scaricaPdf(scheda)}>
              PDF
            </button>
            <button
              type="button"
              className="scheda-export"
              onClick={() => apriInOverleaf(scheda, templateContenuto)}
            >
              LaTeX
            </button>
          </>
        )}
        {onDelete && (
          <button
            type="button"
            className="scheda-delete"
            title="Elimina scheda"
            aria-label="Elimina scheda"
            onClick={() => onDelete(scheda.id)}
          >
            ✕
          </button>
        )}
      </td>
    </tr>
  );
}
