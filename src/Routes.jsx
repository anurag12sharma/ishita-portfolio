import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import components
import ScrollToTop from './components/ScrollToTop';

// Import page components
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import EcoWalletPage from './pages/EcoWallet';
import RepresentBiharPage from './pages/RepresentBihar';
import DelhiMetroPage from './pages/DelhiMetro';
import GenderBiasResearchPage from './pages/GenderBiasResearch';
import InstaEffectPage from './pages/InstaEffect';

const AppRoutes = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/ecowallet" element={<EcoWalletPage />} />
        <Route path="/represent-bihar" element={<RepresentBiharPage />} />
        <Route path="/delhi-metro" element={<DelhiMetroPage />} />
        <Route path="/gender-bias-research" element={<GenderBiasResearchPage />} />
        <Route path="/insta-effect" element={<InstaEffectPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;