'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Wallet, TrendingUp } from 'lucide-react';

const benefits = [
  {
    title: 'End-to-End Service',
    description: `From ideation to launch, we handle every step of your website's journey, ensuring a seamless process.`,
    icon: <CheckCircle className="w-5 h-5 text-white" />,
  },
  {
    title: 'Budget-Friendly Packages',
    description: `No hidden fees. We offer clear and upfront pricing, so you know exactly what you’re investing in.`,
    icon: <Wallet className="w-5 h-5 text-white" />,
  },
  {
    title: 'Long-Term Partnership',
    description: `Our work doesn’t stop at launch. We continually optimize your website to keep it ahead of the competition.`,
    icon: <TrendingUp className="w-5 h-5 text-white" />,
  },
];

const points = [
  "End-to-end web development",
  "Custom website design",
  "Landing page",
  "E-commerce website",
  "Website optimization",
  "SEO (Search Engine Optimization)",
];

export default function CombinedWebsiteNeedsAndBenefits() {
  return (
    <>
      {/* Website Needs Section - first */}
      <section className="relative z-20 bg-black text-white py-20 px-4 md:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 bg-[#121212] p-6 rounded-3xl">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-[#6C3BFF] rounded-2xl p-6 md:p-10 flex flex-col justify-between relative"
          >
            <div className="bg-black rounded-2xl p-6 relative">
              <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-white text-3xl md:text-[36px] font-semibold leading-snug"
              >
                All Your Website Needs, Expertly Handled
              </motion.h2>

              {/* Scribble pulse */}
              <motion.div
                className="absolute left-[180px] top-[110px] text-yellow-400 text-2xl select-none pointer-events-none"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                ~~~~~~
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-6 text-white text-base md:text-lg font-semibold leading-relaxed"
            >
              End-to-end website solutions 💖 that ensure your website looks great,
              functions flawlessly, and drives results. 🚀
            </motion.p>

            <motion.a
              href="#book-call"
              className="mt-6 inline-block bg-black text-white text-sm font-bold py-3 px-6 rounded-lg hover:bg-gray-900 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              BOOK A CALL
            </motion.a>
          </motion.div>

          {/* Right Side - Features List */}
          <motion.div
            className="flex flex-col justify-center divide-y divide-[#2e2e2e]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {points.map((point, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-4 py-4"
              >
                <CheckCircle className="text-purple-400" size={20} />
                <span className="uppercase text-sm font-semibold tracking-wide text-white">
                  {point}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section - after */}
      <section className="relative z-10 bg-black text-white py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-12"
          >
            Because results matter.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                className="bg-[#121212] rounded-3xl p-6 text-left flex flex-col gap-4 shadow-md border border-[#2a2a2a]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-8 h-8 rounded-lg bg-[#6C3BFF] flex items-center justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold">{benefit.title}</h3>
                <p className="text-sm text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
