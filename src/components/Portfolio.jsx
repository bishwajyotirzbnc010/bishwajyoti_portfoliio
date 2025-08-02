import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';  // Importing projects from data folder
import { rowVariants, useScrollInView } from '../functions/scrollFunctions';  // Importing scroll-related functions
import { marqueeVariantsReverse } from '../functions/marqueeVariantsReverse';  // Importing the reversed marquee animation function

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useScrollInView(ref);  // Scroll detection hook

  const marqueeText = 'portfolio . portfolio . portfolio . portfolio . portfolio . portfolio .';

  return (
    <section id="portfolio" className="px-6 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        {/* Marquee - Reverse */}
        <div className="overflow-hidden whitespace-nowrap w-full bg-transparent py-4 relative">
          <div className="overflow-hidden whitespace-nowrap w-full">
            <motion.div
              className="flex"
              variants={marqueeVariantsReverse}
              animate="animate"
            >
              <span className="text-black text-[4rem] md:text-[6rem] lg:text-[8rem] font-bold font-Space_Grotesk pr-16 whitespace-nowrap">
                {marqueeText}
              </span>
              <span className="text-black text-[4rem] md:text-[6rem] lg:text-[8rem] font-bold font-Space_Grotesk pr-16 whitespace-nowrap">
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
