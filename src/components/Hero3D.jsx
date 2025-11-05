import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Star } from 'lucide-react';

export default function Hero3D() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/30 to-white/90 backdrop-blur-sm" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center md:pt-36">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold text-indigo-700 shadow-sm ring-1 ring-indigo-100">
          <Star className="h-3.5 w-3.5 text-indigo-500" />
          Yasir – Creative Marketing & Design Expert
        </span>

        <h1 className="mt-6 bg-gradient-to-br from-indigo-900 via-violet-800 to-blue-700 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-5xl md:text-6xl">
          Building Magnetic Brands & High-Conversion Experiences
        </h1>

        <p className="mt-5 max-w-3xl text-base text-slate-600 sm:text-lg">
          I blend strategy, design, and data-driven marketing to launch brands that look stunning and sell smarter. From branding to full-funnel growth—let’s create something remarkable.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="#contact" className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 text-white shadow-lg shadow-indigo-200 transition-transform duration-200 hover:scale-[1.02]">
            <Rocket className="h-4 w-4" />
            Get a Free Consultation
          </a>
          <a href="#portfolio" className="inline-flex items-center gap-2 rounded-2xl bg-white/80 px-6 py-3 text-slate-800 ring-1 ring-slate-200 transition-colors hover:bg-white">
            View Work
          </a>
        </div>

        <div className="mt-10 grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { title: 'Branding', stat: '50+ Identities' },
            { title: 'Web & UI', stat: '100+ Pages' },
            { title: 'Marketing', stat: '200% Avg ROI' },
            { title: 'Clients', stat: 'Global Brands' },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl bg-white/70 p-4 text-left shadow-sm ring-1 ring-slate-100 transition hover:shadow-md">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">{item.title}</p>
              <p className="mt-1 text-lg font-semibold text-slate-800">{item.stat}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
