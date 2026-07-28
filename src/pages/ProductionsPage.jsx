import React, { useState, useEffect } from 'react';
import { Ticket, ArrowRight, Calendar, Filter } from 'lucide-react';

export default function ProductionsPage({ onOpenJoinModal }) {
  const [activeFilter, setActiveFilter] = useState('ALL WORKS');
  const [selectedTicketShow, setSelectedTicketShow] = useState(null);
  const [archiveSlide, setArchiveSlide] = useState(0);

  const archiveShows = [
    {
      id: 'earnest',
      year: '2023',
      genre: 'COMEDY',
      title: 'THE IMPORTANCE OF BEING EARNEST',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_hE---47faeb5uujk3-cYN7JyKYQGxB4PpPCkNnd4ef-lzo4ChZlHKTg2pV6P1qnNEoUk0v2M6QyuQDl2IW9VIu3WohKAJufWsekqII_wu511v4EFf8_blKmBoXDLCsYdQ0QIU2niE77SJL_k0zou2sLjZ5TLtaiu58tNJ_b4BWUtRv6dgfE_n9YT7ZP-UuS7hLumZ2WODu9OWuJV3p4EafVly33yu9m1uEBwjxwkESRvS_tSS_QBYVr3-i5eoHCax5N4rDWy3zw',
      desc: 'Wilde’s satirical masterpiece brought to life with razor-sharp comedic timing and period costumes.'
    },
    {
      id: 'romeo',
      year: '2023',
      genre: 'TRAGEDY',
      title: 'ROMEO & JULIET',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMdX5dJcJbesBH1QXduW9ZZYypOb18rAcJcubTMfqlzoKdhTZL06LfIkvqDVWgXLtAhG88ImNnibXF_qLvd7Sj_Hf3xbId2S6HxjEYw9c3tF-I7AcX8hCOWUwljbcQfR_L23lRCNHmNRXSbCT198_e1GcndB4CZ2ZD9yc4a2sSGwcIxToLS1VqpZR48qD2n_-eKQEClskT1Y9KhEyEqN1kIN30ZIvURuMaTDwybHMwtCDdbw04s0QFPSl9XEHtkAj1Rw5397EEuEE',
      desc: 'A poignant and visceral rendition set against an urban noir backdrop.'
    },
    {
      id: 'cabaret',
      year: '2022',
      genre: 'MUSICAL',
      title: 'CABARET',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBv3pNAhY9zoRFSxCytmqfL31VYTEmn2JEBgMqxBxmopPWWJOg8tsdYMg-lPQzu69Q0sSoEbD9Frj6qyU2g3o648wVSCYvMbWiNYKySXMipfg2adFJrPExoOwbYyzmWA9yRe8M18X2sNodB0uKBTBe61iztiPqhdBKWo1aAWEeMu_mscEGZlyen0Jytp4LOeEfcjE0EuaAjXjNiddg9qw5oLW4-YPjkhIgbN7f6NQ4_H4F-z_oFV-jTcmmYAXAfg2k5rKsuGafNJPE',
      desc: 'An immersive musical experience depicting the provocative cabaret culture of 1930s Berlin.'
    },
    {
      id: 'godot',
      year: '2021',
      genre: 'TRAGEDY',
      title: 'WAITING FOR GODOT',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgmOs7WgRB9_DtBBCvKRulAkE0VCJ0JiA8fCmC6CAs5Vk5IutitWNhZPRzFpO21cGsbWzBjoMOklbGiAOyrrNrFixk5EftYGtOpk9mU7fS4ewKf_QysQ3My8qgORvHCqrGzH_RDXa1IyGInvL8MInWBGdQJU9dJnwKSvWYNTxv90j_d4rdSJaecN2t30V9Hg4mdPtRD7-1S3iH31R6kcvhTOkXm4h4VX0u_3CyafyOV5l6Ds8o3zADJEykhBaUqncMlqkHaDGAzKs',
      desc: 'Beckett’s minimalist existential classic that won top honors at national collegiate festivals.'
    }
  ];

  const filteredShows = activeFilter === 'ALL WORKS'
    ? archiveShows
    : archiveShows.filter(s => s.genre === activeFilter);

  useEffect(() => {
    setArchiveSlide(0);
  }, [activeFilter]);

  useEffect(() => {
    if (filteredShows.length <= 1) return;
    const interval = setInterval(() => {
      setArchiveSlide((prev) => (prev + 1) % filteredShows.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [filteredShows.length]);

  const getSlideOffset = (idx) => {
    const total = filteredShows.length;
    if (total <= 1) return 0;
    let diff = idx - archiveSlide;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <div class="space-y-0">
      {/* Current Season Hero */}
      <header class="relative pt-12 pb-24 bg-surface overflow-hidden">
        <div class="absolute top-0 right-0 opacity-10 pointer-events-none">
          <span class="material-symbols-outlined text-[380px]" style={{ fontVariationSettings: "'FILL' 1" }}>
            theater_comedy
          </span>
        </div>

        <div class="max-w-container-max mx-auto px-4 md:px-margin-desktop relative">
          <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span class="font-label-sm text-xs text-primary-fixed uppercase tracking-widest block mb-4">
                On Stage Now
              </span>
              <h1 class="font-display-xl text-5xl md:text-8xl text-primary-fixed uppercase leading-none">
                The Current <br />Season.
              </h1>
            </div>
            <p class="max-w-md font-body-lg text-on-surface-variant italic border-l-2 border-outline-variant pl-6">
              "Every production is a heartbeat, every performance a breath. Experience the raw intensity of the 2024 season."
            </p>
          </div>

          {/* Major Featured Production Card */}
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div class="lg:col-span-8 group relative overflow-hidden min-h-[500px] md:h-[600px] bg-surface-container-high">
              <div
                class="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{
                  backgroundImage: `url('/poster-tamasgranthi.jpg')`
                }}
              ></div>
              <div class="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"></div>
              <div class="absolute bottom-0 left-0 p-8 md:p-12">
                <div class="flex gap-4 mb-4 flex-wrap">
                  <span class="bg-primary-container text-on-primary-fixed px-3 py-1 font-label-sm text-xs font-bold uppercase">
                    CHORUS PRODUCTION
                  </span>
                  <span class="border border-primary-fixed text-primary-fixed px-3 py-1 font-label-sm text-xs font-bold uppercase">
                    16TH AUGUST • 4:00 PM IST
                  </span>
                </div>
                <h3 class="font-headline-lg text-4xl md:text-6xl text-on-background uppercase mb-2">
                  তামসগ্রন্থিস
                </h3>
                <p class="text-on-surface-variant font-body-md max-w-lg mb-6 text-sm md:text-base">
                  A Chorus Production staged live at Gyan Mancha. Direction & Script by Sanyandeep & Parijat.
                </p>
                <button
                  onClick={() => setSelectedTicketShow({ title: 'তামসগ্রন্থিস (Tamasgranthi)', date: '16th August • Gyan Mancha' })}
                  class="border-2 border-primary-fixed text-primary-fixed px-8 py-4 font-label-sm text-xs font-bold uppercase hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors inline-flex items-center gap-2"
                >
                  <Ticket size={18} /> Reserve Tickets
                </button>
              </div>
            </div>

            <div class="lg:col-span-4 flex flex-col gap-8">
              <div class="flex-1 group relative overflow-hidden bg-surface-container min-h-[260px]">
                <div
                  class="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('/poster-japoner-jonno.jpg')`
                  }}
                ></div>
                <div class="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                <div class="absolute bottom-6 left-6 right-6">
                  <h4 class="font-headline-lg text-2xl text-on-background uppercase">যাপনের জন্য</h4>
                  <p class="font-label-sm text-xs text-primary-fixed font-bold uppercase">BASED ON MANTO</p>
                </div>
              </div>

              <div class="flex-1 group relative overflow-hidden bg-surface-container min-h-[260px]">
                <div
                  class="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('/poster-menzone.jpg')`
                  }}
                ></div>
                <div class="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                <div class="absolute bottom-6 left-6 right-6">
                  <h4 class="font-headline-lg text-2xl text-on-background uppercase">MENZONE</h4>
                  <p class="font-label-sm text-xs text-primary-fixed font-bold uppercase">14TH DECEMBER • GYAN MANCHA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Masterpieces Archive Section */}
      <section class="bg-surface-container-lowest py-spotlight-padding border-t border-white/5">
        <div class="max-w-container-max mx-auto px-4 md:px-margin-desktop">
          <div class="flex flex-col md:flex-row justify-between items-start md:items-baseline mb-12 gap-6">
            <h2 class="font-headline-lg text-4xl text-on-background uppercase">Past Masterpieces</h2>

            <div class="flex gap-4 font-label-sm text-xs text-on-surface-variant overflow-x-auto pb-2 w-full md:w-auto">
              {['ALL WORKS', 'TRAGEDY', 'COMEDY', 'MUSICAL'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  class={`pb-1 uppercase tracking-widest font-bold transition-all ${
                    activeFilter === cat
                      ? 'text-primary-fixed border-b-2 border-primary-fixed'
                      : 'hover:text-primary-fixed'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Continuous Infinite Slide Marquee */}
          <div class="relative w-full overflow-hidden py-4 select-none">
            <div class="animate-continuous-marquee flex gap-6">
              {[...filteredShows, ...filteredShows, ...filteredShows, ...filteredShows].map((show, idx) => (
                <div
                  key={`${show.id}-${idx}`}
                  class="w-[260px] sm:w-[360px] md:w-[420px] flex-shrink-0 bg-surface-container-low group cursor-pointer overflow-hidden border border-white/10 hover:border-primary-fixed/50 hover:shadow-[0_20px_50px_rgba(255,215,0,0.15)] hover:scale-[1.03] transition-all duration-500 rounded-2xl"
                >
                  <div class="relative h-56 sm:h-64 md:h-72 overflow-hidden bg-black">
                    <img
                      src={show.img}
                      alt={show.title}
                      class="w-full h-full object-contain md:object-cover bg-black transition-transform duration-700 group-hover:scale-110"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent"></div>
                  </div>
                  <div class="p-5 sm:p-6 space-y-2.5 sm:space-y-3">
                    <p class="font-label-sm text-xs text-primary-fixed font-bold tracking-widest uppercase">
                      {show.year} • {show.genre}
                    </p>
                    <h4 class="font-headline-lg text-lg sm:text-xl uppercase text-on-background leading-tight">
                      {show.title}
                    </h4>
                    <p class="font-body-md text-xs text-on-surface-variant line-clamp-2">
                      {show.desc}
                    </p>
                    <button
                      onClick={() => setSelectedTicketShow({ title: show.title, date: show.year })}
                      class="text-primary-fixed font-label-sm text-xs tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all uppercase pt-2 font-bold"
                    >
                      View Details <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ticket Modal */}
      {selectedTicketShow && (
        <div class="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div class="bg-surface-container-high border border-primary-fixed/40 p-6 sm:p-8 max-w-md w-full space-y-6 rounded-3xl text-center shadow-2xl">
            <Ticket className="w-12 h-12 text-primary-fixed mx-auto" />
            <h3 class="font-headline-lg text-2xl sm:text-3xl text-primary-fixed uppercase">{selectedTicketShow.title}</h3>
            <p class="font-body-md text-on-surface-variant text-sm">
              Showtimes and pass allocations for <span class="text-primary-fixed">{selectedTicketShow.date}</span> are available for IEM students and faculty.
            </p>
            <div class="bg-surface-container p-4 border border-outline-variant/30 text-left font-label-sm text-xs space-y-1">
              <p><span class="text-primary-fixed">Venue:</span> IEM Main Auditorium</p>
              <p><span class="text-primary-fixed">Gate Pass:</span> Required</p>
              <p><span class="text-primary-fixed">Price:</span> Free for Members / ₹100 Guest</p>
            </div>
            <button
              onClick={() => {
                setSelectedTicketShow(null);
                onOpenJoinModal();
              }}
              class="w-full bg-primary-container text-on-primary-container font-label-sm text-xs uppercase font-bold py-3 hover:glow-primary-fixed transition-all"
            >
              Reserve Seat / Contact Club
            </button>
            <button
              onClick={() => setSelectedTicketShow(null)}
              class="block mx-auto text-xs text-on-surface-variant hover:text-white uppercase font-label-sm pt-2"
            >
              Close Window
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
