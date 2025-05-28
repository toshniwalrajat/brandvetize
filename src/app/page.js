'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import CardsSection from './components/CardsSection';
import WebsiteNeedsSection from './components/WebsiteNeedsSection';
import WhatToExpectSection from './components/WhatToExpectSection';
import WhatMakesUsUniqueSection from './components/WhatMakesUsUniqueSection';
import TestimonialSection from './components/TestimonialSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const logos = [
    '/darglobal.png',
    '/sraya.avif',
    '/asli-explorer.avif',
    '/heart.gif',
    '/oargglobal.png',
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative min-h-screen text-white overflow-hidden bg-black">
      {/* Stars Background */}
      <div
        className="absolute inset-0 bg-[url('/stars.png')] bg-repeat opacity-20 animate-stars z-0"
        style={{
          backgroundSize: 'contain',
          animation: 'scrollStars 60s linear infinite',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#100022] via-black to-black z-10 pointer-events-none" />

      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${
          scrolled
            ? 'bg-black shadow-md border-b border-white/10 py-2'
            : 'bg-gradient-to-r from-[#090909] to-black py-4'
        } px-6 md:px-12`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={`text-xl font-semibold tracking-tight whitespace-nowrap ${
              scrolled ? 'text-base' : 'text-xl'
            }`}
          >
            <span className="font-bold md:hidden">B.</span>
            <span className="hidden md:inline">
              <span className="font-bold">Brand</span>vertise.in
            </span>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="hidden md:flex gap-10 text-sm font-medium"
          >
            <a href="#works" className="hover:text-purple-400">Works</a>
            <a href="#benefits" className="hover:text-purple-400">Benefits</a>
            <a href="#comparison" className="hover:text-purple-400">Comparison</a>
          </motion.nav>

          <motion.a
            href="#chat"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="hidden md:inline-block px-5 py-2 bg-[#6C3BFF] hover:bg-[#7c50ff] text-white rounded-lg text-sm font-semibold"
          >
            Chat Now ↗
          </motion.a>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-4 flex flex-col gap-4 px-6 text-sm font-medium"
            >
              <a href="#works" className="hover:text-purple-400">Works</a>
              <a href="#benefits" className="hover:text-purple-400">Benefits</a>
              <a href="#comparison" className="hover:text-purple-400">Comparison</a>
              <a
                href="#chat"
                className="px-5 py-2 mt-2 bg-[#6C3BFF] hover:bg-[#7c50ff] text-white rounded-lg text-sm font-semibold"
              >
                Chat Now ↗
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO Section */}
      <section className="relative z-20 text-center py-28 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block border border-gray-500 rounded-md px-4 py-2 text-sm text-gray-300 mb-6">
            Brandvertise.in – Your Website Partner
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            We Don’t Just Build Websites
            <br className="hidden sm:block" />
            We Build Market Leaders.
          </h1>

          <p className="text-gray-400 max-w-xl mx-auto mb-8 text-sm sm:text-base">
            Your website is your first impression. We make sure it's unforgettable,
            high-converting, and built to dominate.
          </p>

          <a
            href="#book-call"
            className="inline-block px-6 py-3 bg-[#6C3BFF] hover:bg-[#7c50ff] text-white rounded-lg text-sm font-semibold mb-10"
          >
            Book a 15 min call ↗
          </a>

          {/* Logos Marquee */}
          <div className="relative z-20 py-10 overflow-hidden">
            <div className="w-full whitespace-nowrap overflow-hidden">
              <div
                className="flex items-center gap-20 animate-marquee px-6"
                style={{ animationDuration: '25s' }}
              >
                {[...logos, ...logos].map((logo, i) => (
                  <img
                    key={i}
                    src={logo}
                    alt={`logo-${i}`}
                    className="h-6 w-auto object-contain grayscale hover:grayscale-0 transition duration-300 ease-in-out"
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Sections */}
      <section id="benefits" className="relative z-20">
        <CardsSection />
      </section>

      <section className="relative z-20">
        <WebsiteNeedsSection />
      </section>

      <section className="relative z-20">
        <WhatToExpectSection />
      </section>

      <section className="relative z-20">
        <WhatMakesUsUniqueSection />
      </section>

      <section className="relative z-20">
        <TestimonialSection />
      </section>

      <section className="relative z-20 pb-28">
        <FAQSection />
      </section>

      {/* Floating CTA */}
      <a
        href="#book-call"
        className="fixed bottom-6 right-6 z-50 px-4 py-2 bg-[#6C3BFF] hover:bg-[#7c50ff] text-white rounded-lg text-sm font-semibold shadow-lg transition"
      >
        Book a call ↗
      </a>

      {/* Footer */}
      <Footer />
    </main>
  );
}
