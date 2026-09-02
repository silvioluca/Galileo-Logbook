import { BRANCHE } from '../data/branche';
import { STRUMENTI } from '../data/strumenti';
import { GRANDEZZE } from '../data/grandezze';
import { DURATA_BUCKETS } from '../data/durata';

export default function FiltriBar({ filtri, onChange }) {
  const update = (campo) => (e) => onChange({ ...filtri, [campo]: e.target.value });

  return (
    <div className="filtri-bar">
      <div className="filtro-field">
        <label htmlFor="filtro-branca">Branca</label>
        <select id="filtro-branca" value={filtri.branca} onChange={update('branca')}>
          <option value="">Tutte le branche</option>
          {BRANCHE.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      <div className="filtro-field">
        <label htmlFor="filtro-grandezza">Grandezza fisica</label>
        <select id="filtro-grandezza" value={filtri.grandezza} onChange={update('grandezza')}>
          <option value="">Tutte le grandezze</option>
          {GRANDEZZE.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
      </div>

      <div className="filtro-field">
        <label htmlFor="filtro-strumento">Strumento</label>
        <select id="filtro-strumento" value={filtri.strumento} onChange={update('strumento')}>
          <option value="">Tutti gli strumenti</option>
          {STRUMENTI.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="filtro-field">
        <label htmlFor="filtro-durata">Durata</label>
        <select id="filtro-durata" value={filtri.durata} onChange={update('durata')}>
          {DURATA_BUCKETS.map((d) => (
            <option key={d.value} value={d.value}>
              {d.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
