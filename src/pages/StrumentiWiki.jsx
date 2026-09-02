import { useMemo, useState } from 'react';
import { BRANCHE } from '../data/branche';
import { STRUMENTI_WIKI } from '../data/strumentiWiki';
import Modal from '../components/Modal';

function raggruppaPerBranca(strumenti) {
  const perBranca = new Map();
  for (const branca of BRANCHE) perBranca.set(branca, []);
  for (const s of strumenti) {
    if (!perBranca.has(s.branca)) perBranca.set(s.branca, []);
    perBranca.get(s.branca).push(s);
  }
  return perBranca;
}

export default function StrumentiWiki() {
  const [ricerca, setRicerca] = useState('');
  const [branca, setBranca] = useState('');
  const [selezionato, setSelezionato] = useState(null);

  const filtrati = useMemo(() => {
    const testo = ricerca.trim().toLowerCase();
    return STRUMENTI_WIKI.filter((s) => {
      if (branca && s.branca !== branca) return false;
      if (testo && !s.nome.toLowerCase().includes(testo)) return false;
      return true;
    });
  }, [ricerca, branca]);

  const gruppi = useMemo(() => raggruppaPerBranca(filtrati), [filtrati]);

  return (
    <div className="page">
      <div className="container">
        <h1>Strumenti di Misura</h1>
        <p>Una wiki degli strumenti di laboratorio più usati in fisica: cosa misurano e come funzionano.</p>

        <div className="schede-toolbar">
          <div className="filtro-field">
            <label htmlFor="strumento-ricerca">Cerca</label>
            <input
              id="strumento-ricerca"
              type="text"
              placeholder="es. Calibro"
              value={ricerca}
              onChange={(e) => setRicerca(e.target.value)}
            />
          </div>
          <div className="filtro-field">
            <label htmlFor="strumento-branca">Branca</label>
            <select id="strumento-branca" value={branca} onChange={(e) => setBranca(e.target.value)}>
              <option value="">Tutte le branche</option>
              {BRANCHE.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>
        </div>

        {filtrati.length === 0 ? (
          <p className="empty-state">Nessuno strumento corrisponde alla ricerca.</p>
        ) : (
          [...gruppi.entries()]
            .filter(([, elenco]) => elenco.length > 0)
            .map(([nomeBranca, elenco]) => (
              <section key={nomeBranca} className="strumenti-sezione">
                <h2>{nomeBranca}</h2>
                <div className="strumenti-grid">
                  {elenco.map((s) => (
                    <article
                      className="etched-frame strumento-card"
                      key={s.nome}
                      role="button"
                      tabIndex={0}
                      onClick={() => setSelezionato(s)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') setSelezionato(s);
                      }}
                    >
                      <h3>{s.nome}</h3>
                      <p className="strumento-meta">
                        {s.grandezza} · {s.unita}
                      </p>
                    </article>
                  ))}
                </div>
              </section>
            ))
        )}

        <Modal
          open={Boolean(selezionato)}
          onClose={() => setSelezionato(null)}
          title={selezionato?.nome}
          className="strumento-modal"
        >
          {selezionato && (
            <div className="strumento-modal-layout">
              <div className="strumento-modal-immagine">
                {selezionato.immagine ? (
                  <img
                    src={`${import.meta.env.BASE_URL}${selezionato.immagine}`}
                    alt={selezionato.nome}
                  />
                ) : (
                  <span aria-hidden="true">Immagine non ancora disponibile</span>
                )}
              </div>
              <div className="strumento-modal-testo">
                <p className="strumento-meta">
                  {selezionato.grandezza} · {selezionato.unita}
                </p>
                {selezionato.sensibilita && (
                  <p className="strumento-sensibilita">Sensibilità tipica: {selezionato.sensibilita}</p>
                )}
                <p className="strumento-descrizione">{selezionato.descrizione}</p>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
}
