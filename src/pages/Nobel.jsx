import { useMemo, useState } from 'react';
import { NOBEL_FISICA } from '../data/nobelFisica';
import Modal from '../components/Modal';
import { formattaData } from '../utils/nobelUtils';

function decennio(anno) {
  const inizio = Math.floor(anno / 10) * 10;
  return `${inizio}–${inizio + 9}`;
}

// Le date/luoghi di nascita e morte sono già nella bio estesa di Wikipedia:
// qui si riportano solo i fatti specifici del premio, per non ripetersi.
function infoPremio(laureato, condivisoCon) {
  let testo = `Premio Nobel per la Fisica ${laureato.anno}`;
  if (condivisoCon.length === 1) testo += `, condiviso con ${condivisoCon[0]}`;
  else if (condivisoCon.length > 1) {
    testo += `, condiviso con ${condivisoCon.slice(0, -1).join(', ')} e ${condivisoCon[condivisoCon.length - 1]}`;
  }
  testo += ` — "${laureato.motivazione}"`;
  return testo;
}

export default function Nobel() {
  const [ricerca, setRicerca] = useState('');
  const [decennioScelto, setDecennioScelto] = useState('');
  const [selezionato, setSelezionato] = useState(null);

  const decenni = useMemo(() => {
    const insieme = new Set(NOBEL_FISICA.map((l) => decennio(l.anno)));
    return [...insieme].sort();
  }, []);

  const filtrati = useMemo(() => {
    const testo = ricerca.trim().toLowerCase();
    return NOBEL_FISICA.filter((l) => {
      if (decennioScelto && decennio(l.anno) !== decennioScelto) return false;
      if (testo && !l.nome.toLowerCase().includes(testo)) return false;
      return true;
    });
  }, [ricerca, decennioScelto]);

  const condivisoCon = useMemo(() => {
    if (!selezionato) return [];
    return NOBEL_FISICA.filter((l) => l.anno === selezionato.anno && l.nome !== selezionato.nome).map(
      (l) => l.nome,
    );
  }, [selezionato]);

  return (
    <div className="page">
      <div className="container">
        <h1>Premi Nobel per la Fisica</h1>
        <p>L'albo completo dei vincitori del Premio Nobel per la Fisica, dal 1901 a oggi.</p>

        <div className="schede-toolbar">
          <div className="filtro-field">
            <label htmlFor="nobel-ricerca">Cerca</label>
            <input
              id="nobel-ricerca"
              type="text"
              placeholder="es. Curie"
              value={ricerca}
              onChange={(e) => setRicerca(e.target.value)}
            />
          </div>
          <div className="filtro-field">
            <label htmlFor="nobel-decennio">Decennio</label>
            <select
              id="nobel-decennio"
              value={decennioScelto}
              onChange={(e) => setDecennioScelto(e.target.value)}
            >
              <option value="">Tutti i decenni</option>
              {decenni.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>
        </div>

        {filtrati.length === 0 ? (
          <p className="empty-state">Nessun vincitore corrisponde alla ricerca.</p>
        ) : (
          <div className="strumenti-grid">
            {filtrati.map((l) => (
              <article
                className="etched-frame strumento-card nobel-card"
                key={`${l.anno}-${l.nome}`}
                role="button"
                tabIndex={0}
                onClick={() => setSelezionato(l)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setSelezionato(l);
                }}
              >
                <div className="nobel-card-foto">
                  {l.immagine ? (
                    <img
                      src={`${import.meta.env.BASE_URL}${l.immagine}`}
                      alt={l.nome}
                      loading="lazy"
                    />
                  ) : (
                    <div className="nobel-card-foto-placeholder" aria-hidden="true" />
                  )}
                </div>
                <h3>{l.nome}</h3>
                <p className="strumento-meta">
                  ({formattaData(l.nascita)} – {formattaData(l.morte) || 'vivente'})
                </p>
                <p className="nobel-anno">Premio Nobel {l.anno}</p>
                <p className="nobel-motivazione">{l.motivazione}</p>
              </article>
            ))}
          </div>
        )}

        <Modal
          open={Boolean(selezionato)}
          onClose={() => setSelezionato(null)}
          title={selezionato?.nome}
          className="nobel-modal"
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
                  <span aria-hidden="true">Immagine non disponibile</span>
                )}
              </div>
              <div className="nobel-modal-testo">
                <p className="strumento-meta">
                  ({formattaData(selezionato.nascita)} – {formattaData(selezionato.morte) || 'vivente'})
                </p>
                <p className="nobel-anno">{infoPremio(selezionato, condivisoCon)}</p>
                {selezionato.bioEstesa && <p className="nobel-bio-estesa">{selezionato.bioEstesa}</p>}
                {selezionato.wikipedia && (
                  <p>
                    <a href={selezionato.wikipedia} target="_blank" rel="noreferrer">
                      Approfondisci su Wikipedia (in inglese) ↗
                    </a>
                  </p>
                )}
              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
}
