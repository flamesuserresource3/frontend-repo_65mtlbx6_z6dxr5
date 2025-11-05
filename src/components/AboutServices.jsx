import React from 'react';
import { Palette, Globe, Megaphone, Search, Mail, Camera } from 'lucide-react';

export default function AboutServices() {
  const services = [
    {
      icon: <Palette className="h-5 w-5 text-indigo-600" />,
      title: 'Branding & Logo Design',
      desc: 'Craft distinctive brand identities, logos, and visual systems that communicate positioning, values, and voice across every touchpoint.'
    },
    {
      icon: <Palette className="h-5 w-5 text-indigo-600" />,
      title: 'Graphic Design',
      desc: 'High-end design for social content, ads, print, pitch decks, and brand assets with pixel-perfect attention to detail.'
    },
    {
      icon: <Globe className="h-5 w-5 text-indigo-600" />,
      title: 'Website Design & Development (WordPress & Webflow)',
      desc: 'Design and build responsive, SEO-optimized websites with fast performance and editorial freedom in WordPress and Webflow.'
    },
    {
      icon: <Megaphone className="h-5 w-5 text-indigo-600" />,
      title: 'Social Media Marketing & Management',
      desc: 'Plan, create, and manage social campaigns with content calendars, community growth, and conversion-focused strategies.'
    },
    {
      icon: <Search className="h-5 w-5 text-indigo-600" />,
      title: 'Google Ads & SEO',
      desc: 'Full-funnel search strategy: on-page SEO, technical optimization, backlinks, and ROI-positive Google Ads management.'
    },
    {
      icon: <Mail className="h-5 w-5 text-indigo-600" />,
      title: 'Email Marketing',
      desc: 'Lifecycle campaigns, automations, and segmentation with compelling copy and design to boost retention and revenue.'
    },
    {
      icon: <Camera className="h-5 w-5 text-indigo-600" />,
      title: 'Video Editing & Production',
      desc: 'Short-form and brand videos that enhance storytelling, increase engagement, and drive action across platforms.'
    },
  ];

  return (
    <section id="about" className="relative mx-auto max-w-7xl scroll-mt-20 px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">About Yasir</h2>
        <p className="mt-4 text-slate-600">
          I’m a creative marketing and design expert helping startups and brands launch meaningful visuals, experiences, and growth engines. My approach blends brand strategy, modern design systems, and performance marketing to build long-term equity and short-term wins.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
          <h3 className="text-lg font-semibold text-slate-900">Experience</h3>
          <p className="mt-2 text-sm text-slate-600">7+ years across branding, UI/UX, and full-funnel marketing. Led cross-functional projects for SaaS, eCommerce, and agencies.</p>
        </div>
        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
          <h3 className="text-lg font-semibold text-slate-900">Values</h3>
          <p className="mt-2 text-sm text-slate-600">Clarity, craftsmanship, and measurable impact. Beautiful work that serves a clear purpose and moves metrics.</p>
        </div>
        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
          <h3 className="text-lg font-semibold text-slate-900">Approach</h3>
          <p className="mt-2 text-sm text-slate-600">Research-driven strategy → visual direction → rapid prototyping → launch → iterate with analytics and insights.</p>
        </div>
      </div>

      <div id="services" className="mt-16">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Services</h2>
        <p className="mt-2 max-w-3xl text-slate-600">
          Full-service creative and growth support. Each engagement includes strategic discovery, design production, and performance measurement for continuous improvement.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="group relative rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="mb-3 inline-flex items-center justify-center rounded-2xl bg-indigo-50 p-2">
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
              <div className="mt-4 text-[13px] text-indigo-600">Learn more →</div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-600 p-8 text-white shadow-lg">
          <h3 className="text-xl font-semibold">Mission</h3>
          <p className="mt-2 opacity-90">Design that delights. Marketing that converts. Strategy that scales. Let’s align creativity with growth to build a brand people love and remember.</p>
          <a href="#contact" className="mt-5 inline-block rounded-2xl bg-white/15 px-5 py-2 text-sm font-semibold backdrop-blur-sm transition hover:bg-white/25">Let's Build Your Brand</a>
        </div>
      </div>
    </section>
  );
}
