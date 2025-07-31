import React from 'react';
import { motion } from 'framer-motion';

const marqueeText = 'about . about . about . about . about . about .';

const marqueeVariants = {
  animate: {
    x: ['0%', '-100%'],
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
const About = () => {
  return (
    <section id="about" className="px-6 py-20 bg-black">
      <div className="max-w-6xl mx-auto">
        
        <div className="overflow-hidden w-full bg-transparent py-4 relative space-y-8">
       
              <div className="overflow-hidden whitespace-nowrap w-full">
                      <motion.div
                        className="flex"
                        variants={marqueeVariants}
                        animate="animate"
                      >
                        <span className="text-white text-[8rem] font-bold font-Space_Grotesk pr-16 whitespace-nowrap">
                          {marqueeText}
                        </span>
                        <span className="text-white text-[8rem] font-bold font-Space_Grotesk pr-16 whitespace-nowrap">
                          {marqueeText}
                        </span>
                      </motion.div>
                    </div>
            </div>
        <div className="max-w-2xl mx-auto text-center">
        <p className="text-lg text-white leading-relaxed">
          I'm a passionate visual storyteller dedicated to capturing timeless moments through the lens. 
          My work blends creativity, emotion, and narrative to craft experiences that resonate deeply.
        </p>
        </div>
      </div>
    </section>
  );
};

export default About;
