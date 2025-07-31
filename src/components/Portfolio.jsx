import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Portfolio = () => {
  const projects = [
    { title: "", img: "/image/01.jpeg" },
    { title: "", img: "/image/02.jpeg" },
    { title: "", img: "/image/03.jpeg" },
    { title: "", img: "/image/04.jpeg" },
    { title: "", img: "/image/05.jpeg" },
    { title: "", img: "/image/06.jpeg" },
  ];

  const marqueeText = 'portfolio . portfolio . portfolio . portfolio . portfolio . portfolio .';

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

  const rowVariants = {
    hidden: { opacity: 0, y: 60 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: i * 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="portfolio" className="px-6 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        {/* Marquee */}
        <div className="overflow-hidden whitespace-nowrap w-full bg-transparent py-4 relative">
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
        </div>

        {/* Grid with animation */}
        <motion.div
          ref={ref}
          className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6"
          variants={rowVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-[1.03]"
            >
              <img
                src={p.img}
                alt={p.title || `Project ${i + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
