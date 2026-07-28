import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import JoinModal from './components/JoinModal';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductionsPage from './pages/ProductionsPage';
import TeamPage from './pages/TeamPage';
import GalleryPage from './pages/GalleryPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div class="min-h-screen bg-surface text-on-surface font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed flex flex-col justify-between">
        <div>
          <Navbar onOpenJoinModal={() => setIsJoinModalOpen(true)} />
          <main class="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage onOpenJoinModal={() => setIsJoinModalOpen(true)} />} />
              <Route path="/about" element={<AboutPage onOpenJoinModal={() => setIsJoinModalOpen(true)} />} />
              <Route path="/productions" element={<ProductionsPage onOpenJoinModal={() => setIsJoinModalOpen(true)} />} />
              <Route path="/team" element={<TeamPage onOpenJoinModal={() => setIsJoinModalOpen(true)} />} />
              <Route path="/gallery" element={<GalleryPage />} />
            </Routes>
          </main>
        </div>

        <Footer />
        <JoinModal isOpen={isJoinModalOpen} onClose={() => setIsJoinModalOpen(false)} />
      </div>
    </Router>
  );
}
