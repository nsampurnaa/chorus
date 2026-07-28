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
    <footer class="bg-surface-container-lowest spotlight-gradient-top border-t border-white/5 py-spotlight-padding mt-20">
      <div class="flex flex-col items-center justify-center space-y-gutter w-full px-margin-desktop max-w-container-max mx-auto text-center">
        <Link to="/" class="font-display-xl text-5xl md:text-7xl text-primary-fixed uppercase tracking-widest hover:scale-105 transition-transform">
          CHORUS
        </Link>
        <p class="font-body-lg text-on-surface-variant max-w-lg italic opacity-80">
          "Where Every Soul Finds Its Stage. IEM Drama Club."
        </p>

        <div class="flex flex-wrap justify-center gap-8 py-2">
          <Link to="/" class="text-on-surface-variant hover:text-primary-fixed transition-colors font-body-md">Home</Link>
          <Link to="/about" class="text-on-surface-variant hover:text-primary-fixed transition-colors font-body-md">About</Link>
          <Link to="/productions" class="text-on-surface-variant hover:text-primary-fixed transition-colors font-body-md">Productions</Link>
          <Link to="/team" class="text-on-surface-variant hover:text-primary-fixed transition-colors font-body-md">Team</Link>
          <Link to="/gallery" class="text-on-surface-variant hover:text-primary-fixed transition-colors font-body-md">Gallery</Link>
        </div>

        {/* Social Media Icons */}
        <div class="flex items-center justify-center gap-5 py-3">
          {socialLinks.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                class={`p-3 rounded-full bg-surface-container-high/60 border border-white/10 text-on-surface-variant ${s.color} hover:border-primary-fixed/50 hover:scale-110 transition-all duration-300 shadow-md`}
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>

        <div class="w-24 h-0.5 bg-outline-variant/40 my-4"></div>

        <p class="text-on-surface-variant font-body-md text-sm opacity-50">
          © {new Date().getFullYear()} CHORUS IEM Drama Club. All rights reserved. The Stage Awaits.
        </p>
      </div>
    </footer>
  );
}
