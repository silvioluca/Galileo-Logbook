import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Schede from './pages/Schede';
import CreaScheda from './pages/CreaScheda';
import StrumentiWiki from './pages/StrumentiWiki';
import Nobel from './pages/Nobel';
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
        <Route path="/crea-scheda" element={<CreaScheda />} />
        <Route path="/modifica-scheda/:id" element={<CreaScheda />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
