import React from 'react';
import { Award, Sparkles, Star, Users } from 'lucide-react';

export default function AboutPage({ onOpenJoinModal }) {
  return (
    <div class="space-y-0">
      {/* Manifesto Hero Header */}
      <header class="relative w-full py-24 md:py-32 flex items-center justify-center overflow-hidden spotlight-gradient">
        <div class="relative z-10 text-center max-w-4xl px-4">
          <span class="font-label-sm text-xs text-primary-fixed uppercase tracking-[0.3em] mb-4 block">
            Manifesto
          </span>
          <h1 class="font-display-xl text-5xl md:text-8xl text-primary-fixed uppercase leading-tight mb-8">
            The Vision
          </h1>
          <p class="font-body-lg text-lg md:text-2xl text-on-surface leading-relaxed max-w-3xl mx-auto italic">
            "To illuminate the human condition through radical vulnerability, collegiate excellence, and the transformative power of the ensemble. CHORUS is more than a stage; it is the heartbeat of IEM's artistic soul."
          </p>
          <div class="mt-12 flex justify-center">
            <div class="w-1 h-24 bg-gradient-to-b from-primary-fixed to-transparent opacity-50"></div>
          </div>
        </div>
      </header>

      {/* Bento Grid Legacy */}
      <section class="py-spotlight-padding px-4 md:px-margin-desktop max-w-container-max mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div class="md:col-span-8">
            <span class="font-label-sm text-xs text-primary-fixed uppercase tracking-widest block mb-4">
              The Chronicles
            </span>
            <h2 class="font-headline-lg text-4xl md:text-5xl text-on-surface uppercase mb-8">
              Our Legacy
            </h2>
            <div class="bg-surface-container-high p-8 md:p-12 relative overflow-hidden border border-outline-variant/30 h-full">
              <div class="absolute -right-16 -bottom-16 opacity-10 pointer-events-none">
                <span class="material-symbols-outlined text-[280px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  theater_comedy
                </span>
              </div>
              <p class="font-body-lg text-lg text-on-surface-variant mb-6 leading-relaxed relative z-10">
                Founded a decade ago in the rehearsal rooms of the college campus, CHORUS began as a whisper between visionaries passionate about stagecraft. Today, it is a thunderous presence in the regional and national collegiate theater circuit.
              </p>
              <p class="font-body-lg text-lg text-on-surface-variant relative z-10">
                We have staged 40+ full-scale productions, from the raw intensity of Shakespearean tragedies to the avant-garde experimentalism of modern South Asian playwrights. Our journey is etched in sweat, greasepaint, and standing ovations.
              </p>
            </div>
          </div>

          <div class="md:col-span-4 flex flex-col gap-8">
            <div class="bg-primary-container p-8 h-1/2 flex flex-col justify-center items-center text-center">
              <span class="font-display-xl text-7xl text-on-primary-container leading-none">10</span>
              <span class="font-label-sm text-sm text-on-primary-fixed-variant uppercase mt-2 font-bold">
                Glorious Years
              </span>
            </div>

            <div class="relative h-1/2 overflow-hidden ticket-notch bg-surface-container min-h-[200px]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs9W636prPun3qduqA7mLajSfinEIJcmb68VdpgOTJKHldyvCiNfbMN6sugf3ZKdMu5cjg0x9G-knqsy9tfj5bsz6powaJuOgK0Q8JXRlFYTQT2_XtCFktLgCOkc_9FTkd2-Y6gATTilmveWBRiyJDnY_K4Ph02AN7_NPp7sQ7Cp0rDeI8M9g-o8To8kkI7IPCVuo9fP9RSkwPhylVLUZC_NbOwMq3OweJwV2MarHrFsj-YUNzWaC4kElBBc8WNxUv3uCXmzIELog"
                alt="Stage spotlight"
                class="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div class="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black to-transparent">
                <span class="font-label-sm text-xs text-primary-fixed uppercase tracking-widest font-bold">
                  Est. 2014
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section class="bg-surface-container-lowest py-spotlight-padding border-y border-white/5">
        <div class="px-4 md:px-margin-desktop max-w-container-max mx-auto">
          <h3 class="font-headline-lg text-4xl md:text-5xl text-on-surface uppercase mb-16 text-center">
            The Timeline
          </h3>

          <div class="relative space-y-12 max-w-4xl mx-auto">
            <div class="absolute left-1/2 top-0 bottom-0 w-[2px] bg-outline-variant/30 -translate-x-1/2 hidden md:block"></div>

            {[
              {
                year: "14'",
                title: "The Inception",
                desc: "First workshop production staged in a converted classroom, seating only 30 people.",
                side: "left"
              },
              {
                year: "17'",
                title: "Regional Breakthrough",
                desc: "Wins 'Best Production' at the State Collegiate Theater Festival for 'Waiting for Godot'.",
                side: "right"
              },
              {
                year: "21'",
                title: "Global Debut",
                desc: "Invited to the Edinburgh Fringe Festival, marking our first international performance.",
                side: "left"
              },
              {
                year: "24'",
                title: "Decade of Drama",
                desc: "Launching our 10th-anniversary retrospective and a new permanent rehearsal studio.",
                side: "right"
              }
            ].map((item, idx) => (
              <div key={idx} class="relative flex flex-col md:flex-row items-center justify-between gap-4">
                <div class={`w-full md:w-5/12 ${item.side === 'left' ? 'md:text-right' : 'md:order-3 md:text-left'}`}>
                  <h4 class="font-headline-lg text-3xl text-primary-fixed mb-2 uppercase">{item.title}</h4>
                  <p class="text-on-surface-variant font-body-md">{item.desc}</p>
                </div>

                <div class="z-10 bg-primary-fixed w-12 h-12 flex items-center justify-center rotate-45 shrink-0 my-2 md:my-0 md:order-2">
                  <span class="font-label-sm text-on-primary-fixed -rotate-45 font-bold">{item.year}</span>
                </div>

                <div class={`hidden md:block w-5/12 ${item.side === 'left' ? 'order-3' : 'order-1'}`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section class="py-spotlight-padding px-4 md:px-margin-desktop max-w-container-max mx-auto">
        <h3 class="font-headline-lg text-4xl md:text-5xl text-on-surface uppercase mb-16 text-center">
          Our Core Pillars
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              icon: <Sparkles className="w-8 h-8 text-primary-fixed" />,
              title: "Radical Vulnerability",
              text: "Stripping away artifice to present raw, unvarnished human truth on stage."
            },
            {
              icon: <Star className="w-8 h-8 text-primary-fixed" />,
              title: "Artistic Integrity",
              text: "Upholding high standard production values, script fidelity, and passionate storytelling."
            },
            {
              icon: <Users className="w-8 h-8 text-primary-fixed" />,
              title: "Ensemble Power",
              text: "Believing that every member—from lead actor to light technician—is essential."
            },
            {
              icon: <Award className="w-8 h-8 text-primary-fixed" />,
              title: "Collegiate Excellence",
              text: "Representing IEM with distinction in festival competitions nationwide."
            }
          ].map((pillar, index) => (
            <div key={index} class="bg-surface-container p-8 border border-white/5 flex flex-col items-start space-y-4">
              <div class="p-3 bg-surface-container-high">{pillar.icon}</div>
              <h4 class="font-headline-lg text-2xl uppercase text-on-surface">{pillar.title}</h4>
              <p class="font-body-md text-on-surface-variant text-sm">{pillar.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
