'use client';

import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';

const steps = [
  {
    title: 'Planning & Design',
    description:
      'We start by understanding your brand and goals, followed by creating a design tailored to your vision.',
    borderColor: 'border-yellow-400/30',
  },
  {
    title: 'Development',
    description:
      'Our team brings the design to life with clean, efficient code, ensuring your website is fast and scalable.',
    borderColor: 'border-blue-400/30',
  },
  {
    title: 'Optimization & SEO',
    description:
      'We optimize for performance and implement SEO best practices to ensure your website ranks and performs well.',
    borderColor: 'border-purple-400/30',
  },
  {
    title: 'Launch & Monitoring',
    description:
      'After launch, we continuously monitor performance and stability to ensure everything runs smoothly.',
    borderColor: 'border-green-400/30',
  },
  {
    title: 'Support & Scaling',
    description:
      'We’re here for long-term support and scale your website as your business grows.',
    borderColor: 'border-pink-400/30',
  },
];

// Framer Motion variants for staggered animation
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function WhatToExpectSection() {
  return (
    <section className="relative z-10 bg-black text-white py-20 px-6 md:px-12">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-xs text-gray-400 bg-white/10 px-3 py-1 rounded-full mb-4 inline-block">
            How it starts?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">See what you can expect.</h2>
        </motion.div>
      </div>

      {/* Container with staggered child animation */}
      <motion.div
        className="space-y-6 max-w-3xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className={`bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border ${step.borderColor} p-6 md:p-8 rounded-xl shadow-sm hover:shadow-lg hover:shadow-purple-500/20 transition duration-300`}
          >
            <div className="flex items-start gap-4">
              <Lightbulb size={28} className="text-white mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                <p className="text-sm text-gray-400">{step.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
