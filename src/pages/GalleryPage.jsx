import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All Moments');
  const [activeLightboxItem, setActiveLightboxItem] = useState(null);

  const galleryItems = [
    {
      id: 1,
      category: 'On Stage',
      title: 'Shadows & Silence',
      img: '/gallery-1.jpg',
      desc: 'Atmospheric candlelit silhouette performance on the CHORUS stage.'
    },
    {
      id: 2,
      category: 'Rehearsals',
      title: 'Open Air Circle',
      img: '/gallery-2.jpg',
      desc: 'Outdoor ensemble script reading and rehearsal session in the college courtyard.'
    },
    {
      id: 3,
      category: 'On Stage',
      title: 'Theatre Festival',
      img: '/gallery-3.jpg',
      desc: 'CHORUS production presentation at Rabindra Okakura Bhavan.'
    },
    {
      id: 4,
      category: 'Backstage',
      title: 'Dressing Room Prep',
      img: '/gallery-4.jpg',
      desc: 'Intimate backstage makeup and costume preparation before the curtain call.'
    },
    {
      id: 5,
      category: 'Community',
      title: 'The Ensemble',
      img: '/gallery-5.jpg',
      desc: 'Full CHORUS drama club troupe curtain call after a standing ovation.'
    },
    {
      id: 6,
      category: 'Backstage',
      title: 'Iti, Aranyak',
      img: '/gallery-6.jpg',
      desc: 'Late night script writing and handwritten dialogue notes under dramatic red lighting.'
    },
    {
      id: 7,
      category: 'Community',
      title: 'Cast Curtain Call',
      img: '/gallery-7.jpg',
      desc: 'CHORUS cast and crew ensemble lined up on stage after a successful performance.'
    },
    {
      id: 8,
      category: 'Community',
      title: 'Rongromyo at Gyan Manch',
      img: '/gallery-8.jpg',
      desc: 'Celebrating the 2-day theatre festival outside Gyan Manch auditorium.'
    },
    {
      id: 9,
      category: 'On Stage',
      title: 'Red Eclipse Silhouette',
      img: '/gallery-9.jpg',
      desc: 'Dramatic red backdrop lighting casting powerful minimalist silhouettes on stage.'
    },
    {
      id: 10,
      category: 'On Stage',
      title: 'Stage Confrontation',
      img: '/gallery-10.jpg',
      desc: 'Live high-tension dramatic dialogue scene performed under stage spotlights.'
    }
  ];

  const filteredItems = activeCategory === 'All Moments'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div class="space-y-0">
      {/* Hero Header */}
      <header class="max-w-container-max mx-auto px-4 md:px-margin-desktop py-16 relative overflow-hidden">
        <div class="relative z-10">
          <h1 class="font-display-xl text-5xl md:text-8xl uppercase text-primary-fixed mb-6 leading-tight">
            THE STAGE <br /> <span class="text-white opacity-20">IN REPOSE</span>
          </h1>
          <div class="w-24 h-1 bg-primary-fixed"></div>
        </div>

        <span class="material-symbols-outlined absolute -right-20 -top-20 text-[300px] opacity-5 select-none pointer-events-none">
          theater_comedy
        </span>
      </header>

      {/* Category Filters */}
      <section class="max-w-container-max mx-auto px-4 md:px-margin-desktop mb-12">
        <div class="flex flex-wrap gap-4">
          {['All Moments', 'On Stage', 'Backstage', 'Rehearsals', 'Community'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              class={`font-label-sm text-xs uppercase px-8 py-4 tracking-widest transition-all duration-300 font-bold ${
                activeCategory === cat
                  ? 'border-2 border-primary-fixed bg-primary-fixed text-on-primary-fixed glow-primary-fixed'
                  : 'border-2 border-primary-fixed-dim text-primary-fixed-dim hover:bg-primary-fixed hover:text-on-primary-fixed'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section class="max-w-container-max mx-auto px-4 md:px-margin-desktop pb-spotlight-padding">
        <div class="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxItem(item)}
              class="break-inside-avoid group cursor-pointer overflow-hidden relative bg-surface-container border border-white/5 hover:border-primary-fixed/40 transition-all duration-300 rounded-sm"
            >
              <div class="overflow-hidden bg-surface-container-high relative">
                <img 
                  src={item.img} 
                  alt={item.title}
                  class="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 pointer-events-none">
                  <span class="font-label-sm text-xs uppercase text-primary-fixed mb-1 font-bold">
                    {item.category}
                  </span>
                  <h3 class="font-headline-lg text-2xl uppercase text-white leading-tight flex items-center justify-between">
                    {item.title}
                    <ZoomIn size={18} class="text-primary-fixed opacity-80" />
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-lg flex items-center justify-center p-4">
          <button
            onClick={() => setActiveLightboxItem(null)}
            className="absolute top-6 right-6 text-white hover:text-primary-fixed transition-colors"
          >
            <X size={36} />
          </button>
          <div className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col items-center text-center p-4">
            <img
              src={activeLightboxItem.img}
              alt={activeLightboxItem.title}
              className="max-h-[70vh] w-auto object-contain border border-primary-fixed/20 shadow-2xl mb-6"
            />
            <h2 className="font-headline-lg text-3xl md:text-4xl uppercase text-primary-fixed">
              {activeLightboxItem.title}
            </h2>
            <p className="font-label-sm text-xs uppercase text-white/80 tracking-[0.2em] mt-2 font-bold">
              {activeLightboxItem.category}
            </p>
            <p className="font-body-md text-sm text-on-surface-variant max-w-lg mt-3">
              {activeLightboxItem.desc}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
