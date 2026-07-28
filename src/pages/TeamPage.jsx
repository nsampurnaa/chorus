import React, { useState } from 'react';
import { User, Sparkles } from 'lucide-react';

export default function TeamPage({ onOpenJoinModal }) {
  const [selectedDept, setSelectedDept] = useState('Actors');

  const execBoard = [
    {
      name: 'Julian Vance',
      role: 'President',
      bio: 'Overseeing artistic vision and strategic growth of CHORUS for the 2024 season.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFRdUUB9iH7_udYcGR2XbaiZFsuFkkGPifmiJ52hnqvSm1JTyTs9mOOBJ2boG64beiYw2NB130qJesRrttwlLi-B4KH2LPh-COf-VzOLlS9zHBkfOKJAXdp77w-Q7vGOpSYXQts3MVFjG0GO4e0Dhva9_BVAibTWqqJUguVR9KS0Mf_EChuYppEzMj5qJfBdn2DHME-kLZSc_DNSQEJKYVZg86aQ-Ys5l6OxqbWbLmHFLVAkBp8qiWixuPxUGZMcAVLNwJ8al7FOM'
    },
    {
      name: 'Elena Thorne',
      role: 'Vice President',
      bio: 'Managing production logistics and ensemble team coordination.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZwLLsGFB4vav0nCzay7XSSaCzAHJYzjJ0WoF3wZ9mVO9NoXsM8o-lr-A9e5tlsdyWLGfrsKCX2hzV5Cz0GuX5LwmQDmx3xULSk5trn0Vbtp0oj5HyqSFuW65TkKYojBvX0UCCH2Z8_M0g2IRoWqbRoE9vUfjqTrSrKgzU2We4Qv-MGdg1SeGI4o-tPmfSdQ0Rw3JjE3ITTMqAnjR47yJd-utpkTILIb8PIGhrJvQ3H7Ber8_TxYmLFnj4vzb-jG-DNSGq2jbYqrE'
    },
    {
      name: 'Marcus Chen',
      role: 'Treasurer',
      bio: 'Directing club finances, sponsorships, and production budgets.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-ohmijFKFIPhvFZonr56BFbEBRxhhDY05LMXc5iOkBbIaTfd-MsQ3TjR36G3jOw9Pmj_1sw7tW7GSXIhrXO9EfFpfUxWCaeW9YnzdLosayQ_qJaxHJZLY_TUUiZp4NHni39rbEE5e46rUcQIfMFnTUvPTjqhZkBBuppqhMasgw7egc01SSqhu7NYfH6e3ryVT-UMVSyR5F9ZNfaJLZCKT7aWxN0Xa0-EI4OJjKOPHxGWUtuJETg5mfQAIH5XiGzyhJehCBPrvJuM'
    }
  ];

  const membersByDept = {
    Actors: [
      {
        name: 'Sarah Jenkins',
        sub: 'Lead Ensemble',
        desc: 'Specializing in classical drama and experimental theater movements.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZJulkp1QO4ynfjjhoyazdunRFJKu67ZzQAxAdpV3tVRB4XxFGjKqcgsN8jr6lbJo-R5UBxbIVW3SBw1z5_nj2b3dT21Sjp1UMQyIlPkvvpEenD8WD37Ve6C-UgLe6r6tHlhdQssogt5Evbm0V2IaqtsgBx_qPVQXoIStEA9OBTr1keCElY5Z92PqKhNxjzFfF5rDkTQV3TqFnIuZikgiDhRvEZsd6Ychs1Jfnw-5lkD6gYBMNPZxfU_N3K9eRfHRFOiOt-sWOr-0'
      },
      {
        name: 'David Okafor',
        sub: 'Character Actor',
        desc: 'Focused on physical theater and voice-over performance techniques.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQ4eSdb4lKFEfSil7gsm8v1kZRWtcR2iRoTp-plesb6gKoKS8bcTxh8Gbh8_IrZFkRFGmc-bySF31BJ77iWU31-7mbqDzmWQI4GemVkqXUADFMQP-NPekir36PjVEvhb3WG5aYln_OwX-2NDGOPA0zeGX4BdW1FBNi4Pr2QZKw8R40T5A1I55ePMNjPcWlZnqiG9CLR9bEyUJwSGCYHlxBnI4nxi3wzndPNGG3DIIbBuG7RjhftnHWqTVYgcVW0OckZScAIom3wH4'
      },
      {
        name: 'Riley Smith',
        sub: 'Method Performance',
        desc: 'Exploring the intersection of internal psychology and stage presence.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvbLv-QJlaFPKgQSBUj92Xn4aaNkEGOywt7nBwt3gl2B3CoNTMP1Mb427kTgFU1y2jXd5FXQ8YYThyuzqV5rhWWGqrSjMfX0abG18AUTeEwTZgDRNrc8G_JlHVghWDGwYIKgTtZd6la_qcboI96kA8c2NnUGiALnDtkH5aDqhzeVs5F07BsRsGab4YS6ElWgdo3V5SAObSQRGTIfJj23IKA7aLG0vpWGmeYUeh5Mak4K4xxS-V_NIa8Ovs8kNHa-5wQ3fci5FqXFU'
      },
      {
        name: 'Maya Lopez',
        sub: 'Dramatic Lead',
        desc: 'Renowned for emotional depth in contemporary stage revivals.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgujKcwjAyS0sabfYjb7GMSjyIcwWzebGGxCfQWXFbMDnzsBaU1ZfTrj2OkNENuoraXlrA9WYx7xUAlD1Zu21VokK_qiPWMt3dCY0fJ7f6zDsBqyO7Fn96qgRz_k-DlN5RlZ5prNhDpj6Jbjxs9uhP05LKDpeXjSk-2RFEXcyGy58-yF7P5x2_H-PVMe6vymzNoL7sGpURrWyzF52I7BFcuYHTVsoZXpDkt9aHB4xFz5dWJhyfOgUTZqcF6J3r3rWydMn5tInSOe8'
      }
    ],
    Directors: [
      {
        name: "Liam O'Connor",
        sub: 'Stage Director',
        desc: 'Pioneering minimalist stage blocking and high-contrast atmospheric direction.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFRdUUB9iH7_udYcGR2XbaiZFsuFkkGPifmiJ52hnqvSm1JTyTs9mOOBJ2boG64beiYw2NB130qJesRrttwlLi-B4KH2LPh-COf-VzOLlS9zHBkfOKJAXdp77w-Q7vGOpSYXQts3MVFjG0GO4e0Dhva9_BVAibTWqqJUguVR9KS0Mf_EChuYppEzMj5qJfBdn2DHME-kLZSc_DNSQEJKYVZg86aQ-Ys5l6OxqbWbLmHFLVAkBp8qiWixuPxUGZMcAVLNwJ8al7FOM'
      },
      {
        name: 'Ananya Roy',
        sub: 'Playwright & Script Lead',
        desc: 'Writing original one-act plays for inter-college theater festivals.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZwLLsGFB4vav0nCzay7XSSaCzAHJYzjJ0WoF3wZ9mVO9NoXsM8o-lr-A9e5tlsdyWLGfrsKCX2hzV5Cz0GuX5LwmQDmx3xULSk5trn0Vbtp0oj5HyqSFuW65TkKYojBvX0UCCH2Z8_M0g2IRoWqbRoE9vUfjqTrSrKgzU2We4Qv-MGdg1SeGI4o-tPmfSdQ0Rw3JjE3ITTMqAnjR47yJd-utpkTILIb8PIGhrJvQ3H7Ber8_TxYmLFnj4vzb-jG-DNSGq2jbYqrE'
      }
    ],
    Designers: [
      {
        name: 'Vikram Malhotra',
        sub: 'Lighting Designer',
        desc: 'Designing sharp spotlight gradients and dramatic shadows for live stage.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-ohmijFKFIPhvFZonr56BFbEBRxhhDY05LMXc5iOkBbIaTfd-MsQ3TjR36G3jOw9Pmj_1sw7tW7GSXIhrXO9EfFpfUxWCaeW9YnzdLosayQ_qJaxHJZLY_TUUiZp4NHni39rbEE5e46rUcQIfMFnTUvPTjqhZkBBuppqhMasgw7egc01SSqhu7NYfH6e3ryVT-UMVSyR5F9ZNfaJLZCKT7aWxN0Xa0-EI4OJjKOPHxGWUtuJETg5mfQAIH5XiGzyhJehCBPrvJuM'
      }
    ],
    Musicians: [
      {
        name: 'Sophia Patel',
        sub: 'Music Director',
        desc: 'Composing original acoustic scores and soundscapes for productions.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgujKcwjAyS0sabfYjb7GMSjyIcwWzebGGxCfQWXFbMDnzsBaU1ZfTrj2OkNENuoraXlrA9WYx7xUAlD1Zu21VokK_qiPWMt3dCY0fJ7f6zDsBqyO7Fn96qgRz_k-DlN5RlZ5prNhDpj6Jbjxs9uhP05LKDpeXjSk-2RFEXcyGy58-yF7P5x2_H-PVMe6vymzNoL7sGpURrWyzF52I7BFcuYHTVsoZXpDkt9aHB4xFz5dWJhyfOgUTZqcF6J3r3rWydMn5tInSOe8'
      }
    ],
    Crew: [
      {
        name: 'Karan Sharma',
        sub: 'Stage Manager',
        desc: 'Keeping cue timing, set changes, and backstage operations seamless.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQ4eSdb4lKFEfSil7gsm8v1kZRWtcR2iRoTp-plesb6gKoKS8bcTxh8Gbh8_IrZFkRFGmc-bySF31BJ77iWU31-7mbqDzmWQI4GemVkqXUADFMQP-NPekir36PjVEvhb3WG5aYln_OwX-2NDGOPA0zeGX4BdW1FBNi4Pr2QZKw8R40T5A1I55ePMNjPcWlZnqiG9CLR9bEyUJwSGCYHlxBnI4nxi3wzndPNGG3DIIbBuG7RjhftnHWqTVYgcVW0OckZScAIom3wH4'
      }
    ]
  };

  const activeMembers = membersByDept[selectedDept] || membersByDept.Actors;

  return (
    <div class="space-y-0">
      {/* Hero Header */}
      <section class="relative py-24 spotlight-gradient overflow-hidden">
        <div class="max-w-container-max mx-auto px-4 md:px-margin-desktop relative z-10 text-center">
          <span class="font-label-sm text-xs uppercase text-primary-fixed tracking-[0.3em] mb-4 block">
            Meet The Ensemble
          </span>
          <h1 class="font-display-xl text-5xl md:text-8xl uppercase text-primary-fixed leading-none">
            The Creators
          </h1>
          <p class="font-body-lg text-lg text-on-surface-variant max-w-2xl mx-auto mt-6">
            Behind every standing ovation is a collective of visionary artists, tireless builders, and passionate performers. Meet the team defining the next era of theater.
          </p>
        </div>
      </section>

      {/* Executive Board */}
      <section class="py-spotlight-padding bg-surface-container-lowest border-y border-white/5">
        <div class="max-w-container-max mx-auto px-4 md:px-margin-desktop">
          <h2 class="font-headline-lg text-4xl text-primary-fixed uppercase mb-12 border-l-4 border-primary-fixed pl-6">
            Executive Board
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* President */}
            <div class="md:col-span-6 group relative overflow-hidden bg-surface-container-high ticket-notch min-h-[420px] bw-to-color">
              <div
                class="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${execBoard[0].img}')` }}
              ></div>
              <div class="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90 group-hover:from-primary-fixed/20 transition-all duration-500"></div>
              <div class="absolute bottom-0 p-8">
                <span class="font-label-sm text-xs uppercase text-primary-fixed bg-background/80 px-3 py-1 font-bold">
                  {execBoard[0].role}
                </span>
                <h3 class="font-headline-lg text-4xl uppercase text-on-surface mt-3">
                  {execBoard[0].name}
                </h3>
                <p class="font-body-md text-sm text-on-surface-variant mt-2 max-w-sm">
                  {execBoard[0].bio}
                </p>
              </div>
            </div>

            {/* VP & Treasurer */}
            <div class="md:col-span-6 grid grid-rows-2 gap-8">
              {execBoard.slice(1).map((person, i) => (
                <div key={i} class="group relative overflow-hidden bg-surface-container-high ticket-notch min-h-[200px] bw-to-color">
                  <div
                    class="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${person.img}')` }}
                  ></div>
                  <div class="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80 group-hover:from-primary-fixed/20"></div>
                  <div class="absolute bottom-0 p-6">
                    <span class="font-label-sm text-xs uppercase text-primary-fixed font-bold">
                      {person.role}
                    </span>
                    <h3 class="font-headline-lg text-3xl uppercase text-on-surface mt-1">
                      {person.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Department Tabs & Grid */}
      <section class="py-spotlight-padding px-4 md:px-margin-desktop max-w-container-max mx-auto">
        {/* Category Nav */}
        <div class="flex flex-wrap justify-center gap-4 mb-16">
          {Object.keys(membersByDept).map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              class={`font-label-sm text-xs uppercase px-8 py-3 tracking-widest transition-all duration-300 font-bold ${
                selectedDept === dept
                  ? 'bg-primary-container text-on-primary-container glow-primary-fixed'
                  : 'border-2 border-outline-variant text-on-surface-variant hover:border-primary-fixed hover:text-primary-fixed'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Members Grid */}
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {activeMembers.map((member, idx) => (
            <div key={idx} class="group">
              <div class="aspect-[3/4] overflow-hidden ticket-notch bg-surface-container mb-4 bw-to-color relative">
                <div
                  class="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${member.img}')` }}
                ></div>
                <div class="absolute inset-0 bg-primary-fixed/0 group-hover:bg-primary-fixed/10 transition-colors duration-500"></div>
              </div>
              <h4 class="font-headline-lg text-2xl uppercase text-on-surface">{member.name}</h4>
              <p class="font-label-sm text-xs uppercase text-primary-fixed-dim font-bold mt-1">
                {member.sub}
              </p>
              <p class="font-body-md text-xs text-on-surface-variant mt-2">
                {member.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
