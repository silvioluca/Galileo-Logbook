import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Schede from './pages/Schede';
import CreaScheda from './pages/CreaScheda';
import './App.css';

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schede" element={<Schede />} />
        <Route path="/crea-scheda" element={<CreaScheda />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
