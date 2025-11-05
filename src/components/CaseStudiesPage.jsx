import React, { useEffect, useState } from 'react';

// Optional lightweight CMS hook. If VITE_CMS_URL is provided (JSON array of posts), it will be used.
// Otherwise, falls back to curated case studies.
function useCaseStudies() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cmsUrl = import.meta.env.VITE_CMS_URL;
    async function load() {
      try {
        if (cmsUrl) {
          const res = await fetch(cmsUrl);
          const data = await res.json();
          setItems(Array.isArray(data) ? data : []);
        } else {
          setItems([
            {
              id: 'revamp-fintech',
              title: 'Fintech Rebrand & Site Revamp',
              summary: 'Positioning, identity, and high-converting marketing site. +3x qualified leads in 90 days.',
              cover: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1200&auto=format&fit=crop',
              tags: ['Branding', 'Web Design', 'SEO']
            },
            {
              id: 'ecom-scale',
              title: 'eCommerce Creative & Performance Scale',
              summary: 'Creative system for paid, social, and email. +220% engagement, -35% CPM, +28% ROAS.',
              cover: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1200&auto=format&fit=crop',
              tags: ['Creative', 'Paid Social', 'Email']
            },
            {
              id: 'saas-product-led',
              title: 'SaaS Product-Led Content Engine',
              summary: 'Story-driven case studies and SEO hub that compounds organic growth.',
              cover: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1200&auto=format&fit=crop',
              tags: ['Content', 'SEO', 'Strategy']
            }
          ]);
        }
      } catch (e) {
        setItems([]);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return { items, loading };
}

export default function CaseStudiesPage() {
  const { items, loading } = useCaseStudies();

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">Case Studies</h1>
        <p className="mt-3 text-slate-700">Deep dives into projects across branding, design, and marketing—complete with outcomes and learning.</p>
      </div>

      {loading ? (
        <div className="mt-10 text-center text-slate-500">Loading…</div>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {items.map((p) => (
            <article key={p.id || p.title} className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-100">
              <div className="relative aspect-[16/9] overflow-hidden">
                <img src={p.cover} alt={p.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-slate-900">{p.title}</h2>
                <p className="mt-2 text-sm text-slate-600">{p.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {(p.tags || []).map((t) => (
                    <span key={t} className="rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-200">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
