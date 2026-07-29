import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Drama, Film, Sparkles } from 'lucide-react';
import HeroFrameCanvas from '../components/HeroFrameCanvas';

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
    }, 2500);
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  return (
    <div class="space-y-0">
      {/* Scroll-Driven Curtain & Spotlight Hero Section */}
      <HeroFrameCanvas>
        {({ scrollProgress }) => {
          // 1. Logo drops from upper stage arch after curtains open wide (scrollProgress 0.55 -> 0.75)
          const logoThreshold = 0.55;
          const logoProgress = scrollProgress < logoThreshold ? 0 : Math.min(1, (scrollProgress - logoThreshold) / 0.20);
          const logoOpacity = Math.min(1, logoProgress * 1.6);

          let logoTranslateY = 0;
          if (logoProgress <= 0.65) {
            const p = logoProgress / 0.65;
            logoTranslateY = (1 - (p * p)) * -90;
          } else if (logoProgress <= 0.85) {
            const p = (logoProgress - 0.65) / 0.20;
            logoTranslateY = -20 * (4 * p * (1 - p));
          } else if (logoProgress <= 0.95) {
            const p = (logoProgress - 0.85) / 0.10;
            logoTranslateY = -5 * (4 * p * (1 - p));
          } else {
            logoTranslateY = 0;
          }

          const logoScale = logoProgress <= 0.65 ? 0.92 + (logoProgress / 0.65) * 0.08 : 1.0;

          // 2. Title "CHORUS" rises up from down (scrollProgress 0.76 -> 0.84)
          const titleThreshold = 0.76;
          const titleProgress = scrollProgress < titleThreshold ? 0 : Math.min(1, (scrollProgress - titleThreshold) / 0.08);
          const titleOpacity = titleProgress;
          const titleTranslateY = (1 - titleProgress) * 45;

          // 3. Subtitle "Where Every Soul Finds Its Stage" comes from behind stage to front (scrollProgress 0.85 -> 0.92)
          const subtitleThreshold = 0.85;
          const subtitleProgress = scrollProgress < subtitleThreshold ? 0 : Math.min(1, (scrollProgress - subtitleThreshold) / 0.07);
          const subtitleOpacity = subtitleProgress;
          const subtitleScale = 0.4 + (subtitleProgress * 0.6);
          const subtitleBlur = (1 - subtitleProgress) * 6;

          // 4. Buttons "Join the Club" & "Upcoming Events" rise up from down (scrollProgress 0.93 -> 0.99)
          const buttonsThreshold = 0.93;
          const buttonsProgress = scrollProgress < buttonsThreshold ? 0 : Math.min(1, (scrollProgress - buttonsThreshold) / 0.06);
          const buttonsOpacity = buttonsProgress;
          const buttonsTranslateY = (1 - buttonsProgress) * 45;

          return (
            <div class="max-w-4xl mx-auto py-8 sm:py-12">
              {/* Logo - Drops & Bounces cleanly in open stage center */}
              <div
                class="mb-4 sm:mb-6 flex justify-center transition-all duration-300 ease-out"
                style={{
                  opacity: logoOpacity,
                  transform: `translateY(${logoTranslateY}px) scale(${logoScale})`
                }}
              >
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ3O858UR70msNyraLpY8jL9W-yyJ7jJlLXgkivn3kb2N6SNR8wNwKpvffJBvH8ClnPSeGCMZE1O3KP1aSH06rfQVQgOC7RfyhltWSA768jwdSRrjCb_SuvgUK7fJZBNGDXTsEjJfcgyYKkYDhy07kRMKMnNffmH4FzZUDCxMaNng-sOhFRCLB9srYzf_r0qKPcwefNEGFPTBTDip0zi4iGJTpKaQf6fdABd227tsABFzTkvXNvVKtqMJLuXqIVYLRAFgStc5OCYg"
                  alt="CHORUS IEM Drama Club Logo"
                  class="w-36 sm:w-56 md:w-72 drop-shadow-[0_0_30px_rgba(255,215,0,0.3)] object-contain mx-auto"
                />
              </div>

              {/* 1st Text: Title "CHORUS" rises up from down */}
              <h1
                class="font-display-xl text-4xl sm:text-6xl md:text-8xl text-primary-fixed mb-2 sm:mb-4 tracking-tighter uppercase transition-all duration-300 ease-out"
                style={{
                  opacity: titleOpacity,
                  transform: `translateY(${titleTranslateY}px)`
                }}
              >
                CHORUS
              </h1>

              {/* 2nd Text: Motto Subtitle zooms from behind stage to front */}
              <p
                class="font-headline-lg text-base sm:text-2xl md:text-3xl text-on-surface-variant mb-4 sm:mb-6 italic opacity-85 max-w-2xl mx-auto px-2 transition-all duration-300 ease-out"
                style={{
                  opacity: subtitleOpacity,
                  transform: `scale(${subtitleScale})`,
                  filter: `blur(${subtitleBlur}px)`
                }}
              >
                "Where Every Soul Finds Its Stage"
              </p>

              {/* 3rd Element: Action Buttons rise up from down */}
              <div
                class="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center w-full max-w-xs sm:max-w-none mx-auto transition-all duration-300 ease-out"
                style={{
                  opacity: buttonsOpacity,
                  transform: `translateY(${buttonsTranslateY}px)`,
                  pointerEvents: buttonsProgress >= 0.5 ? 'auto' : 'none'
                }}
              >
                <button
                  onClick={onOpenJoinModal}
                  class="w-full sm:w-auto bg-transparent border-2 border-primary-fixed text-white sm:text-black px-6 sm:px-10 py-3.5 sm:py-5 font-label-sm text-xs sm:text-sm font-bold uppercase tracking-widest rounded-full hover:bg-primary-fixed hover:text-black hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  Join the Club
                </button>
                <Link
                  to="/productions"
                  class="w-full sm:w-auto bg-primary-fixed text-on-primary-fixed px-6 sm:px-10 py-3.5 sm:py-5 font-label-sm text-xs sm:text-sm font-bold uppercase tracking-widest rounded-full hover:glow-primary-fixed hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  Upcoming Events
                </Link>
              </div>

              {/* Scroll Cue Arrow */}
              <div
                class="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-primary-fixed opacity-70 transition-opacity duration-300 pointer-events-none"
                style={{ opacity: buttonsOpacity * 0.7 }}
              >
                <ChevronDown size={28} />
              </div>
            </div>
          );
        }}
      </HeroFrameCanvas>

      {/* About Preview Section */}
      <section class="py-24 md:py-32 px-4 md:px-12 w-full mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          <div class="lg:col-span-6 relative w-full">
            <div class="absolute -inset-2 md:-inset-4 border border-outline/20 z-0 rounded-2xl"></div>
            <div class="relative z-10 bg-surface-container-high p-2 md:p-3 h-[380px] sm:h-[480px] md:h-[560px] w-full overflow-hidden rounded-xl">
              <img
                src="/legacy-bg.jpg"
                alt="CHORUS Street Drama Performance"
                class="w-full h-full object-cover contrast-[1.1] hover:scale-105 transition-all duration-700 rounded-lg"
              />
            </div>
          </div>

          <div class="lg:col-span-6 space-y-6 w-full">
            <div class="flex items-center gap-4">
              <div class="h-1 w-12 bg-primary-fixed"></div>
              <span class="font-label-sm text-xs text-primary-fixed uppercase tracking-widest">Our Legacy</span>
            </div>
            <h2 class="font-headline-lg text-4xl md:text-5xl lg:text-6xl text-on-surface uppercase leading-tight">
              10 Years of Pure Artistic Excellence
            </h2>
            <p class="font-body-lg text-on-surface-variant text-base md:text-lg leading-relaxed">
              CHORUS IEM Drama Club stands as a beacon for performers and visionaries alike. Born from the desire to push creative boundaries, we have spent a decade transforming the local stage into a canvas of human emotion.
            </p>
            <p class="font-body-lg text-on-surface-variant text-base md:text-lg leading-relaxed">
              Our journey is marked by numerous accolades and standing ovations, but our greatest pride remains the community we've built—a place where the spotlight shines equally on every member.
            </p>
          </div>
        </div>
      </section>

      {/* Productions Preview */}
      <section class="bg-surface-container-lowest py-24 md:py-32 border-y border-white/5">
        <div class="px-4 md:px-12 w-full mx-auto">
          <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <span class="font-label-sm text-xs text-primary-fixed uppercase tracking-widest block mb-2">On Stage</span>
              <h2 class="font-headline-lg text-4xl md:text-5xl lg:text-6xl text-primary-fixed uppercase">Current Season</h2>
            </div>
            <Link
              to="/productions"
              class="text-on-surface-variant hover:text-primary-fixed font-label-sm text-xs uppercase tracking-widest flex items-center gap-2"
            >
              View Full Season <ArrowRight size={16} />
            </Link>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full">
            {/* Card 1: Tamasgranthi */}
            <div class="group relative overflow-hidden bg-surface-container shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-2xl border border-white/10 h-[380px] sm:h-[480px] md:h-[560px]">
              <div class="w-full h-full overflow-hidden">
                <img
                  src="/poster-tamasgranthi.jpg"
                  alt="তামসগ্রন্থিস (Tamasgranthi)"
                  class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>
              <div class="absolute bottom-0 p-8 md:p-10 w-full border-l-4 border-primary-fixed ml-4 mb-4">
                <span class="font-label-sm text-xs text-primary-fixed/80 uppercase">16th August • Gyan Mancha</span>
                <h3 class="font-headline-lg text-3xl md:text-4xl text-on-surface mt-1 uppercase">তামসগ্রন্থিস</h3>
              </div>
            </div>

            {/* Card 2: Japoner Jonno */}
            <div class="group relative overflow-hidden bg-surface-container shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-2xl border border-white/10 h-[380px] sm:h-[480px] md:h-[560px]">
              <div class="w-full h-full overflow-hidden">
                <img
                  src="/poster-japoner-jonno.jpg"
                  alt="যাপনের জন্য (Japoner Jonno)"
                  class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>
              <div class="absolute bottom-0 p-8 md:p-10 w-full border-l-4 border-primary-fixed ml-4 mb-4">
                <span class="font-label-sm text-xs text-primary-fixed/80 uppercase">Featured Production</span>
                <h3 class="font-headline-lg text-3xl md:text-4xl text-on-surface mt-1 uppercase">যাপনের জন্য</h3>
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
      <section class="py-16 md:py-24 px-4 md:px-12 w-full mx-auto" id="join">
        <div class="bg-surface-container-low p-8 md:p-12 lg:p-16 border border-outline-variant/20 relative rounded-3xl overflow-hidden shadow-2xl w-full">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full relative z-10">
            <div class="lg:col-span-5 space-y-4">
              <span class="font-label-sm text-xs text-primary-fixed uppercase tracking-[0.3em] block">Get On Stage</span>
              <h2 class="font-headline-lg text-4xl md:text-5xl lg:text-6xl text-primary-fixed uppercase leading-tight">Take Your Place Center Stage</h2>
              <p class="font-body-lg text-on-surface-variant text-base leading-relaxed">
                Whether your passion lies in acting, writing, directing, or managing light & sound behind the curtains, CHORUS is your launchpad. Submit your application to join our upcoming auditions.
              </p>
            </div>
            
            <div class="lg:col-span-7 w-full">
              <form onSubmit={(e) => { e.preventDefault(); onOpenJoinModal(); }} class="space-y-6">
                <div>
                  <input
                    required
                    type="text"
                    placeholder="FULL NAME"
                    class="w-full bg-transparent border-0 border-b-2 border-outline-variant py-3 px-0 focus:ring-0 focus:border-primary-fixed font-label-sm text-xs uppercase tracking-widest text-on-surface outline-none transition-all"
                  />
                </div>
                <div>
                  <input
                    required
                    type="email"
                    placeholder="EMAIL ADDRESS"
                    class="w-full bg-transparent border-0 border-b-2 border-outline-variant py-3 px-0 focus:ring-0 focus:border-primary-fixed font-label-sm text-xs uppercase tracking-widest text-on-surface outline-none transition-all"
                  />
                </div>
                <div>
                  <select
                    required
                    class="w-full bg-transparent border-0 border-b-2 border-outline-variant py-3 px-0 focus:ring-0 focus:border-primary-fixed font-label-sm text-xs uppercase tracking-widest text-on-surface outline-none transition-all appearance-none cursor-pointer"
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
                  class="bg-primary-fixed text-black px-12 py-4 font-label-sm text-xs font-bold uppercase tracking-widest hover:glow-primary-fixed hover:scale-105 active:scale-95 transition-all duration-300 rounded-full w-full sm:w-auto"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
