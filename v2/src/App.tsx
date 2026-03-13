import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Hero from './components/Hero';
import IntelligenceSection from './components/IntelligenceSection';
import SovereignStackedCards from './components/SovereignStackedCards';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import PlatformsPage from './pages/PlatformsPage';
import SolutionsPage from './pages/SolutionsPage';
import AboutPage from './pages/AboutPage';
import CareersPage from './pages/CareersPage';
import PartnerPage from './pages/PartnerPage';
import CertificateVerifyPage from './pages/CertificateVerifyPage';

function HomePage() {
  return (
    <>
      <Hero />
      <IntelligenceSection />
      <SovereignStackedCards />
      <Newsletter />
    </>
  );
}

function App() {
  return (
    <div className="relative min-h-screen bg-background text-white selection:bg-primary/30">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/platforms" element={<PlatformsPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/partner" element={<PartnerPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/verify" element={<CertificateVerifyPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
