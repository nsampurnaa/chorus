import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import chorusLogo from '../../assets/logo.png';

export default function Navbar({ onOpenJoinModal }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Productions', path: '/productions' },
    { name: 'Team', path: '/team' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header class="bg-surface/90 dark:bg-surface/90 sticky top-0 z-50 backdrop-blur-xl border-b border-white/5 shadow-[0px_0px_40px_rgba(255,215,0,0.05)]">
      <div class="flex justify-between items-center w-full px-4 md:px-margin-desktop py-unit max-w-container-max mx-auto h-20">
        {/* Brand Logo & Title */}
        <Link 
          to="/" 
          class="flex items-center gap-3 group focus:outline-none"
        >
          <img 
            src={chorusLogo} 
            alt="CHORUS Logo" 
            class="h-10 md:h-12 w-auto object-contain rounded group-hover:scale-105 transition-transform duration-300"
          />
          <span class="font-display-xl text-3xl md:text-5xl text-primary-fixed tracking-widest uppercase group-hover:scale-105 transition-transform duration-300">
            CHORUS
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav class="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              class={`font-label-sm text-label-sm uppercase tracking-wider transition-all duration-300 ${
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
            class="bg-primary-container text-on-primary-container px-6 py-3 font-label-sm text-label-sm uppercase font-bold hover:glow-primary-fixed transition-all duration-300 active:scale-95"
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
            class="w-full bg-primary-container text-on-primary-container px-6 py-3 font-label-sm text-label-sm uppercase font-bold hover:glow-primary-fixed transition-all mt-4"
          >
            Join the Club
          </button>
        </div>
      )}
    </header>
  );
}
