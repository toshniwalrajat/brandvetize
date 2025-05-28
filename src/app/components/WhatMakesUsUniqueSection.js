'use client';

import { motion } from 'framer-motion';

export default function WhatMakesUsUniqueSection() {
  const comparisons = [
    {
      with: {
        title: "Easy Project Management.",
        description: "Simple processes & clear communication for a hassle-free experience.",
      },
      without: {
        title: "Tedious & Hard to Keep Up.",
        description: "Disorganized processes and poor communication lead to frustration.",
      },
    },
    {
      with: {
        title: "Cost Efficient.",
        description: "Transparent pricing and optimized resources for maximum value.",
      },
      without: {
        title: "Never-ending Invoices.",
        description: "Unclear pricing and hidden costs can drain your budget & your bank.",
      },
    },
    {
      with: {
        title: "Updates every 24–Hours.",
        description: "Regular progress and timely delivery, so you’re always in the loop.",
      },
      without: {
        title: "Slow & Rushed Work.",
        description: "Delays and rushed deliveries can impact your project’s overall success.",
      },
    },
    {
      with: {
        title: "Collaborative Team.",
        description: "Work with friendly pros who understand your goals and communicate well.",
      },
      without: {
        title: "Disengaged Freelancers.",
        description: "Lack of accountability and vision can derail your project.",
      },
    },
  ];

  return (
    <section id="comparison" className="bg-black text-white py-16 px-4 sm:px-6 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <div className="mb-5">
          <span className="inline-block px-4 py-1 text-xs font-medium bg-gray-800 text-gray-300 rounded-full">
            Comparison
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
          What makes us unique?
        </h2>

        <a
          href="#book-call"
          className="inline-block mb-10 px-5 py-2 bg-white text-black rounded-full font-medium text-sm hover:bg-gray-200 transition"
        >
          Book an Intro Call →
        </a>

        <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm font-medium mb-8 text-center sm:text-left">
          <div className="flex items-center gap-2 justify-center text-blue-500">
            <span className="text-lg">😊</span> With Brandvertise.in:
          </div>
          <div className="flex items-center gap-2 justify-center text-red-500">
            <span className="text-lg">😟</span> Without Brandvertise.in:
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          {comparisons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 rounded-2xl overflow-hidden shadow-xl bg-white text-black"
            >
              {/* With Brandvertise */}
              <div className="p-5 sm:p-6 flex gap-4 border-b sm:border-b-0 sm:border-r border-gray-200">
                <div className="text-blue-600 text-lg pt-1">✔</div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg">{item.with.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{item.with.description}</p>
                </div>
              </div>

              {/* Without Brandvertise */}
              <div className="p-5 sm:p-6 flex gap-4">
                <div className="text-red-600 text-lg pt-1">✖</div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg">{item.without.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{item.without.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
