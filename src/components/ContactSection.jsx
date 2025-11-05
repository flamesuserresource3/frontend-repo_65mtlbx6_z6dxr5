import React, { useState } from 'react';
import { Mail, Phone, Calendar } from 'lucide-react';

export default function ContactSection() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! Your message has been received. I will get back to you shortly.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative mx-auto max-w-7xl scroll-mt-20 px-6 pb-24 pt-10">
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
        <div className="rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-600 p-8 text-white shadow-lg">
          <h3 className="text-2xl font-semibold">Let’s Build Your Brand</h3>
          <p className="mt-2 text-white/90">Book a discovery call or send a message. I’ll reply within 24 hours.</p>

          <div className="mt-6 space-y-3 text-sm">
            <a href="mailto:hello@yasir.design" className="flex items-center gap-2 transition hover:opacity-90">
              <Mail className="h-4 w-4" /> hello@yasir.design
            </a>
            <a href="tel:+1234567890" className="flex items-center gap-2 transition hover:opacity-90">
              <Phone className="h-4 w-4" /> +1 (234) 567-890
            </a>
            <a href="https://calendly.com/" target="_blank" rel="noreferrer" className="flex items-center gap-2 transition hover:opacity-90">
              <Calendar className="h-4 w-4" /> Book on Calendly
            </a>
          </div>

          <div className="mt-6 flex gap-3">
            <a aria-label="Twitter" href="https://twitter.com/" target="_blank" rel="noreferrer" className="rounded-xl bg-white/15 px-3 py-2 text-xs font-semibold backdrop-blur-sm hover:bg-white/25">Twitter</a>
            <a aria-label="LinkedIn" href="https://linkedin.com/" target="_blank" rel="noreferrer" className="rounded-xl bg-white/15 px-3 py-2 text-xs font-semibold backdrop-blur-sm hover:bg-white/25">LinkedIn</a>
            <a aria-label="Dribbble" href="https://dribbble.com/" target="_blank" rel="noreferrer" className="rounded-xl bg-white/15 px-3 py-2 text-xs font-semibold backdrop-blur-sm hover:bg-white/25">Dribbble</a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100 lg:col-span-2">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-slate-700">Name</label>
              <input required name="name" className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 outline-none transition focus:border-indigo-400 focus:bg-white" />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Email</label>
              <input type="email" required name="email" className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 outline-none transition focus:border-indigo-400 focus:bg-white" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm font-medium text-slate-700">Project Type</label>
              <select name="type" className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 outline-none transition focus:border-indigo-400 focus:bg-white">
                <option>Branding</option>
                <option>Web Design</option>
                <option>Marketing</option>
                <option>Other</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm font-medium text-slate-700">Message</label>
              <textarea required rows={5} name="message" className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 outline-none transition focus:border-indigo-400 focus:bg-white" />
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <button type="submit" className="rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 text-white shadow-lg shadow-indigo-200 transition hover:brightness-110">Send Message</button>
            <a href="#home" className="text-sm font-semibold text-slate-600 hover:text-slate-800">Back to top</a>
          </div>
          {status && <p className="mt-4 text-sm text-emerald-600">{status}</p>}
        </form>
      </div>
    </section>
  );
}
