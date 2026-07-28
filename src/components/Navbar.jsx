import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import chorusLogo from '../../assets/logo.png';

export default function Navbar({ onOpenJoinModal }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isHomePage = location.pathname === '/';
  const [isVisible, setIsVisible] = useState(!isHomePage);

  useEffect(() => {
    if (!isHomePage) {
      setIsVisible(true);
      return;
    }

    const handleScroll = () => {
      // Navbar appears when user scrolls past the hero frame animation track (~6.5x viewport height)
      const threshold = window.innerHeight * 6.5;
      if (window.scrollY >= threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const navLinks = [
    { name: 'Productions', path: '/productions' },
    { name: 'Team', path: '/team' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header
      class={`fixed top-0 left-0 right-0 z-50 bg-surface/90 dark:bg-surface/90 backdrop-blur-xl border-b border-white/5 shadow-[0px_0px_40px_rgba(255,215,0,0.05)] transition-all duration-500 transform ${
        isVisible
          ? 'translate-y-0 opacity-100 pointer-events-auto'
          : '-translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <div class="flex justify-between items-center w-full px-4 md:px-margin-desktop py-2 max-w-container-max mx-auto h-14 md:h-16">
        {/* Brand Logo & Title */}
        <Link 
          to="/" 
          class="flex items-center gap-2.5 group focus:outline-none"
        >
          <img 
            src={chorusLogo} 
            alt="CHORUS Logo" 
            class="h-8 md:h-9 w-auto object-contain rounded group-hover:scale-105 transition-transform duration-300"
          />
          <span class="font-display-xl text-lg md:text-2xl text-primary-fixed tracking-widest uppercase group-hover:scale-105 transition-transform duration-300">
            CHORUS
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav class="hidden md:flex items-center space-x-7">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              class={`font-label-sm text-xs uppercase tracking-wider transition-all duration-300 ${
                isActive(link.path)
                  ? 'text-primary-fixed border-l-2 border-primary-fixed pl-2 font-bold'
                  : 'text-on-surface-variant hover:text-primary-fixed'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={onOpenJoinModal}
            class="bg-primary-container text-on-primary-container px-5 py-2 font-label-sm text-xs uppercase font-bold hover:glow-primary-fixed transition-all duration-300 active:scale-95 rounded-full"
          >
            Join the Club
          </button>
        </nav>

        {/* Mobile Toggle */}
        <div class="md:hidden flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            class="text-primary-fixed p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div class="md:hidden bg-surface-container-high border-b border-primary-fixed/20 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              class={`block font-label-sm text-lg uppercase tracking-wider py-2 ${
                isActive(link.path)
                  ? 'text-primary-fixed font-bold border-l-4 border-primary-fixed pl-3'
                  : 'text-on-surface-variant hover:text-primary-fixed'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenJoinModal();
            }}
            class="w-full bg-transparent border-2 border-primary-fixed text-white px-6 py-3 font-label-sm text-sm uppercase font-bold hover:bg-primary-fixed hover:text-black rounded-full transition-all mt-4 active:scale-95"
          >
            Join the Club
          </button>
        </div>
      )}
    </header>
  );
}
