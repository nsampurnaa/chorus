import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com', color: 'hover:text-[#E4405F]' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com', color: 'hover:text-[#1877F2]' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com', color: 'hover:text-[#FF0000]' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com', color: 'hover:text-[#0A66C2]' },
    { name: 'Email', icon: Mail, href: 'mailto:chorus.iemdramaclub@gmail.com', color: 'hover:text-primary-fixed' },
  ];

  return (
    <footer class="bg-surface-container-lowest border-t border-white/5 py-6 mt-8">
      <div class="flex flex-col items-center justify-center space-y-3 w-full px-4 md:px-12 max-w-full mx-auto text-center">
        {/* Brand, Nav & Social Icons in a clean compact row */}
        <div class="flex flex-col md:flex-row items-center justify-between w-full gap-4 pb-3 border-b border-white/5">
          <Link to="/" class="font-display-xl text-2xl text-primary-fixed uppercase tracking-widest hover:scale-105 transition-transform">
            CHORUS
          </Link>

          <div class="flex flex-wrap justify-center gap-5 text-xs">
            <Link to="/" class="text-on-surface-variant hover:text-primary-fixed transition-colors font-body-md uppercase tracking-wider">Home</Link>
            <Link to="/about" class="text-on-surface-variant hover:text-primary-fixed transition-colors font-body-md uppercase tracking-wider">About</Link>
            <Link to="/productions" class="text-on-surface-variant hover:text-primary-fixed transition-colors font-body-md uppercase tracking-wider">Productions</Link>
            <Link to="/team" class="text-on-surface-variant hover:text-primary-fixed transition-colors font-body-md uppercase tracking-wider">Team</Link>
            <Link to="/gallery" class="text-on-surface-variant hover:text-primary-fixed transition-colors font-body-md uppercase tracking-wider">Gallery</Link>
          </div>

          {/* Social Media Icons */}
          <div class="flex items-center gap-3">
            {socialLinks.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  class={`p-2 rounded-full bg-surface-container-high/60 border border-white/10 text-on-surface-variant ${s.color} hover:border-primary-fixed/50 hover:scale-110 transition-all duration-300`}
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>

        <p class="text-on-surface-variant font-body-md text-[11px] opacity-50 pt-1">
          © {new Date().getFullYear()} CHORUS IEM Drama Club. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
