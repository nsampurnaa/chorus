import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer class="bg-surface-container-lowest spotlight-gradient-top border-t border-white/5 py-spotlight-padding mt-20">
      <div class="flex flex-col items-center justify-center space-y-gutter w-full px-margin-desktop max-w-container-max mx-auto text-center">
        <Link to="/" class="font-display-xl text-5xl md:text-7xl text-primary-fixed uppercase tracking-widest hover:scale-105 transition-transform">
          CHORUS
        </Link>
        <p class="font-body-lg text-on-surface-variant max-w-lg italic opacity-80">
          "Where Every Soul Finds Its Stage. IEM Drama Club."
        </p>

        <div class="flex flex-wrap justify-center gap-8 py-4">
          <Link to="/" class="text-on-surface-variant hover:text-primary-fixed transition-colors font-body-md">Home</Link>
          <Link to="/about" class="text-on-surface-variant hover:text-primary-fixed transition-colors font-body-md">About</Link>
          <Link to="/productions" class="text-on-surface-variant hover:text-primary-fixed transition-colors font-body-md">Productions</Link>
          <Link to="/team" class="text-on-surface-variant hover:text-primary-fixed transition-colors font-body-md">Team</Link>
          <Link to="/gallery" class="text-on-surface-variant hover:text-primary-fixed transition-colors font-body-md">Gallery</Link>
        </div>

        <div class="w-24 h-0.5 bg-outline-variant/40 my-4"></div>

        <p class="text-on-surface-variant font-body-md text-sm opacity-50">
          © {new Date().getFullYear()} CHORUS IEM Drama Club. All rights reserved. The Stage Awaits.
        </p>
      </div>
    </footer>
  );
}
