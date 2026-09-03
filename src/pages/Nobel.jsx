import { useMemo, useState } from 'react';
import { NOBEL_FISICA } from '../data/nobelFisica';
import Modal from '../components/Modal';
import { formattaData, traduciLuogo } from '../utils/nobelUtils';

function decennio(anno) {
  const inizio = Math.floor(anno / 10) * 10;
  return `${inizio}–${inizio + 9}`;
}

function componiBiografia(laureato, condivisoCon) {
  const nascitaStr = formattaData(laureato.nascita);
  const luogoNascita = traduciLuogo(laureato.luogoNascita);
  const morteStr = formattaData(laureato.morte);
  const luogoMorte = traduciLuogo(laureato.luogoMorte);

  const nato = laureato.genere === 'female' ? 'nata' : 'nato';
  const morto = laureato.genere === 'female' ? 'morta' : 'morto';

  const frasi = [];
  let f1 = `${laureato.nome} è ${nato}` + (nascitaStr ? ` il ${nascitaStr}` : '');
  if (luogoNascita) f1 += ` a ${luogoNascita}`;
  frasi.push(f1 + '.');

  if (morteStr) {
    let f2 = `È ${morto} il ${morteStr}`;
    if (luogoMorte) f2 += ` a ${luogoMorte}`;
    frasi.push(f2 + '.');
  }

  let f3 = `Ha ricevuto il Premio Nobel per la Fisica nel ${laureato.anno}`;
  if (condivisoCon.length === 1) f3 += ` insieme a ${condivisoCon[0]}`;
  else if (condivisoCon.length > 1) {
    f3 += ` insieme a ${condivisoCon.slice(0, -1).join(', ')} e ${condivisoCon[condivisoCon.length - 1]}`;
  }
  f3 += ` "${laureato.motivazione}".`;
  frasi.push(f3);

  return frasi.join(' ');
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
                <p className="strumento-meta">Premio Nobel per la Fisica {selezionato.anno}</p>
                <p>{componiBiografia(selezionato, condivisoCon)}</p>
                {selezionato.bioEstesa && (
                  <>
                    <div className="ornament-divider">✦</div>
                    <p className="nobel-bio-estesa">{selezionato.bioEstesa}</p>
                  </>
                )}
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
