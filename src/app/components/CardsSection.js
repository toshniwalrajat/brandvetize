'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const cards = [
  {
    img: '/dental-clinic-site.avif',
    alt: 'Dental Clinic Website',
  },
  {
    img: '/Trump Tower.avif',
    alt: 'Trump Tower Website',
  },
  {
    img: '',
    alt: 'Other works will be updated soon.',
    placeholderText: 'Other works will be updated soon.',
  },
  {
    img: '/yoga-school-site.avif',
    alt: 'Yoga School Website',
  },
];

// Duplicate cards for infinite scroll effect
const duplicatedCards = [...cards, ...cards];

export default function CardsSection() {
  return (
    <section className="py-16 bg-black overflow-hidden w-full">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-white text-2xl md:text-3xl font-bold text-center mb-10"
      >
        Brandvertise.in
      </motion.h2>

      <div className="relative overflow-hidden w-full">
        <motion.div
          className="flex gap-6 w-max px-6"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: 'linear',
          }}
        >
          {duplicatedCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 4) * 0.2 }}
              className="relative min-w-[280px] sm:min-w-[320px] md:min-w-[360px] bg-gradient-to-b from-[#1f1f1f] to-[#0d0d0d] rounded-xl p-1 shadow-lg"
            >
              <div className="rounded-xl overflow-hidden relative">
                {card.img ? (
                  <>
                    <Image
                      src={card.img}
                      alt={card.alt}
                      width={360}
                      height={480}
                      className="w-full h-auto object-cover"
                    />
                    {/* Top-right SVG arrow icon */}
                    <div className="absolute top-3 right-3 z-10 bg-white/10 p-1 rounded-md backdrop-blur-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="white"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 17L17 7M7 7h10v10"
                        />
                      </svg>
                    </div>
                  </>
                ) : (
                  <div className="flex items-center justify-center h-[480px] bg-gradient-to-r from-[#2600fc] to-[#ff00ea] text-white text-center text-lg px-6">
                    {card.placeholderText}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
