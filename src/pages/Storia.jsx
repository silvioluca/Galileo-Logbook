import { useEffect, useRef, useState } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import { STORIA } from '../data/storia';

function Formula({ tex }) {
  const html = katex.renderToString(tex, { throwOnError: false, displayMode: true });
  return <div className="storia-equazione-formula" dangerouslySetInnerHTML={{ __html: html }} />;
}

function annoValore(testo) {
  const match = testo.match(/\d+/);
  if (!match) return 0;
  const n = parseInt(match[0], 10);
  return /a\.C\./.test(testo) ? -n : n;
}

const RISERVA_ALTO = 44;
const RISERVA_BASSO = 20;
const SPAZIO_MINIMO = 22;

function distribuisciEventi(eventi, altezzaDisponibile) {
  if (!eventi || eventi.length === 0) return [];
  const anni = eventi.map((ev) => annoValore(ev.anno));
  const min = Math.min(...anni);
  const max = Math.max(...anni);
  const utile = Math.max(altezzaDisponibile - RISERVA_ALTO - RISERVA_BASSO, 0);
  const posizioni = anni.map((a) => (max === min ? 0 : ((a - min) / (max - min)) * utile));
  for (let k = 1; k < posizioni.length; k++) {
    if (posizioni[k] - posizioni[k - 1] < SPAZIO_MINIMO) {
      posizioni[k] = posizioni[k - 1] + SPAZIO_MINIMO;
    }
  }
  return posizioni.map((p) => p + RISERVA_ALTO);
}

export default function Storia() {
  const contenutoRef = useRef(null);
  const trackRef = useRef(null);
  const titoloRefs = useRef([]);
  const sezioneRefs = useRef([]);
  const [posizioni, setPosizioni] = useState([]);
  const [altezze, setAltezze] = useState([]);

  useEffect(() => {
    function calcola() {
      if (!trackRef.current) return;
      const base = trackRef.current.getBoundingClientRect().top;
      setPosizioni(titoloRefs.current.map((el) => (el ? el.getBoundingClientRect().top - base : 0)));
      setAltezze(sezioneRefs.current.map((el) => (el ? el.getBoundingClientRect().height : 0)));
    }
    calcola();
    const ro = new ResizeObserver(() => requestAnimationFrame(calcola));
    if (contenutoRef.current) ro.observe(contenutoRef.current);
    window.addEventListener('resize', calcola);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', calcola);
    };
  }, []);

  const vaiAllEra = (id) => (ev) => {
    ev.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="page">
      <div className="container storia-container">
        <h1>Storia della Fisica</h1>
        <p>
          Un racconto in sette età, dai primi filosofi della natura della Grecia arcaica alle frontiere aperte
          della fisica di oggi: le domande, le scoperte e le equazioni che hanno cambiato il modo in cui
          comprendiamo il mondo.
        </p>

        <div className="storia-layout">
          <div className="storia-contenuto" ref={contenutoRef}>
            {STORIA.map((era, i) => (
              <section
                id={era.id}
                key={era.id}
                className="storia-era"
                ref={(el) => (sezioneRefs.current[i] = el)}
              >
                <p className="storia-era-periodo">{era.periodo}</p>
                <h2 ref={(el) => (titoloRefs.current[i] = el)}>{era.titolo}</h2>
                <p className="storia-era-intro">{era.intro}</p>

                {era.sezioni.map((sez) => (
                  <div className="storia-sezione" key={sez.titolo}>
                    <h3>{sez.titolo}</h3>
                    {sez.immagine && (
                      <figure className={`storia-figura storia-figura-${sez.immagine.lato || 'destra'}`}>
                        <div className="storia-figura-cornice etched-frame">
                          <img
                            src={`${import.meta.env.BASE_URL}${sez.immagine.src}`}
                            alt={sez.immagine.alt}
                          />
                        </div>
                        <figcaption>{sez.immagine.didascalia}</figcaption>
                      </figure>
                    )}
                    {sez.paragrafi.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                    {sez.equazione && (
                      <div className="storia-equazione">
                        <Formula tex={sez.equazione.formula} />
                        <p className="storia-equazione-nome">{sez.equazione.nome}</p>
                      </div>
                    )}
                  </div>
                ))}
              </section>
            ))}
          </div>

          <nav className="storia-timeline" aria-label="Linea del tempo della fisica">
            <h2>Linea del tempo</h2>
            <div className="storia-timeline-track" ref={trackRef}>
              {STORIA.map((era, i) => (
                <div
                  className="storia-timeline-riga storia-timeline-riga-era"
                  key={era.id}
                  style={{ top: `${posizioni[i] ?? 0}px` }}
                >
                  <a href={`#${era.id}`} onClick={vaiAllEra(era.id)}>
                    <span className="storia-timeline-periodo">{era.periodo}</span>
                    <span className="storia-timeline-titolo">{era.titolo}</span>
                  </a>
                  {era.eventi && era.eventi.length > 0 && (() => {
                    const posEventi = distribuisciEventi(era.eventi, altezze[i] ?? 0);
                    return (
                      <ol className="storia-timeline-eventi">
                        {era.eventi.map((ev, j) => (
                          <li
                            className="storia-timeline-riga-evento"
                            key={ev.anno + ev.testo}
                            style={{ top: `${posEventi[j] ?? 0}px` }}
                          >
                            <a href={`#${era.id}`} onClick={vaiAllEra(era.id)}>
                              <span className="storia-timeline-anno">{ev.anno}</span>
                              {ev.testo}
                            </a>
                          </li>
                        ))}
                      </ol>
                    );
                  })()}
                </div>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
