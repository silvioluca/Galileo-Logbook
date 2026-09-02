import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, loading, signIn, signOut } = useAuth();

  return (
    <header className="navbar">
      <div className="container">
        <NavLink to="/" className="navbar-brand" onClick={() => setOpen(false)}>
          🜛 Galileo Logbook
        </NavLink>
        <button
          className="navbar-toggle"
          onClick={() => setOpen((o) => !o)}
          aria-label="Apri menu"
        >
          ☰
        </button>
        <ul className={`navbar-links${open ? ' open' : ''}`}>
          <li>
            <NavLink to="/" end onClick={() => setOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/schede" onClick={() => setOpen(false)}>
              Schede di Laboratorio
            </NavLink>
          </li>
          <li>
            <NavLink to="/strumenti" onClick={() => setOpen(false)}>
              Strumenti di Misura
            </NavLink>
          </li>
        </ul>
        <div className="navbar-auth">
          {!loading &&
            (user ? (
              <button type="button" className="btn" onClick={signOut}>
                Esci ({user.email})
              </button>
            ) : (
              <button type="button" className="btn" onClick={signIn}>
                Accedi con Google
              </button>
            ))}
        </div>
      </div>
    </header>
  );
}
