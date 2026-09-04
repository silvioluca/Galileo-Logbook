import { STORIA } from '../data/storia';

export default function Storia() {
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
          <nav className="storia-timeline etched-frame" aria-label="Linea del tempo della fisica">
            <h2>Linea del tempo</h2>
            <ol>
              {STORIA.map((era) => (
                <li key={era.id}>
                  <a href={`#${era.id}`} onClick={vaiAllEra(era.id)}>
                    <span className="storia-timeline-periodo">{era.periodo}</span>
                    <span className="storia-timeline-titolo">{era.titolo}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="storia-contenuto">
            {STORIA.map((era) => (
              <section id={era.id} key={era.id} className="storia-era">
                <p className="storia-era-periodo">{era.periodo}</p>
                <h2>{era.titolo}</h2>
                <p className="storia-era-intro">{era.intro}</p>

                {era.eventi && (
                  <ul className="storia-eventi">
                    {era.eventi.map((ev) => (
                      <li key={ev.anno + ev.testo}>
                        <strong>{ev.anno}</strong> {ev.testo}
                      </li>
                    ))}
                  </ul>
                )}

                {era.sezioni.map((sez) => (
                  <div className="storia-sezione" key={sez.titolo}>
                    <h3>{sez.titolo}</h3>
                    {sez.immagine && (
                      <figure
                        className={`storia-figura etched-frame storia-figura-${sez.immagine.lato || 'destra'}`}
                      >
                        <img
                          src={`${import.meta.env.BASE_URL}${sez.immagine.src}`}
                          alt={sez.immagine.alt}
                        />
                        <figcaption>{sez.immagine.didascalia}</figcaption>
                      </figure>
                    )}
                    {sez.paragrafi.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                    {sez.equazione && (
                      <div className="storia-equazione">
                        <p className="storia-equazione-formula">{sez.equazione.formula}</p>
                        <p className="storia-equazione-nome">{sez.equazione.nome}</p>
                      </div>
                    )}
                  </div>
                ))}
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
