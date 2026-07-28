import React, { useState } from 'react';
import { Ticket, ArrowRight, Calendar, Filter } from 'lucide-react';

export default function ProductionsPage({ onOpenJoinModal }) {
  const [activeFilter, setActiveFilter] = useState('ALL WORKS');
  const [selectedTicketShow, setSelectedTicketShow] = useState(null);

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
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBvV8pkwx0TCN6cdFau47KuuJjwPn6tvOB08UAvdIOKfphTlh3W_8Uo3Z38eu_rMmBdvLiA6E4hoz-ZIi5tbZyTENifg6KUm1nPEgjqHD2HY4yGvX-tgguIr9u7VSUPHIIJ6yiyJym7ipudNBneXINlW1LLzQIp2v4orENifQecOzxfIuNsxnws4reO_ryuk4_D7WP6r3YOqeFLcOMraTJ4rrr--Ry6X2YMoKYSxeJy35J0uM4zT7k3o3NWEfF52dJdpjA1KzP2btY')`
                }}
              ></div>
              <div class="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"></div>
              <div class="absolute bottom-0 left-0 p-8 md:p-12">
                <div class="flex gap-4 mb-4 flex-wrap">
                  <span class="bg-primary-container text-on-primary-fixed px-3 py-1 font-label-sm text-xs font-bold uppercase">
                    TRAGEDY
                  </span>
                  <span class="border border-primary-fixed text-primary-fixed px-3 py-1 font-label-sm text-xs font-bold uppercase">
                    MAY 15 - 20, 2024
                  </span>
                </div>
                <h3 class="font-headline-lg text-4xl md:text-6xl text-on-background uppercase mb-2">
                  MACBETH: REDUX
                </h3>
                <p class="text-on-surface-variant font-body-md max-w-lg mb-6 text-sm md:text-base">
                  A brutalist re-imagining of Shakespeare's classic. Power, ambition, and the blood that washes it away. Directed by Julian Vance.
                </p>
                <button
                  onClick={() => setSelectedTicketShow({ title: 'MACBETH: REDUX', date: 'May 15 - 20, 2024' })}
                  class="border-2 border-primary-fixed text-primary-fixed px-8 py-4 font-label-sm text-xs font-bold uppercase hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors inline-flex items-center gap-2"
                >
                  <Ticket size={18} /> Buy Tickets
                </button>
              </div>
            </div>

            <div class="lg:col-span-4 flex flex-col gap-8">
              <div class="flex-1 group relative overflow-hidden bg-surface-container min-h-[260px]">
                <div
                  class="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCjmQnyozcICHupQV_f70xnVyMXPUQOu1mtCvf3TtczjhKwZCj8p-f3XYTPNJv0I0CI9AxLxGodkCEGQ4LTISXRBSbmXBLsZVEBNXEfOeCBKkDryCGgbaISGjw0RCx1yJRnOHNycu1DwvT5EkKP4eYHQkKH8SIl9ytXRoB7ciyk_d3JND2aCagxVt4bJyJW1YAjet9Qxbzq3IEcr1C5mQfh2RLxmil7Gau725BfAnWdZLx8f4bxK1dILgZaJKWgVQuXGFw_0R5tytw')`
                  }}
                ></div>
                <div class="absolute inset-0 bg-surface/50"></div>
                <div class="absolute bottom-6 left-6 right-6">
                  <h4 class="font-headline-lg text-2xl text-on-background uppercase">CHORUS: THE MUSICAL</h4>
                  <p class="font-label-sm text-xs text-primary-fixed font-bold uppercase">JUNE 2024</p>
                </div>
              </div>

              <div class="flex-1 group relative overflow-hidden bg-surface-container min-h-[260px]">
                <div
                  class="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBgmOs7WgRB9_DtBBCvKRulAkE0VCJ0JiA8fCmC6CAs5Vk5IutitWNhZPRzFpO21cGsbWzBjoMOklbGiAOyrrNrFixk5EftYGtOpk9mU7fS4ewKf_QysQ3My8qgORvHCqrGzH_RDXa1IyGInvL8MInWBGdQJU9dJnwKSvWYNTxv90j_d4rdSJaecN2t30V9Hg4mdPtRD7-1S3iH31R6kcvhTOkXm4h4VX0u_3CyafyOV5l6Ds8o3zADJEykhBaUqncMlqkHaDGAzKs')`
                  }}
                ></div>
                <div class="absolute inset-0 bg-surface/50"></div>
                <div class="absolute bottom-6 left-6 right-6">
                  <h4 class="font-headline-lg text-2xl text-on-background uppercase">WAITING FOR GODOT</h4>
                  <p class="font-label-sm text-xs text-primary-fixed font-bold uppercase">JULY 2024</p>
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

          {/* Archive Grid */}
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredShows.map((show) => (
              <div
                key={show.id}
                class="bg-surface-container-low group cursor-pointer overflow-hidden border border-white/5 hover:border-primary-fixed/30 transition-all duration-300"
              >
                <div class="relative h-64 overflow-hidden">
                  <div
                    class="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url('${show.img}')` }}
                  ></div>
                </div>
                <div class="p-6 space-y-3">
                  <p class="font-label-sm text-xs text-outline font-bold">
                    {show.year} • {show.genre}
                  </p>
                  <h4 class="font-headline-lg text-xl text-on-background uppercase leading-tight">
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
      </section>

      {/* Ticket Modal */}
      {selectedTicketShow && (
        <div class="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div class="bg-surface-container-high border border-primary-fixed/40 p-8 max-w-md w-full space-y-6 ticket-notch text-center">
            <Ticket className="w-12 h-12 text-primary-fixed mx-auto" />
            <h3 class="font-headline-lg text-3xl text-primary-fixed uppercase">{selectedTicketShow.title}</h3>
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
