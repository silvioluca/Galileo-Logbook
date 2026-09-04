import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Schede from './pages/Schede';
import CreaScheda from './pages/CreaScheda';
import StrumentiWiki from './pages/StrumentiWiki';
import Nobel from './pages/Nobel';
import UnitaMisura from './pages/UnitaMisura';
import Esperimenti from './pages/Esperimenti';
import Storia from './pages/Storia';
import './App.css';

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schede" element={<Schede />} />
        <Route path="/strumenti" element={<StrumentiWiki />} />
        <Route path="/nobel" element={<Nobel />} />
        <Route path="/unita-di-misura" element={<UnitaMisura />} />
        <Route path="/esperimenti" element={<Esperimenti />} />
        <Route path="/storia" element={<Storia />} />
        <Route path="/crea-scheda" element={<CreaScheda />} />
        <Route path="/modifica-scheda/:id" element={<CreaScheda />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
