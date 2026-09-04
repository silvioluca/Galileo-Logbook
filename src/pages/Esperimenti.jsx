import { useMemo, useState } from 'react';
import { ESPERIMENTI } from '../data/esperimenti';
import Modal from '../components/Modal';

const CATEGORIE_ORDINE = [
  'Meccanica classica',
  'Elettromagnetismo',
  'Ottica e relatività',
  'Fisica atomica e nucleare',
  'Meccanica quantistica',
  'Astrofisica e cosmologia',
];

export default function Esperimenti() {
  const [ricerca, setRicerca] = useState('');
  const [categoriaScelta, setCategoriaScelta] = useState('');
  const [selezionato, setSelezionato] = useState(null);

  const conteggioCategoria = useMemo(() => {
    const m = new Map();
    for (const e of ESPERIMENTI) m.set(e.categoria, (m.get(e.categoria) || 0) + 1);
    return m;
  }, []);

  const filtrati = useMemo(() => {
    const testo = ricerca.trim().toLowerCase();
    return ESPERIMENTI.filter((e) => {
      if (categoriaScelta && e.categoria !== categoriaScelta) return false;
      if (
        testo &&
        !e.nome.toLowerCase().includes(testo) &&
        !e.scienziato.toLowerCase().includes(testo)
      ) {
        return false;
      }
      return true;
    });
  }, [ricerca, categoriaScelta]);

  const gruppi = useMemo(() => {
    const m = new Map();
    for (const cat of CATEGORIE_ORDINE) m.set(cat, []);
    for (const e of filtrati) {
      if (!m.has(e.categoria)) m.set(e.categoria, []);
      m.get(e.categoria).push(e);
    }
    return m;
  }, [filtrati]);

  return (
    <div className="page">
      <div className="container">
        <h1>Esperimenti</h1>
        <p>I più celebri esperimenti della storia della fisica: chi li ha compiuti, come e cosa hanno dimostrato.</p>

        <div className="schede-toolbar">
          <div className="filtro-field">
            <label htmlFor="esperimento-ricerca">Cerca</label>
            <input
              id="esperimento-ricerca"
              type="text"
              placeholder="es. Michelson, doppia fenditura"
              value={ricerca}
              onChange={(e) => setRicerca(e.target.value)}
            />
          </div>
          <div className="filtro-field">
            <label htmlFor="esperimento-categoria">Categoria</label>
            <select
              id="esperimento-categoria"
              value={categoriaScelta}
              onChange={(e) => setCategoriaScelta(e.target.value)}
            >
              <option value="">Tutte le categorie ({ESPERIMENTI.length})</option>
              {CATEGORIE_ORDINE.map((c) => (
                <option key={c} value={c}>
                  {c} ({conteggioCategoria.get(c) || 0})
                </option>
              ))}
            </select>
          </div>
        </div>

        {filtrati.length === 0 ? (
          <p className="empty-state">Nessun esperimento corrisponde alla ricerca.</p>
        ) : (
          [...gruppi.entries()]
            .filter(([, elenco]) => elenco.length > 0)
            .map(([categoria, elenco]) => (
              <section key={categoria} className="strumenti-sezione">
                <h2>{categoria}</h2>
                <div className="strumenti-grid">
                  {elenco.map((e) => (
                    <article
                      className="etched-frame strumento-card"
                      key={e.nome}
                      role="button"
                      tabIndex={0}
                      onClick={() => setSelezionato(e)}
                      onKeyDown={(ev) => {
                        if (ev.key === 'Enter' || ev.key === ' ') setSelezionato(e);
                      }}
                    >
                      <h3>{e.nome}</h3>
                      <p className="strumento-meta">
                        {e.scienziato} · {e.anno}
                      </p>
                      <p className="strumento-descrizione">{e.descrizione}</p>
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
          className="esperimento-modal"
        >
          {selezionato && (
            <div className="esperimento-modal-corpo">
              <p className="strumento-meta">
                {selezionato.scienziato} · {selezionato.anno}
              </p>
              <p className="esperimento-tesi">{selezionato.cosaDimostra}</p>
              {selezionato.immagine ? (
                <figure className="esperimento-figura">
                  <img
                    src={`${import.meta.env.BASE_URL}${selezionato.immagine}`}
                    alt={selezionato.nome}
                  />
                </figure>
              ) : (
                <figure className="esperimento-figura esperimento-figura-vuota" aria-hidden="true">
                  <span>Immagine non ancora disponibile</span>
                </figure>
              )}
              <p className="strumento-descrizione">{selezionato.dettagli}</p>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
}
