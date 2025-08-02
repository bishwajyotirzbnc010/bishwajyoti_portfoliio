import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { FaVideo, FaPaintBrush, FaFilm, FaCode, FaCheckCircle } from 'react-icons/fa';
import { marqueeVariantsForward } from '../functions/marqueeVariantsForward';
import { cardVariants } from '../functions/cardVariants';
import { skillData } from '../data/skillData';

// Map icon string to actual components
const iconMap = {
  FaVideo: <FaVideo size={26} />,
  FaPaintBrush: <FaPaintBrush size={26} />,
  FaFilm: <FaFilm size={26} />,
  FaCode: <FaCode size={26} />,
};

const marqueeText = 'Skills . Skills . Skills . Skills . Skills . Skills .';

const Skills = () => (
  <section id="skills" className="relative py-20 px-6 sm:px-12 md:px-20 bg-gray-50 overflow-hidden">
    <div
      className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-40 blur-sm pointer-events-none"
      style={{ backgroundImage: "url('/image/abstract_grainy_bg.jpg')" }}
    />
    <div className="relative max-w-6xl mx-auto text-center mb-12 z-10">
      {/* Marquee */}
      <div className="overflow-hidden whitespace-nowrap w-full">
        <motion.div
          className="flex"
          variants={marqueeVariantsForward}
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

      <p className="text-gray-600 max-w-3xl mx-auto">
        From framing cinematic shots to crafting compelling visuals and coding seamless digital experiences—my work lives at the crossroads of art and technology...
      </p>
    </div>

    {/* Skills Grid */}
    <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto z-10">
      {skillData.map((group, i) => (
        <motion.div
          key={group.id}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
        >
          <Tilt
            tiltEnable
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            glareEnable={false}
            scale={1.02}
            transitionSpeed={450}
            className="bg-white/60 backdrop-blur-md border border-white/30 rounded-2xl shadow-md p-6 text-left hover:shadow-xl transition-shadow duration-300 ease-in-out"
            style={{ height: '100%' }}
          >
            <div className="text-gray-800 mb-3 flex items-center gap-2">
              {iconMap[group.icon]}
              <h3 className="text-lg font-semibold">{group.title}</h3>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              {group.skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2">
                  <FaCheckCircle className="text-gray-400 text-xs" />
                  {skill}
                </li>
              ))}
            </ul>
          </Tilt>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Skills;
