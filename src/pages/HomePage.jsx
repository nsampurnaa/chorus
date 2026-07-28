import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Drama, Film, Sparkles } from 'lucide-react';

export default function HomePage({ onOpenJoinModal }) {
  return (
    <div class="space-y-0">
      {/* Hero Section */}
      <section class="relative min-h-[85vh] flex flex-col items-center justify-center text-center overflow-hidden px-4">
        {/* Background Image with Dark Overlay */}
        <div
          class="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-100 filter brightness-[0.8] contrast-[1.1] transition-all duration-700"
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
            <div class="relative z-10 bg-surface-container-high p-4 aspect-square overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2EJzzEknJd1nj4B41HjKeAFBSaoIwuYbyT-OJP43MYDKJPcDvR-kq3LlbjFIUJXj2soOBTslui-vifoKpHld3Zuj6JWZ08-vexM15-Nzd5VOVCGJlu6qYIFV5htezgBrtJ-9JNEZ7MTWcpYSqOq5c9dIkPbsQxUqBlZOOJ0N0Fhp39W8mfclnEG3cRE23uEiF7m_L1gK8znOrpMdNt6MjSVO9Ntbs-9dUbyGhIzsj8wL3FOxO8ZKsrfxhiavOXlPbXAVfFGbXED4"
                alt="Dramatic portrait"
                class="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div class="absolute -bottom-8 -right-8 hidden md:block">
              <span class="font-display-xl text-7xl text-primary-fixed/15 select-none">EST. 2014</span>
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
            <Link
              to="/about"
              class="inline-flex items-center gap-3 text-primary-fixed font-label-sm text-sm uppercase tracking-widest hover:gap-5 transition-all pt-4"
            >
              Discover Our History <ArrowRight size={18} />
            </Link>
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
            {/* Card 1 */}
            <div class="group relative overflow-hidden bg-surface-container shadow-2xl transition-all duration-500 hover:-translate-y-3">
              <div class="aspect-[2/3] overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrGeBA5jjoPwKVsT8NBRsK1I8vl2agLWPszhI6Rsusk2IX-MVauV36U9Le34QbARIKEYIS7ScT6d_aGmNgZcceUK_7uCsuoj20sPO41I6XMPApbbeRgOVlE74adk9fKYS4NP7dtQ1dSZxwelk4ZCz0haXe6OyWdafkLou06NT0kprFgRhY6EOwW9qqDymaDM4r5e5b9ie7nEBPWY18TC_qi7brgOGyWYDgycznMFLswUqx8YqTqPsOWhNrXV-Fa2We4qm4lJGjMfg"
                  alt="Macbeth"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>
              <div class="absolute bottom-0 p-8 w-full border-l-4 border-primary-fixed ml-4 mb-4">
                <span class="font-label-sm text-xs text-primary-fixed/80 uppercase">Tragedy</span>
                <h3 class="font-headline-lg text-3xl text-on-surface mt-1 uppercase">Macbeth: Redux</h3>
              </div>
            </div>

            {/* Card 2 */}
            <div class="group relative overflow-hidden bg-surface-container shadow-2xl transition-all duration-500 hover:-translate-y-3">
              <div class="aspect-[2/3] overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcLVHuuXAMKDotXNMzI9Zmv8LCTK1vPn4y1ZeQeumNPlAvH3B9IL4ElJsyYpqTzVR9xSrpa8O3-LXCSMN5IdQeoBPzTIk3sLNd3f-3qqwum5QyVHF8b5iWqcYKwjVopb4hH2spavBTuUkfcbgzuAfnlhwqrsDf8LrlUfjDjI-Z7UYcfYHZyLM2UPqFiyjY3TAcdEVQ96rc0bnKgWIcdygYo1urJ_qLaZMWVupUeTWGZyYnqC3odYc6JxGHLX_X5ZaGJCPSmTI7kns"
                  alt="The Mousetrap"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>
              <div class="absolute bottom-0 p-8 w-full border-l-4 border-primary-fixed ml-4 mb-4">
                <span class="font-label-sm text-xs text-primary-fixed/80 uppercase">Mystery</span>
                <h3 class="font-headline-lg text-3xl text-on-surface mt-1 uppercase">The Mousetrap</h3>
              </div>
            </div>

            {/* Card 3 */}
            <div class="group relative overflow-hidden bg-surface-container shadow-2xl transition-all duration-500 hover:-translate-y-3">
              <div class="aspect-[2/3] overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXSwl7r4gBpMXPqnB9LO0Lu5M4KCGAH_13RFXm-IMhmIdNETOsn76UIA6hL-xa3Wuw0eelcY3Hr9mt2gyPjeFHTVlTwGhDZZIwQOLARgkq6DvGLfoSbZdMvIvfFB0qWNCgOVdAZb_nke4l3TI-Dcf41dDHqBCc8nhjoCG3CZ5gFfu4ILR5ziEDHzQtzRzlfr-k0Hy68gp9K0QifmLRTMW7D6pknim_V8YcVHL3fczRsCHFDrLwZlj98Oh6dNMTeDJjCHF-SfSkRME"
                  alt="Rhythm of Silence"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>
              <div class="absolute bottom-0 p-8 w-full border-l-4 border-primary-fixed ml-4 mb-4">
                <span class="font-label-sm text-xs text-primary-fixed/80 uppercase">Musical</span>
                <h3 class="font-headline-lg text-3xl text-on-surface mt-1 uppercase">Rhythm of Silence</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Engine Teaser */}
      <section class="py-spotlight-padding px-4 md:px-margin-desktop max-w-container-max mx-auto">
        <h2 class="font-headline-lg text-4xl md:text-5xl text-on-surface mb-16 border-l-8 border-primary-fixed pl-8 uppercase">
          The Creative Engine
        </h2>

        <div class="grid grid-cols-2 md:grid-cols-5 gap-6">
          {[
            { title: 'Acting Wing', icon: 'theater_comedy', count: '24 Members' },
            { title: 'Scriptwriting', icon: 'edit_note', count: '8 Writers' },
            { title: 'Stage & Props', icon: 'design_services', count: '12 Designers' },
            { title: 'Tech & Sound', icon: 'graphic_eq', count: '10 Technicians' },
            { title: 'PR & Media', icon: 'linked_camera', count: '7 Strategists' },
          ].map((wing, i) => (
            <Link
              key={i}
              to="/team"
              class="flex flex-col items-center text-center group bg-surface-container p-6 border border-white/5 hover:border-primary-fixed/40 transition-all duration-300"
            >
              <div class="w-20 h-20 bg-surface-container-high flex items-center justify-center mb-6 group-hover:bg-primary-fixed transition-colors duration-500">
                <span className="material-symbols-outlined text-4xl text-primary-fixed group-hover:text-on-primary-fixed">
                  {wing.icon}
                </span>
              </div>
              <h4 class="font-headline-lg text-xl uppercase text-on-surface mb-1">{wing.title}</h4>
              <span class="font-label-sm text-xs text-primary-fixed/80 uppercase">{wing.count}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
