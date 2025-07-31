import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const marqueeText = 'contact . contact . contact . contact . contact . contact .';

const marqueeVariantsReverse = {
  animate: {
    x: ['-100%', '0%'],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 10,
        ease: 'linear',
      },
    },
  },
};

// Form container animation
const formVariant = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.8, // slower
      ease: [0.25, 1, 0.5, 1], // softer easing (similar to Apple’s website)
    },
  },
};


const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="px-6 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">

        {/* Marquee Header */}
        <div className="overflow-hidden whitespace-nowrap w-full">
          <motion.div
            className="flex"
            variants={marqueeVariantsReverse}
            animate="animate"
          >
            <span className="text-black text-[8rem] font-bold font-Space_Grotesk pr-16 whitespace-nowrap">
              {marqueeText}
            </span>
            <span className="text-black text-[8rem] font-bold font-Space_Grotesk pr-16 whitespace-nowrap">
              {marqueeText}
            </span>
          </motion.div>
        </div>

        <p className="mb-10 text-gray-700">
          Let’s create something amazing together. Drop me a message!
        </p>

        {/* Animated Form Container */}
        <motion.div
          ref={ref}
          variants={formVariant}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="max-w-xl mx-auto text-center"
        >
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border rounded-lg h-32 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
