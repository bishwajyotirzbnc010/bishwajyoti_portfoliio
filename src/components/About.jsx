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

const popUpVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
    },
  },
};

const About = () => {
  return (
    <section id="about" className="px-6 py-20 bg-black ">
      <div className="max-w-6xl mx-auto">
        
        <div className="overflow-hidden w-full bg-transparent py-4 relative space-y-8">
       
           <div className="overflow-hidden whitespace-nowrap w-full">
              <motion.div
                className="flex"
                variants={marqueeVariants}
                animate="animate"
              >
                <span className="text-white text-[4rem] md:text-[6rem] lg:text-[8rem] font-bold font-Space_Grotesk pr-16 whitespace-nowrap">
                  {marqueeText}
                </span>
                <span className="text-white text-[4rem] md:text-[6rem] lg:text-[8rem] font-bold font-Space_Grotesk pr-16 whitespace-nowrap">
                  {marqueeText}
                </span>
              </motion.div>
            </div>
         </div>
        <div className="text-center max-w-3xl mx-auto">
        <motion.div
          className="experience-item"
          variants={popUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}>
    <p className="text-lg text-white leading-relaxed">
      I'm a passionate visual storyteller committed to turning ideas into emotionally rich, visually striking experiences. Whether behind the camera capturing cinematic moments, designing compelling visuals, building immersive web experiences, or crafting content that resonates, I bring a multidimensional creative vision to every project.
      </p>
      </motion.div>

      <br /><br />

      <motion.div
          className="experience-item"
          variants={popUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}>
          <p className="text-lg text-white leading-relaxed">
      My background in cinematography, photography, graphic design, and web development allows me to approach storytelling from every angle — blending emotion, narrative, and design into a seamless brand experience. I don’t just create visuals; I build moments that connect, inspire, and last.
    </p>
    </motion.div>    
  </div>
      </div>
    </section>
  );
};

export default About;
