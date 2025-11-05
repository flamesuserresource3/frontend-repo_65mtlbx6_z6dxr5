import React from 'react';

const testimonials = [
  {
    quote:
      'Our rebrand and new website transformed our pipeline. 3x increase in qualified leads within 90 days. Yasir’s process is sharp and collaborative.',
    name: 'Amira K.',
    role: 'COO, SaaS Startup',
    img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=400&auto=format&fit=crop'
  },
  {
    quote:
      'From content to paid search, we finally have a growth engine that compounds. Creative is premium and performance-focused.',
    name: 'David R.',
    role: 'Founder, eCommerce',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop'
  },
  {
    quote:
      'Yasir rebuilt our brand system and social presence. Engagement up 220% and CPM down 35% across campaigns.',
    name: 'Sofia L.',
    role: 'Marketing Lead, Agency',
    img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop'
  },
];

const portfolio = [
  {
    title: 'Fintech Brand System',
    category: 'Branding',
    img: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'SaaS Marketing Website',
    category: 'Web Design',
    img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Performance Ad Suite',
    category: 'Marketing',
    img: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Ecom Product Launch',
    category: 'Design',
    img: 'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1200&auto=format&fit=crop'
  },
];

export default function StoriesPortfolio() {
  return (
    <section id="portfolio" className="relative mx-auto max-w-7xl scroll-mt-20 px-6 py-20">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Client Stories</h2>
        <p className="mt-3 text-slate-600">Real results with before/after impact. Transparent, measurable, and on-brand.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure key={t.name} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
            <div className="flex items-center gap-3">
              <img src={t.img} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
              <div>
                <figcaption className="text-sm font-semibold text-slate-900">{t.name}</figcaption>
                <p className="text-xs text-slate-500">{t.role}</p>
              </div>
            </div>
            <blockquote className="mt-3 text-sm text-slate-700">“{t.quote}”</blockquote>
            <div className="mt-4 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 p-3 text-xs text-emerald-700 ring-1 ring-emerald-100">
              Before → After Metrics: +3x leads, +220% engagement, -35% CPM
            </div>
          </figure>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Portfolio</h3>
        <p className="mt-2 text-slate-600">Branding, design, and marketing campaigns selected from recent work.</p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {portfolio.map((p) => (
          <article key={p.title} className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-100">
            <div className="relative aspect-[16/9] overflow-hidden">
              <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-3 left-3 rounded-2xl bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900 shadow-sm">
                {p.category}
              </div>
            </div>
            <div className="p-5">
              <h4 className="text-lg font-semibold text-slate-900">{p.title}</h4>
              <p className="mt-1 text-sm text-slate-600">Concept to launch: strategy, design system, build, and campaign rollout.</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
