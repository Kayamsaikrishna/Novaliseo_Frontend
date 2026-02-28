import React, { useEffect } from 'react';
import Lenis from 'lenis';
import '@/App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Industries from './pages/Industries';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import RoleOfAI from './pages/blog/RoleOfAI';
import FutureOfStrategicSoftware from './pages/blog/FutureOfStrategicSoftware';
import SoftwareDefinedDefence from './pages/blog/SoftwareDefinedDefence';
import InnovationLab from './pages/InnovationLab';
import Defence from './pages/Defence';
import DeniedNavigation from './pages/DeniedNavigation';
import AttitudeControl from './pages/AttitudeControl';
import UltraLowLatency from './pages/UltraLowLatency';
import EdgeEfficiency from './pages/EdgeEfficiency';
import ThreatSurveillance from './pages/solutions/ThreatSurveillance';
import DecentralizedDecision from './pages/solutions/DecentralizedDecision';
import CombatOperations from './pages/solutions/CombatOperations';
import ComplexNavigation from './pages/solutions/ComplexNavigation';
import PerceptionOps from './pages/solutions/PerceptionOps';
import SwarmOps from './pages/solutions/SwarmOps';
import EngagementCounterThreat from './pages/solutions/EngagementCounterThreat';
import PersistentISR from './pages/solutions/PersistentISR';
import CyberDefence from './pages/solutions/CyberDefence';
import CookieConsent from './components/CookieConsent';
import UniqueCompanyBot from './components/SimplifiedChatBot';

// ScrollToTop component to ensure pages start from the top
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="App relative min-h-screen w-full overflow-x-hidden">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <main className="relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/innovation-lab" element={<InnovationLab />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/role-of-ai-in-defence-intelligence" element={<RoleOfAI />} />
            <Route path="/blog/future-of-strategic-defence-software" element={<FutureOfStrategicSoftware />} />
            <Route path="/blog/software-defined-defence-systems" element={<SoftwareDefinedDefence />} />
            <Route path="/defence" element={<Defence />} />
            <Route path="/defence/denied-navigation" element={<DeniedNavigation />} />
            <Route path="/defence/attitude-control" element={<AttitudeControl />} />
            <Route path="/defence/ultra-low-latency" element={<UltraLowLatency />} />
            <Route path="/defence/edge-efficiency" element={<EdgeEfficiency />} />
            <Route path="/defence/threat-surveillance" element={<ThreatSurveillance />} />
            <Route path="/defence/decentralized-decision" element={<DecentralizedDecision />} />
            <Route path="/defence/combat-operations" element={<CombatOperations />} />
            <Route path="/defence/complex-navigation" element={<ComplexNavigation />} />
            <Route path="/defence/perception-ops" element={<PerceptionOps />} />
            <Route path="/defence/swarm-ops" element={<SwarmOps />} />
            <Route path="/defence/engagement-counter-threat" element={<EngagementCounterThreat />} />
            <Route path="/defence/persistent-isr" element={<PersistentISR />} />
            <Route path="/defence/cyber-defence" element={<CyberDefence />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-right" richColors />
        <CookieConsent />
        <UniqueCompanyBot />
      </BrowserRouter>
    </div>
  );
}

export default App;