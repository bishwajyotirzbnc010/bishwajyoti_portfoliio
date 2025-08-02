import React from 'react';
import { motion } from 'framer-motion';
import { marqueeVariantsReverse } from '../functions/marqueeVariantsReverse';  // Importing the reversed marquee animation function
import { popUpVariants } from '../functions/popUpVariants';  // Importing the pop-up animation function

const marqueeText = 'Experience . Experience . Experience . Experience . Experience . Experience .';

const Experience = () => {
  return (
    <section id="experience" className="px-6 py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Marquee Animation */}
        <div className="overflow-hidden whitespace-nowrap w-full">
          <motion.div
            className="flex"
            variants={marqueeVariantsReverse}  // Using the reverse marquee animation
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

        {/* Experience Items */}
        <div className="max-w-[600px] mx-auto my-8 flex flex-col gap-12">
          <motion.div
            className="experience-item"
            variants={popUpVariants}  // Using the pop-up animation
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <h3 className="text-2xl font-Space_Grotesk mb-1.5">
              Lead Cinematographer — I.M. Vision Studio
            </h3>
            <p className="text-sm font-semibold text-gray-500 tracking-wider mb-4">
              Biratnagar, Nepal · Jan 2021 – Present
            </p>
            <p className="text-base leading-7 text-gray-800">
              Directed and shot over 200+ wedding and commercial projects. Delivered visually compelling stories by mastering camera composition, lighting design, and storytelling through motion.
            </p>
          </motion.div>

          <motion.div
            className="experience-item"
            variants={popUpVariants}  // Using the pop-up animation
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <h3 className="text-2xl font-Space_Grotesk mb-1.5">
              Freelance Filmmaker & Editor
            </h3>
            <p className="text-sm tracking-wider text-gray-500 font-semibold mb-4">
              Remote · Jun 2019 – Dec 2020
            </p>
            <p className="text-base leading-7 text-gray-800">
              Worked with independent artists and production houses to shoot short films, product ads, and event videos. Managed entire post-production using Premiere Pro and DaVinci Resolve.
            </p>
          </motion.div>

          <motion.div
            className="experience-item"
            variants={popUpVariants}  // Using the pop-up animation
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <h3 className="text-2xl font-Space_Grotesk mb-1.5">
              Content Creator — Local Event Studios
            </h3>
            <p className="text-sm text-gray-500 font-semibold tracking-wider mb-4">
              Biratnagar, Nepal · 2018 – 2019
            </p>
            <p className="text-base leading-7 text-gray-800">
              Collaborated with cultural and social event organizers to film, edit, and produce creative video reels. Gained hands-on experience with gimbal work, audio syncing, and multi-cam setups.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
