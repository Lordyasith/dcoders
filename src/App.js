import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Orb from './components/Orb';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="appRoot">
      {/* Ambient background orbs */}
      <div className="orbLayer">
        <Orb style={{ width: 700, height: 700, background: '#0ea5e9', top: -300, left: -300, '--orb-opacity': 0.12, animationDuration: '9s' }} />
        <Orb style={{ width: 600, height: 600, background: '#6366f1', top: '20%', right: -200, '--orb-opacity': 0.10, animationDuration: '11s', animationDelay: '2s' }} />
        <Orb style={{ width: 500, height: 500, background: '#38bdf8', bottom: '5%', left: '25%', '--orb-opacity': 0.08, animationDuration: '7s', animationDelay: '4s' }} />
      </div>

      <ScrollToTop />
      <Navbar />

      <main className="main">
        <Routes>
          <Route path="/"          element={<Home />} />
          <Route path="/services"  element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about"     element={<About />} />
          <Route path="/contact"   element={<Contact />} />
          <Route path="*"          element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '120px 48px' }}>
      <div style={{ fontSize: 80, fontWeight: 900, background: 'linear-gradient(135deg,#67e8f9,#a5b4fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>404</div>
      <h2 style={{ fontSize: 28, fontWeight: 700, margin: '16px 0 12px' }}>Page not found</h2>
      <p style={{ color: 'rgba(255,255,255,0.45)', marginBottom: 32 }}>This page doesn't exist or has been moved.</p>
      <a href="/" style={{ textDecoration: 'none', background: 'linear-gradient(135deg,#38bdf8,#2563eb)', color: '#fff', padding: '13px 30px', borderRadius: 12, fontWeight: 700, fontSize: 15 }}>Go Home</a>
    </div>
  );
}
