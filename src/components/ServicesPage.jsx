import React from 'react';
import { Palette, Globe, Megaphone, Search, Mail, Camera } from 'lucide-react';

const items = [
  {
    icon: Palette,
    title: 'Branding & Logo Design',
    body:
      'Positioning, naming, visual identity, and brand systems. Deliverables include style guides, logo suites, typography, color, and asset libraries ready for scale.'
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    body:
      'High-impact visuals across social, advertising, print, and decks. Meticulous attention to hierarchy, readability, and brand consistency.'
  },
  {
    icon: Globe,
    title: 'Website Design & Development (WordPress & Webflow)',
    body:
      'Strategy, UX, wireframes, UI, and build. Fast, SEO-ready, responsive websites with scalable CMS and analytics baked in.'
  },
  {
    icon: Megaphone,
    title: 'Social Media Marketing & Management',
    body:
      'Content pillars, calendars, creative production, and data-driven optimization to grow engaged communities and conversions.'
  },
  {
    icon: Search,
    title: 'Google Ads & SEO',
    body:
      'Technical and on-page SEO, keyword research, and performance Google Ads campaigns focused on qualified traffic and ROI.'
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    body:
      'Lifecycle flows and campaigns with segmentation, A/B testing, and persuasive copy to boost retention and LTV.'
  },
  {
    icon: Camera,
    title: 'Video Editing & Production',
    body:
      'Short-form content, brand films, and ad creative with strong narrative structure and platform-native formatting.'
  }
];

export default function ServicesPage() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">Services</h1>
        <p className="mt-3 text-slate-700">End-to-end creative and growth—crafted to look premium and perform.</p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {items.map(({ icon: Icon, title, body }) => (
          <article key={title} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="mb-3 inline-flex items-center justify-center rounded-2xl bg-indigo-50 p-2">
              <Icon className="h-5 w-5 text-indigo-600" />
            </div>
            <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
            <p className="mt-2 text-sm text-slate-600">{body}</p>
            <ul className="mt-3 list-disc pl-5 text-xs text-slate-600 space-y-1">
              <li>SEO-friendly structure and content guidance</li>
              <li>Clear timelines, scoping, and milestone delivery</li>
              <li>Post-launch optimization and support options</li>
            </ul>
          </article>
        ))}
      </div>
      <div className="mt-12 rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-600 p-8 text-white shadow-lg">
        <h3 className="text-xl font-semibold">Ready to elevate your brand?</h3>
        <p className="mt-1 opacity-90">Let’s align on outcomes and build an execution plan that scales.</p>
        <a href="#/contact" className="mt-4 inline-block rounded-2xl bg-white/15 px-5 py-2 text-sm font-semibold backdrop-blur-sm transition hover:bg-white/25">Get a Free Consultation</a>
      </div>
    </section>
  );
}
