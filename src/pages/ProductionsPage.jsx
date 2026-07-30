import React, { useState, useEffect } from 'react';
import { Ticket, ArrowRight, Calendar, Filter } from 'lucide-react';

export default function ProductionsPage({ onOpenJoinModal }) {
  const [selectedTicketShow, setSelectedTicketShow] = useState(null);

  const archiveShows = [
    {
      id: 'menzone',
      year: '2025',
      genre: 'DRAMA',
      title: 'MENZONE',
      img: '/poster-menzone.jpg',
      desc: 'A powerful performance staged at Gyan Mancha portraying raw emotion, camaraderie, and intense dramatic storytelling.'
    },
    {
      id: 'bharatbarsha',
      year: '2025',
      genre: 'DRAMA',
      title: 'ভারতবর্ষ (BHARATBARSHA)',
      img: '/bharatbarsha.jpg',
      desc: 'এই দেশে আবার দ্বেষ কিসের? সৈয়দ মুস্তফা সিরাজের গল্প অবলম্বনে নির্মিত নাট্য। ৪৮তম কলকাতা আন্তর্জাতিক বইমেলা (স্টল ১৯৮, গেট ৫ প্রাঙ্গণ) প্রাঙ্গণে অনুষ্ঠিত।'
    },
    {
      id: 'sanghar',
      year: '2025',
      genre: 'DRAMA',
      title: 'সংহার (SANGHAR)',
      img: '/sanghar.png',
      desc: 'ধ্বংস থেকেই পুনর্জাগরণ হয় কি? রচনায় সায়নদীপ মল্লিক ও পারিজাত ভট্টাচার্য। ধ্বনি: কৃষ্ণদেব চক্রবর্তী | আবহ: সৌপ্তিক বিশ্বাস ও সায়ন দাস | আলো: অভিনন্দা দত্ত | মঞ্চ: সৌম্যনীল দত্ত, অর্পণ কুমার সাহু, সাহিল আনসারি।'
    }
  ];

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
              "Every production is a heartbeat, every performance a breath. Experience the raw intensity of the 2026 season."
            </p>
          </div>

          {/* Major Featured Production Card */}
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div class="lg:col-span-6 group relative overflow-hidden min-h-[500px] md:h-[600px] bg-surface-container-high rounded-2xl transition-all duration-500 hover:scale-[1.03] hover:-translate-y-3 hover:shadow-[0_30px_60px_rgba(0,0,0,0.9)] cursor-pointer">
              <div
                class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
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
                <h3 class="font-headline-lg text-4xl md:text-5xl text-on-background uppercase mb-2">
                  তামসগ্রন্থিস
                </h3>
                <p class="text-on-surface-variant font-body-md max-w-lg mb-6 text-sm">
                  A Chorus Production staged live at Gyan Mancha. Direction & Script by Sanyandeep & Parijat.
                </p>
                <button
                  disabled
                  class="border-2 border-primary-fixed text-primary-fixed px-8 py-4 font-label-sm text-xs font-bold uppercase rounded-full cursor-not-allowed opacity-90"
                >
                  Tickets Sold Out
                </button>
              </div>
            </div>

            <div class="lg:col-span-6 flex flex-col">
              <div class="flex-1 group relative overflow-hidden bg-black min-h-[500px] md:h-[600px] rounded-2xl transition-all duration-500 hover:scale-[1.03] hover:-translate-y-3 hover:shadow-[0_30px_60px_rgba(0,0,0,0.9)] cursor-pointer">
                <div
                  class="absolute inset-0 bg-contain bg-no-repeat bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('/poster-japoner-jonno.jpg')`
                  }}
                ></div>
                <div class="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"></div>
                <div class="absolute bottom-0 left-0 p-8 md:p-12 z-10">
                  <div class="flex gap-4 mb-4 flex-wrap">
                    <span class="bg-primary-container text-on-primary-fixed px-3 py-1 font-label-sm text-xs font-bold uppercase">
                      FEATURED DRAMA
                    </span>
                  </div>
                  <h4 class="font-headline-lg text-4xl md:text-5xl text-on-background uppercase mb-2">যাপনের জন্য</h4>
                  <p class="text-on-surface-variant font-body-md max-w-lg text-sm">
                    Based on Manto's "Hatak" & "Mombatti ki Aansu". An evocative theatrical exploration of human resilience, social contrast, and emotional depth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Masterpieces Archive Section */}
      <section class="bg-surface-container-lowest py-spotlight-padding border-t border-white/5">
        <div class="max-w-container-max mx-auto px-4 md:px-margin-desktop">
          <div class="mb-10">
            <h2 class="font-headline-lg text-4xl text-on-background uppercase">Past Masterpieces</h2>
          </div>

          {/* Continuous Infinite Slide Marquee */}
          <div class="relative w-full overflow-hidden py-4 select-none">
            <div class="animate-continuous-marquee flex gap-6">
              {[...archiveShows, ...archiveShows, ...archiveShows, ...archiveShows].map((show, idx) => (
                <div
                  key={`${show.id}-${idx}`}
                  class="w-[260px] sm:w-[360px] md:w-[420px] flex-shrink-0 bg-surface-container-low group cursor-pointer overflow-hidden hover:border-primary-fixed/50 hover:shadow-[0_25px_50px_rgba(0,0,0,0.85)] hover:scale-[1.05] hover:-translate-y-3 transition-all duration-500 rounded-2xl"
                >
                  <div class="relative h-56 sm:h-64 md:h-72 overflow-hidden bg-black rounded-t-2xl">
                    <img
                      src={show.img}
                      alt={show.title}
                      class="w-full h-full object-contain md:object-cover bg-black rounded-t-2xl transition-transform duration-700 group-hover:scale-110"
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
                      onClick={() => setSelectedTicketShow({ title: show.title, date: show.year, desc: show.desc, img: show.img })}
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

      {/* Production Details Modal */}
      {selectedTicketShow && (
        <div class="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div class="bg-surface-container-high border border-primary-fixed/40 p-6 sm:p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto space-y-5 rounded-3xl text-center shadow-2xl">
            {selectedTicketShow.img && (
              <img
                src={selectedTicketShow.img}
                alt={selectedTicketShow.title}
                class="w-full h-56 object-contain rounded-2xl bg-black"
              />
            )}
            <h3 class="font-headline-lg text-2xl sm:text-3xl text-primary-fixed uppercase">{selectedTicketShow.title}</h3>
            <p class="font-body-md text-on-surface-variant text-sm leading-relaxed text-left bg-surface-container-low p-4 rounded-xl border border-white/5">
              {selectedTicketShow.desc}
            </p>
            <div class="bg-surface-container p-4 rounded-xl border border-outline-variant/30 text-left font-label-sm text-xs space-y-1.5">
              <p><span class="text-primary-fixed font-bold">Production Year:</span> {selectedTicketShow.date}</p>
              <p><span class="text-primary-fixed font-bold">Venue:</span> Gyan Mancha / IEM Stage</p>
            </div>
            <div class="pt-2">
              <button
                onClick={() => setSelectedTicketShow(null)}
                class="w-full bg-primary-fixed text-black font-label-sm text-xs uppercase font-bold py-3.5 rounded-full hover:glow-primary-fixed transition-all active:scale-95"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
