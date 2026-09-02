import { createContext, useContext, useEffect, useState } from 'react';
import { subscribeAuth, signInGoogle, signOutUser, elaboraRisultatoRedirect } from '../services/authService';

// Unico account autorizzato a creare/eliminare schede e template (vedi anche
// le Firestore security rules, che devono usare la stessa email).
const OWNER_EMAIL = 'silvio.phy@gmail.com';

const AuthContext = createContext({
  user: null,
  isOwner: false,
  loading: true,
  googleAccessToken: null,
  signIn: () => {},
  signOut: () => {},
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // Access token OAuth di Google (scope drive.file), usato per le
  // conversioni DOCX<->PDF via Google Drive. Vive solo in memoria: dura
  // ~1 ora e va richiesto di nuovo (signIn) se scade.
  const [googleAccessToken, setGoogleAccessToken] = useState(null);

  useEffect(() => {
    // Se stiamo tornando da signInWithRedirect, recupera il token prima
    // ancora che onAuthStateChanged aggiorni lo stato utente.
    elaboraRisultatoRedirect().then((token) => {
      console.log('[GALILEO-DEBUG] token ottenuto dal redirect:', Boolean(token));
      if (token) setGoogleAccessToken(token);
    });

    const unsubscribe = subscribeAuth((u) => {
      console.log('[GALILEO-DEBUG] onAuthStateChanged, utente:', u?.email || null);
      setUser(u);
      setLoading(false);
      if (!u) setGoogleAccessToken(null);
    });
    return unsubscribe;
  }, []);

  const isOwner = user?.email === OWNER_EMAIL;

  // Naviga via verso Google (redirect, non popup: i popup sono rotti dalla
  // Cross-Origin-Opener-Policy di GitHub Pages). Il token si recupera al
  // ritorno, non da questa chiamata.
  const signIn = () => signInGoogle();

  const signOut = async () => {
    setGoogleAccessToken(null);
    await signOutUser();
  };

  return (
    <AuthContext.Provider value={{ user, isOwner, loading, googleAccessToken, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
