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
import AIAutonomousIntelligence2026 from './pages/blog/AIAutonomousIntelligence2026';
import RoleOfAI from './pages/blog/RoleOfAI';
import FutureOfStrategicSoftware from './pages/blog/FutureOfStrategicSoftware';
import SoftwareDefinedAutonomousSystems from './pages/blog/SoftwareDefinedAutonomousSystems';
import InnovationLab from './pages/InnovationLab';
import SEO from './components/SEO';
import AutonomousSystems from './pages/AutonomousSystems';
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
import CyberAutonomousSystems from './pages/solutions/CyberAutonomousSystems';
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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "TechOrganization"],
    "name": "NOVALISEO",
    "url": "https://novaliseo.com",
    "logo": "https://novaliseo.com/logo.png",
    "description": "NOVALISEO engineers 100% indigenous, software-defined AI systems for strategic autonomous software based intelligence and industrial manufacturing.",
    "foundingLocation": "India",
    "sameAs": [
      "https://www.linkedin.com/company/novaliseo"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "NOVALISEO",
    "url": "https://novaliseo.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://novaliseo.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

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
        <SEO schema={[organizationSchema, websiteSchema]} />
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
            {/* Blog & Articles */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/ai-autonomous-intelligence-systems-2026-guide" element={<AIAutonomousIntelligence2026 />} />
            <Route path="/blog/role-of-ai-in-autonomous software based-intelligence" element={<RoleOfAI />} />
            <Route path="/blog/future-of-strategic-autonomous software based-software" element={<FutureOfStrategicSoftware />} />
            <Route path="/blog/software-defined-autonomous software based-systems" element={<SoftwareDefinedAutonomousSystems />} />
            <Route path="/autonomous-systems" element={<AutonomousSystems />} />
            <Route path="/autonomous-systems/denied-navigation" element={<DeniedNavigation />} />
            <Route path="/autonomous-systems/attitude-control" element={<AttitudeControl />} />
            <Route path="/autonomous-systems/ultra-low-latency" element={<UltraLowLatency />} />
            <Route path="/autonomous-systems/edge-efficiency" element={<EdgeEfficiency />} />
            <Route path="/autonomous-systems/threat-surveillance" element={<ThreatSurveillance />} />
            <Route path="/autonomous-systems/decentralized-decision" element={<DecentralizedDecision />} />
            <Route path="/autonomous-systems/combat-operations" element={<CombatOperations />} />
            <Route path="/autonomous-systems/complex-navigation" element={<ComplexNavigation />} />
            <Route path="/autonomous-systems/perception-ops" element={<PerceptionOps />} />
            <Route path="/autonomous-systems/swarm-ops" element={<SwarmOps />} />
            <Route path="/autonomous-systems/engagement-counter-threat" element={<EngagementCounterThreat />} />
            <Route path="/autonomous-systems/persistent-isr" element={<PersistentISR />} />
            <Route path="/autonomous-systems/cyber-autonomous-systems" element={<CyberAutonomousSystems />} />
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
