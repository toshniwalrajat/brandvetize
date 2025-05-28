import { motion } from 'framer-motion';

export default function TestimonialSection() {
  const testimonials = [
    {
      name: 'Valentina Coletti',
      role: 'UX Designer',
      image: '/Valentina Coletti.avif',
      quote:
        'I found Sunny in a moment with high urgency for a project. He was quickly available and flexible, he picked up the tasks easily and worked very hard on short deadlines. Recommended!',
    },
    {
      name: 'Atheek Ahamath',
      role: 'UX Consultant',
      image: '/Atheek Ahamath.avif',
      quote:
        'It’s really amazing! The team Brandvertise.in exceeded my expectations. The website they designed is not just visually stunning but also highly functional and user-friendly.',
    },
    {
      name: 'Dr. Chia Jung Lee',
      role: 'Head : 70Dental',
      image: '/Dr. Chia Jung Lee.avif',
      quote:
        'Great work! The whole process was smooth, communication was clear, and the final result exceeded our expectations. A pleasure working together!',
    },
    {
      name: 'Arrington',
      role: 'Business Consultant',
      image: '/Arrington.jpg',
      quote:
        'Amazing job again! They truly understand what we need and deliver every time. Their attention to detail and creativity is unmatched.',
    },
    {
      name: 'Mike Selane',
      role: 'Kindle Publisher',
      image: '/Mike Selane.webp',
      quote:
        'Great and fast worker! Always delivers high-quality work with attention to detail. Reliable, efficient, and a pleasure to work with!',
    },
    {
      name: 'Ms. Sakshi Jain',
      role: 'Founder : Siraya Health',
      image: '/Ms. Sakshi Jain.avif',
      quote:
        'Very responsive and open to feedback. Always ready to make adjustments and ensures the final result meets expectations.',
    },
  ];

  return (
    <section id="testimonials" className="py-16 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-block px-4 py-1 mb-3 text-xs sm:text-sm font-medium text-white bg-[#1c1c1c] rounded-full border border-[#333]"
        >
          Testimonials
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl sm:text-2xl md:text-3xl font-bold mb-10 sm:mb-12"
        >
          Trusted by businesses worldwide
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#191019] rounded-2xl p-5 sm:p-6 shadow-xl border border-[#333] backdrop-blur-md"
            >
              <p className="text-sm text-gray-300 mb-5">{testimonial.quote}</p>
              <div className="flex items-center gap-3 sm:gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <h4 className="text-sm sm:text-base font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
