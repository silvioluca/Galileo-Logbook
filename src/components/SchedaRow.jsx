import { useState } from 'react';
import { scaricaDocx, scaricaPdf, apriInOverleaf } from '../utils/exportScheda';
import { scaricaFileOriginale, caricaFileOriginale } from '../services/fileOriginaleService';
import { aggiungiFileOriginale } from '../services/schedeService';
import Modal from './Modal';

function etichettaModello(modello) {
  if (!modello) return '—';
  const nome = modello.toLowerCase();
  if (nome.includes('importat')) return 'Modello importato';
  if (nome.includes('classico')) return 'Modello Classico';
  if (nome.includes('compatto')) return 'Modello Compatto';
  if (nome.includes('artistico')) return 'Modello Artistico';
  return modello;
}

export default function SchedaRow({ scheda, templateContenuto, isOwner, onDelete, onFileAggiunto }) {
  const { titolo, modello, durataMinuti, numeroEsperienze, difficolta } = scheda;
  const fileOriginali = scheda.fileOriginali || (scheda.fileOriginale ? [scheda.fileOriginale] : []);
  const [azioneInCorso, setAzioneInCorso] = useState('');
  const [modaleAperta, setModaleAperta] = useState(false);
  const [caricamento, setCaricamento] = useState(false);

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

  const handleCaricaFormato = async (e) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;

    setCaricamento(true);
    try {
      const caricato = await caricaFileOriginale(file);
      await aggiungiFileOriginale(scheda.id, caricato);
      onFileAggiunto?.(caricato);
      setModaleAperta(false);
    } catch (err) {
      window.alert(err.message || 'Caricamento non riuscito: devi essere autenticato come proprietario.');
      console.warn(err);
    } finally {
      setCaricamento(false);
    }
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
        {fileOriginali.length > 0 ? (
          fileOriginali.map((f) => (
            <button
              key={f.fileId}
              type="button"
              className="scheda-export"
              disabled={azioneInCorso !== ''}
              onClick={() => eseguiAzione(f.fileId, () => scaricaFileOriginale(f))}
            >
              {azioneInCorso === f.fileId ? '…' : f.estensione.toUpperCase()}
            </button>
          ))
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
        {isOwner && (
          <button
            type="button"
            className="scheda-export"
            title="Carica un altro formato di questa scheda (es. la versione PDF convertita a parte)"
            onClick={() => setModaleAperta(true)}
          >
            + Formato
          </button>
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

      <Modal open={modaleAperta} onClose={() => setModaleAperta(false)} title="Carica un altro formato">
        <p>
          Aggiunge un file già pronto per questa scheda (es. hai importato il .docx e ora carichi
          anche il .pdf convertito a parte). Non viene rigenerato: resta il file che carichi.
        </p>
        <input type="file" accept=".tex,.txt,.pdf,.docx" onChange={handleCaricaFormato} disabled={caricamento} />
        {caricamento && <p className="form-notice">Caricamento in corso…</p>}
      </Modal>
    </tr>
  );
}
