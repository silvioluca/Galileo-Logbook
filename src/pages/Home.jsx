import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="page home-page">
      <section className="hero-full">
        <img
          className="hero-bg-image"
          src={`${import.meta.env.BASE_URL}images/galileo-portrait.png`}
          alt=""
          aria-hidden="true"
        />
        <div className="hero-full-content">
          <h1>Galileo Logbook</h1>
          <p className="subtitle">
            «Misura ciò che è misurabile, e rendi misurabile ciò che non lo è.»
          </p>
          <p>
            Un archivio delle schede di laboratorio di fisica: raccogli, consulta e crea
            schede sperimentali suddivise per branca, grandezza fisica, strumento e durata.
          </p>
          <div className="hero-actions">
            <Link className="btn primary" to="/schede">
              Sfoglia le schede
            </Link>
            <Link className="btn" to="/crea-scheda">
              Crea una scheda
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
