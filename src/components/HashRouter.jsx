import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ServicesPage from './ServicesPage';
import PortfolioPage from './PortfolioPage';
import ContactPage from './ContactPage';
import CaseStudiesPage from './CaseStudiesPage';

const routes = {
  '/': { title: 'Yasir – Creative Marketing & Design Expert | Portfolio', desc: 'Branding, web design, social media, SEO, Google Ads, email, and video for growth-focused brands.', keywords: 'creative marketing, branding, logo design, web design, Webflow, WordPress, social media, SEO, Google Ads, email, video', el: <HomePage /> },
  '/about': { title: 'About Yasir | Creative Marketing & Design Expert', desc: 'Experience, values, and creative process across branding, design, and performance marketing.', keywords: 'Yasir, creative marketing expert, branding, UI/UX, design process, experience, values', el: <AboutPage /> },
  '/services': { title: 'Services | Branding, Web Design, SEO, Social, Ads', desc: 'Branding & logo, graphic design, WordPress & Webflow websites, social media, Google Ads & SEO, email marketing, video production.', keywords: 'branding services, logo design, graphic design, website design, Webflow, WordPress, social media marketing, Google Ads, SEO, email marketing, video production', el: <ServicesPage /> },
  '/portfolio': { title: 'Portfolio & Client Stories | Case Studies & Results', desc: 'Explore portfolio across branding, design, and marketing with testimonials, visuals, and impact metrics.', keywords: 'portfolio, case studies, branding projects, marketing campaigns, testimonials, before after, results', el: <PortfolioPage /> },
  '/cases': { title: 'Case Studies | In-Depth Stories & Outcomes', desc: 'In-depth write-ups with approaches, artifacts, and measurable outcomes.', keywords: 'case studies, blog, branding stories, marketing results, design process', el: <CaseStudiesPage /> },
  '/contact': { title: 'Contact Yasir | Book a Free Consultation', desc: 'Discuss branding, web design, and growth marketing. Book a call via Calendly or send a message.', keywords: 'contact, book call, free consultation, Calendly, marketing expert', el: <ContactPage /> },
};

function getPath() {
  const raw = window.location.hash.replace('#', '');
  return raw.startsWith('/') ? raw : '/';
}

export default function HashRouter() {
  const [path, setPath] = useState(getPath());

  useEffect(() => {
    const onHashChange = () => setPath(getPath());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const route = useMemo(() => routes[path] || routes['/'], [path]);

  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]') || (() => {
      const m = document.createElement('meta');
      m.name = 'description';
      document.head.appendChild(m);
      return m;
    })();
    const metaKeywords = document.querySelector('meta[name="keywords"]') || (() => {
      const m = document.createElement('meta');
      m.name = 'keywords';
      document.head.appendChild(m);
      return m;
    })();
    document.title = route.title;
    metaDescription.setAttribute('content', route.desc);
    metaKeywords.setAttribute('content', route.keywords);
  }, [route]);

  return (
    <div className="min-h-[70vh]">
      <AnimatePresence mode="wait">
        <motion.div
          key={path}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          {route.el}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
