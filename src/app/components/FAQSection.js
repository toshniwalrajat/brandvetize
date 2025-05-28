'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'What makes BrandVertise.in different from agencies or freelancers?',
    answer:
      'Were not just agency- we are india #1 website design & developement powerhouse.',
  },
  {
    question: 'Is the website mobile responsive?',
    answer:
      'Yes, the entire website is fully responsive and adapts to all screen sizes using Tailwind CSS breakpoints.',
  },
  {
    question: 'How are the testimonials animated?',
    answer:
      'Each testimonial card is animated into view using Framer Motion with staggered timing for a smooth entrance.',
  },
  {
    question: 'Can I customize the testimonials?',
    answer:
      'Absolutely! You can easily edit or add testimonials by updating the testimonial array in the component.',
  },
  {
    question: 'Is the FAQ section interactive?',
    answer:
      'Yes, the FAQ section uses state management and motion animations to expand/collapse answers on click.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-block px-4 py-1 mb-3 text-xs sm:text-sm font-medium text-white bg-[#1c1c1c] rounded-full border border-[#333]"
        >
          FAQs
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl sm:text-2xl md:text-3xl font-bold mb-12"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="bg-[#111] border border-[#333] rounded-xl p-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left focus:outline-none"
              >
                <span className="font-semibold text-sm sm:text-base">{faq.question}</span>
                <span className="text-lg">{openIndex === index ? '−' : '+'}</span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-400 text-sm sm:text-base mt-3">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
