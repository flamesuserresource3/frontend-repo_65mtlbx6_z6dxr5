import React from 'react';
import { Home, User, Layers, Briefcase, Phone, BookOpen } from 'lucide-react';

export default function Navbar() {
  const linkCls = 'flex items-center gap-1 hover:text-slate-900';
  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#/" className="font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Yasir</span>
          <span className="ml-2 hidden text-slate-500 sm:inline">Marketing & Design</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-700 sm:flex">
          <a href="#/" className={linkCls}><Home className="h-4 w-4" /> Home</a>
          <a href="#/about" className={linkCls}><User className="h-4 w-4" /> About</a>
          <a href="#/services" className={linkCls}><Layers className="h-4 w-4" /> Services</a>
          <a href="#/portfolio" className={linkCls}><Briefcase className="h-4 w-4" /> Work</a>
          <a href="#/cases" className={linkCls}><BookOpen className="h-4 w-4" /> Case Studies</a>
          <a href="#/contact" className={linkCls}><Phone className="h-4 w-4" /> Contact</a>
        </nav>
        <a href="#/contact" className="rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm sm:inline-block">
          Free Consultation
        </a>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />
    </header>
  );
}
