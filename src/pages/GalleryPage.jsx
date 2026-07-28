import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All Moments');
  const [activeLightboxItem, setActiveLightboxItem] = useState(null);

  const galleryItems = [
    {
      id: 1,
      category: 'On Stage',
      title: 'The Final Bow',
      aspect: 'aspect-[3/4]',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVbuAYnHB62B8b5Taw0P2XyGbwOxzTlHVvnpfmB6sLr37rCx8PLRf_MRH6kBWZvzJT3QLOk8rlTBv5fJZX6Zg8zUm0kkZ98giKsRBJwlK8Vr8ngip0CxVw37EQJ_uyKNDHD_XFa4A-Tz5yUlji7lWaot0TDPXttQEZs_b1Wxvc2ja5Miam-l6skYqz9cizpNQBY7cTCbPVtqEi-Ac5Mq0fravDKWeqeZgf8OTNvs1Wxb_uEmRYCMmMjV1-Iti-DMjCRO2ezDbii6A',
      desc: 'Lead actor illuminated by a single warm golden beam amidst deep stage shadow.'
    },
    {
      id: 2,
      category: 'Backstage',
      title: 'Quiet Anticipation',
      aspect: 'aspect-[4/3]',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAywJrhJPwaDfHRFXVqeEwKZG8uEAxe6qTGuJjtikP6bA4AmbatrFH4WsYf3_zCwUAsoTO9pUmFWLA-goKMXctr-foXSZya7bH3_FZzgFNvkDsrch6RAD0Sz4uieSVtx4Htt5PNvgnIY7Olg3aOVAbqo4ZwIIjhAepx-Tglbc9MIb5l_CpJIyUMsebNn8WFiLpXG9bI0iIiNQ52XL2a7hrmF_HE_MOMVYypIZtiDVSGZZMSVLbIl8OwTpeLVDQK8qc6cklIOacwPlk',
      desc: 'Backstage laughter between members surrounded by costume racks and glowing makeup mirrors.'
    },
    {
      id: 3,
      category: 'Community',
      title: 'Workshop Energy',
      aspect: 'aspect-square',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPb2c8-pc3fjsEt9qfmgO-qmkKQm4klMsQU_i9YJos1YfDkQZ4af4WALxa0vagv17Kksjka7OKubPvnN4yBUFXmKMEeJY8FWk9IXJAcfGGfCxuLjwa52f7Yr9xLdW5R16XWBP3jdvmeRyRF6Aq6P1BnHHlkJ2lnboyXfdpspHB9PLN40I_og3DC4gBchGfih82knJg2I5wQgvZNRWTOsT61WlL68FcOxCr0UKqv23elAaydrKc7CO-fKEFSwihn9f_1jIHKPQA0LU',
      desc: 'Wide-angle fluid motion during an intense evening rehearsal studio session.'
    },
    {
      id: 4,
      category: 'On Stage',
      title: 'Echoes of Tragedy',
      aspect: 'aspect-[3/4]',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnpDk-MJHJBx-sbTlUm0UlOAg9l6RBNtVwtAdk_CzEAPMo3QWlYllrQn1uQDFljrBId55T840_kHdA1MBhv9lM9FZexTODBIsLa1A0UvGrMA4YNBXEv5d3Q-bTeTtZZNYD9Z4xFvjJV3h-94Qw3b3mgoObErpqa6aKGPVz3Cda-tmn15qVzNCgRy0inZFc6HRTY0_ynlf5dHs_j4koaXMVnRVjPj6skIFWe19VUJctsfdFolHcuM08274obkgQHhSfRh386vvoEAE',
      desc: 'A weathered theatrical mask resting on a velvet pedestal capturing sharp side light.'
    },
    {
      id: 5,
      category: 'Community',
      title: 'The Ensemble',
      aspect: 'aspect-[3/2]',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYfVWGq3KR1VkFTJbsO1nZuiPRoAWxAsNliB4PjGv0zlzLOOhv0XAn-61fw5S11jlNHy0f63vmzjlfaS-UiZNP-uiVq4ZBJIp5x81gH1i4m8MjcivCDcFvVy_L8E_6RweUiaOAoJ6JYi8YY4H2sIklmiIwVEtM6nMsqXiFVZ4wAB7dWifKnkgZWIdua0SByLL87lUum-9-KLRYPbcInmP8Qla70PnOVNOEuv5FUuXlrMudn5Jav7D6kt0C9h-NImHJBUT_zd7xp2I',
      desc: 'Full group photo of CHORUS members standing proudly under warm house lights.'
    },
    {
      id: 6,
      category: 'Backstage',
      title: 'Crafting Worlds',
      aspect: 'aspect-[4/5]',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbbSAC9OrRjD34sNFxZMSA2D3IEaXzp3e3Al8pqjvkEOV2wIPbLRqB87SoO5eW7kOyRhQFJMiJaPMhqc994MvCwu3qz5ryjT_J0Q9pWotg4DdwzboBqsSodILAxBIWRGvq2eA-h56gymS7p7WjWhP3l_zPxRN0QyIMYtrbjYqtV_RHwvO8iKKMcmri2734MbDxcsY9UYa53eb3Kb7HAnt-DdvDUyH1kYAgyuhIQ0gM18c-r6KrC2You9H4xIWiCU1J5A6BH89zLBk',
      desc: 'A detail shot of a set designer’s hands painting an intricate theatrical backdrop.'
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
          <p class="font-label-sm text-xs uppercase tracking-[0.4em] text-primary-fixed-dim mb-4">
            Capturing the Magic
          </p>
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
          {['All Moments', 'On Stage', 'Backstage', 'Community'].map((cat) => (
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
        <div class="masonry-grid">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxItem(item)}
              class="masonry-item group cursor-pointer overflow-hidden relative bg-surface-container border border-white/5 hover:border-primary-fixed/40 transition-all duration-300"
            >
              <div
                class={`${item.aspect} bg-surface-container-high bg-cover bg-center transition-transform duration-700 group-hover:scale-105`}
                style={{ backgroundImage: `url('${item.img}')` }}
              ></div>

              <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span class="font-label-sm text-xs uppercase text-primary-fixed mb-1 font-bold">
                  {item.category}
                </span>
                <h3 class="font-headline-lg text-2xl uppercase text-white leading-tight flex items-center justify-between">
                  {item.title}
                  <ZoomIn size={18} class="text-primary-fixed opacity-80" />
                </h3>
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
