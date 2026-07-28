import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Drama, Film, Sparkles } from 'lucide-react';

export default function HomePage({ onOpenJoinModal }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const galleryImages = [
    {
      id: 1,
      title: 'Shadows & Silence',
      category: 'On Stage',
      img: '/gallery-1.jpg',
      desc: 'Atmospheric candlelit silhouette performance on the CHORUS stage.'
    },
    {
      id: 2,
      title: 'Open Air Circle',
      category: 'Rehearsals',
      img: '/gallery-2.jpg',
      desc: 'Outdoor ensemble script reading and rehearsal session in the college courtyard.'
    },
    {
      id: 3,
      title: 'Theatre Festival',
      category: 'On Stage',
      img: '/gallery-3.jpg',
      desc: 'CHORUS production presentation at Rabindra Okakura Bhavan.'
    },
    {
      id: 4,
      title: 'Dressing Room Prep',
      category: 'Backstage',
      img: '/gallery-4.jpg',
      desc: 'Intimate backstage makeup and costume preparation before the curtain call.'
    },
    {
      id: 5,
      title: 'The Ensemble',
      category: 'Community',
      img: '/gallery-5.jpg',
      desc: 'Full CHORUS drama club troupe curtain call after a standing ovation.'
    },
    {
      id: 6,
      title: 'Iti, Aranyak',
      category: 'Backstage',
      img: '/gallery-6.jpg',
      desc: 'Late night script writing and handwritten dialogue notes under dramatic red lighting.'
    },
    {
      id: 7,
      title: 'Cast Curtain Call',
      category: 'Community',
      img: '/gallery-7.jpg',
      desc: 'CHORUS cast and crew ensemble lined up on stage after a successful performance.'
    },
    {
      id: 8,
      title: 'Rongromyo at Gyan Manch',
      category: 'Community',
      img: '/gallery-8.jpg',
      desc: 'Celebrating the 2-day theatre festival outside Gyan Manch auditorium.'
    },
    {
      id: 9,
      title: 'Red Eclipse Silhouette',
      category: 'On Stage',
      img: '/gallery-9.jpg',
      desc: 'Dramatic red backdrop lighting casting powerful minimalist silhouettes on stage.'
    },
    {
      id: 10,
      title: 'Stage Confrontation',
      category: 'On Stage',
      img: '/gallery-10.jpg',
      desc: 'Live high-tension dramatic dialogue scene performed under stage spotlights.'
    }
  ];

  const getSlideOffset = (idx) => {
    const total = galleryImages.length;
    let diff = idx - currentSlide;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  return (
    <div class="space-y-0">
      {/* Hero Section */}
      <section class="relative min-h-[85vh] flex flex-col items-center justify-center text-center overflow-hidden px-4">
        {/* Background Image with Dark Overlay and Subtle Blur */}
        <div
          class="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-102 filter blur-[3px] brightness-[0.8] contrast-[1.1] transition-all duration-700"
          style={{ backgroundImage: `url('/hero-bg.jpg')` }}
        ></div>
        
        {/* Dark Spotlight Gradient Overlay */}
        <div class="absolute inset-0 z-0 bg-gradient-to-t from-surface via-surface/80 to-black/70 spotlight-gradient"></div>

        <div class="z-10 max-w-4xl mx-auto py-12">
          <div class="mb-6 flex justify-center">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ3O858UR70msNyraLpY8jL9W-yyJ7jJlLXgkivn3kb2N6SNR8wNwKpvffJBvH8ClnPSeGCMZE1O3KP1aSH06rfQVQgOC7RfyhltWSA768jwdSRrjCb_SuvgUK7fJZBNGDXTsEjJfcgyYKkYDhy07kRMKMnNffmH4FzZUDCxMaNng-sOhFRCLB9srYzf_r0qKPcwefNEGFPTBTDip0zi4iGJTpKaQf6fdABd227tsABFzTkvXNvVKtqMJLuXqIVYLRAFgStc5OCYg"
              alt="CHORUS IEM Drama Club Logo"
              class="w-56 md:w-80 drop-shadow-[0_0_30px_rgba(255,215,0,0.3)] object-contain mx-auto"
            />
          </div>

          <h1 class="font-display-xl text-6xl md:text-8xl text-primary-fixed mb-4 tracking-tighter uppercase">
            CHORUS
          </h1>

          <p class="font-headline-lg text-2xl md:text-3xl text-on-surface-variant mb-12 italic opacity-85 max-w-2xl mx-auto">
            "Where Every Soul Finds Its Stage"
          </p>

          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={onOpenJoinModal}
              class="bg-primary-fixed text-on-primary-fixed px-10 py-5 font-label-sm text-sm font-bold uppercase tracking-widest hover:glow-primary-fixed transition-all"
            >
              Join the Club
            </button>
            <Link
              to="/productions"
              class="border-2 border-primary-fixed text-primary-fixed px-10 py-5 font-label-sm text-sm font-bold uppercase tracking-widest hover:bg-primary-fixed hover:text-on-primary-fixed transition-all"
            >
              Upcoming Events
            </Link>
          </div>
        </div>

        <div class="absolute bottom-6 animate-bounce text-primary-fixed opacity-70">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* About Preview Section */}
      <section class="py-spotlight-padding px-4 md:px-margin-desktop max-w-container-max mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div class="relative">
            <div class="absolute -inset-4 border border-outline/20 z-0"></div>
            <div class="relative z-10 bg-surface-container-high p-3 aspect-[4/3] overflow-hidden">
              <img
                src="/legacy-bg.jpg"
                alt="CHORUS Street Drama Performance"
                class="w-full h-full object-cover contrast-[1.1] hover:scale-105 transition-all duration-700"
              />
            </div>
          </div>

          <div class="space-y-6">
            <div class="flex items-center gap-4">
              <div class="h-1 w-12 bg-primary-fixed"></div>
              <span class="font-label-sm text-xs text-primary-fixed uppercase tracking-widest">Our Legacy</span>
            </div>
            <h2 class="font-headline-lg text-4xl md:text-5xl text-on-surface uppercase">
              10 Years of Pure Artistic Excellence
            </h2>
            <p class="font-body-lg text-on-surface-variant leading-relaxed">
              CHORUS IEM Drama Club stands as a beacon for performers and visionaries alike. Born from the desire to push creative boundaries, we have spent a decade transforming the local stage into a canvas of human emotion.
            </p>
            <p class="font-body-lg text-on-surface-variant leading-relaxed">
              Our journey is marked by numerous accolades and standing ovations, but our greatest pride remains the community we've built—a place where the spotlight shines equally on every member.
            </p>
          </div>
        </div>
      </section>

      {/* Productions Preview */}
      <section class="bg-surface-container-lowest py-spotlight-padding border-y border-white/5">
        <div class="px-4 md:px-margin-desktop max-w-container-max mx-auto">
          <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span class="font-label-sm text-xs text-primary-fixed uppercase tracking-widest block mb-2">On Stage</span>
              <h2 class="font-headline-lg text-4xl md:text-5xl text-primary-fixed uppercase">Current Season</h2>
            </div>
            <Link
              to="/productions"
              class="text-on-surface-variant hover:text-primary-fixed font-label-sm text-xs uppercase tracking-widest flex items-center gap-2"
            >
              View Full Season <ArrowRight size={16} />
            </Link>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Tamasgranthi */}
            <div class="group relative overflow-hidden bg-surface-container shadow-2xl transition-all duration-500 hover:-translate-y-3">
              <div class="aspect-[2/3] overflow-hidden">
                <img
                  src="/poster-tamasgranthi.jpg"
                  alt="তামসগ্রন্থিস (Tamasgranthi)"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>
              <div class="absolute bottom-0 p-8 w-full border-l-4 border-primary-fixed ml-4 mb-4">
                <span class="font-label-sm text-xs text-primary-fixed/80 uppercase">16th August • Gyan Mancha</span>
                <h3 class="font-headline-lg text-3xl text-on-surface mt-1 uppercase">তামসগ্রন্থিস</h3>
              </div>
            </div>

            {/* Card 2: Japoner Jonno */}
            <div class="group relative overflow-hidden bg-surface-container shadow-2xl transition-all duration-500 hover:-translate-y-3">
              <div class="aspect-[2/3] overflow-hidden">
                <img
                  src="/poster-japoner-jonno.jpg"
                  alt="যাপনের জন্য (Japoner Jonno)"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>
              <div class="absolute bottom-0 p-8 w-full border-l-4 border-primary-fixed ml-4 mb-4">
                <span class="font-label-sm text-xs text-primary-fixed/80 uppercase">Based on Manto</span>
                <h3 class="font-headline-lg text-3xl text-on-surface mt-1 uppercase">যাপনের জন্য</h3>
              </div>
            </div>

            {/* Card 3: Menzone */}
            <div class="group relative overflow-hidden bg-surface-container shadow-2xl transition-all duration-500 hover:-translate-y-3">
              <div class="aspect-[2/3] overflow-hidden">
                <img
                  src="/poster-menzone.jpg"
                  alt="MENZONE"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>
              <div class="absolute bottom-0 p-8 w-full border-l-4 border-primary-fixed ml-4 mb-4">
                <span class="font-label-sm text-xs text-primary-fixed/80 uppercase">14th December • Gyan Mancha</span>
                <h3 class="font-headline-lg text-3xl text-on-surface mt-1 uppercase">MENZONE</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Teaser Section - Automatic Carousel */}
      <section class="bg-surface-container-lowest py-spotlight-padding border-t border-white/5 overflow-hidden">
        <div class="px-4 md:px-margin-desktop max-w-container-max mx-auto">
          <div class="mb-10">
            <h2 class="font-headline-lg text-4xl md:text-5xl text-primary-fixed uppercase">Gallery Highlights</h2>
          </div>

          {/* Side-Preview Carousel Frame */}
          <div class="relative w-full h-[380px] sm:h-[450px] md:h-[580px] flex items-center justify-center overflow-hidden py-4 select-none">
            {galleryImages.map((item, idx) => {
              const offset = getSlideOffset(idx);
              const isCenter = offset === 0;
              const isLeft = offset === -1;
              const isRight = offset === 1;

              if (!isCenter && !isLeft && !isRight) return null;

              let styleClasses = '';
              if (isCenter) {
                styleClasses = 'opacity-100 z-30 scale-100 translate-x-0 shadow-[0_20px_60px_rgba(0,0,0,0.9)] border-2 border-primary-fixed/40 hover:scale-[1.04] hover:-translate-y-3 hover:border-primary-fixed hover:shadow-[0_30px_80px_rgba(255,215,0,0.3)] cursor-pointer';
              } else if (isLeft) {
                styleClasses = 'opacity-40 hover:opacity-90 z-10 scale-[0.82] hover:scale-[0.88] hover:-translate-y-2 -translate-x-[60%] sm:-translate-x-[65%] md:-translate-x-[70%] cursor-pointer border border-white/10 filter brightness-75 hover:brightness-100 hover:shadow-2xl hover:border-primary-fixed/40';
              } else if (isRight) {
                styleClasses = 'opacity-40 hover:opacity-90 z-10 scale-[0.82] hover:scale-[0.88] hover:-translate-y-2 translate-x-[60%] sm:translate-x-[65%] md:translate-x-[70%] cursor-pointer border border-white/10 filter brightness-75 hover:brightness-100 hover:shadow-2xl hover:border-primary-fixed/40';
              }

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    if (isLeft || isRight) setCurrentSlide(idx);
                  }}
                  class={`absolute group w-[75%] sm:w-[70%] md:w-[60%] h-full rounded-2xl overflow-hidden bg-black transition-all duration-500 ease-out transform ${styleClasses}`}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    class="w-full h-full object-contain md:object-cover bg-black transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Take Your Place Center Stage Section */}
      <section class="py-spotlight-padding px-4 md:px-margin-desktop max-w-container-max mx-auto" id="join">
        <div class="bg-surface-container-low p-8 md:p-16 border border-outline-variant/20 relative ticket-notch">
          <div class="absolute top-0 right-0 p-8 md:p-12 opacity-10 pointer-events-none">
            <span class="material-symbols-outlined text-[8rem] md:text-[10rem]">mail</span>
          </div>
          <div class="max-w-2xl relative z-10">
            <span class="font-label-sm text-xs text-primary-fixed uppercase tracking-[0.3em] mb-2 block">Get On Stage</span>
            <h2 class="font-headline-lg text-4xl md:text-5xl text-primary-fixed mb-8 uppercase">Take Your Place Center Stage</h2>
            <form onSubmit={(e) => { e.preventDefault(); onOpenJoinModal(); }} class="space-y-6">
              <div>
                <input
                  required
                  type="text"
                  placeholder="FULL NAME"
                  class="w-full bg-transparent border-0 border-b-2 border-outline-variant py-4 px-0 focus:ring-0 focus:border-primary-fixed font-label-sm text-xs uppercase tracking-widest text-on-surface outline-none transition-all"
                />
              </div>
              <div>
                <input
                  required
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  class="w-full bg-transparent border-0 border-b-2 border-outline-variant py-4 px-0 focus:ring-0 focus:border-primary-fixed font-label-sm text-xs uppercase tracking-widest text-on-surface outline-none transition-all"
                />
              </div>
              <div>
                <select
                  required
                  class="w-full bg-transparent border-0 border-b-2 border-outline-variant py-4 px-0 focus:ring-0 focus:border-primary-fixed font-label-sm text-xs uppercase tracking-widest text-on-surface outline-none transition-all appearance-none cursor-pointer"
                >
                  <option class="bg-surface text-on-surface" value="">SELECT DEPARTMENT</option>
                  <option class="bg-surface text-on-surface" value="ACTING">ACTING</option>
                  <option class="bg-surface text-on-surface" value="DIRECTION">DIRECTION</option>
                  <option class="bg-surface text-on-surface" value="TECHNICAL">TECHNICAL</option>
                  <option class="bg-surface text-on-surface" value="WRITING">WRITING</option>
                </select>
              </div>
              <button
                type="submit"
                class="bg-primary-fixed text-on-primary-fixed px-12 py-5 font-label-sm font-bold uppercase tracking-widest hover:glow-primary-fixed transition-all mt-4"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
