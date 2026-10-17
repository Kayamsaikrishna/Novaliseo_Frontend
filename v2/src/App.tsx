import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Hero from './components/Hero';
import IntelligenceSection from './components/IntelligenceSection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import PlatformsPage from './pages/PlatformsPage';
import TechnologyPage from './pages/TechnologyPage';
import AboutPage from './pages/AboutPage';
import CareersPage from './pages/CareersPage';
import PartnerPage from './pages/PartnerPage';
import CertificateVerifyPage from './pages/CertificateVerifyPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import IndustryTrainingsPage from './pages/IndustryTrainingsPage';
import ResearchCollaborationsPage from './pages/ResearchCollaborationsPage';

import PurposeBuiltIntelligence from './components/PurposeBuiltIntelligence';
import SovereignComputeSection from './components/SovereignComputeSection';
import QuoteDeck from './components/QuoteDeck';
import PartnerLogosSection from './components/PartnerLogosSection';

function HomePage() {
  return (
    <>
      <Hero />
      {/* <PartnerLogosSection /> — Hidden for now until partner logos are released */}
      <PurposeBuiltIntelligence />
      <SovereignComputeSection />
      {/* <QuoteDeck /> — Hidden for now until verified reviews are collected */}
    </>
  );
}

function App() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-sky-500/20">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/platforms" element={<PlatformsPage />} />
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/partner" element={<PartnerPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/verify" element={<CertificateVerifyPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/solutions" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/trainings" element={<IndustryTrainingsPage />} />
          <Route path="/collaborations" element={<ResearchCollaborationsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
