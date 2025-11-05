import React from 'react';

export default function AboutPage() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">About Yasir</h1>
        <p className="mt-4 text-lg text-slate-700">
          I’m a creative marketing and design expert focused on building magnetic brands and high-conversion experiences.
          Over 7+ years, I’ve partnered with startups, eCommerce, and agencies to craft brand systems, ship product-ready designs, and launch growth campaigns that move metrics.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
            <h3 className="text-lg font-semibold text-slate-900">Core Skills</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-slate-600 space-y-1">
              <li>Brand Strategy & Identity Systems</li>
              <li>UI/UX Design & Design Systems</li>
              <li>Go-To-Market & Performance Marketing</li>
            </ul>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
            <h3 className="text-lg font-semibold text-slate-900">Principles</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-slate-600 space-y-1">
              <li>Clarity beats complexity</li>
              <li>Design serves strategy</li>
              <li>Iterate with data and insight</li>
            </ul>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
            <h3 className="text-lg font-semibold text-slate-900">Outcome</h3>
            <p className="mt-2 text-sm text-slate-600">Premium, on-brand experiences that earn attention and drive conversion across the entire funnel.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
