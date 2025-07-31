import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import {
  FaVideo,
  FaPaintBrush,
  FaFilm,
  FaCode,
  FaCheckCircle,
} from 'react-icons/fa';

const marqueeText = 'skills . skills . skills . skills . skills . skills .';

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

const skillData = [
  {
    id: 'filmmaking',
    title: 'Filmmaking',
    icon: <FaVideo size={26} />,
    skills: ['Cinematography', 'Lighting', 'Storytelling', 'Script Writing', 'Drone Operating', 'Photography', 'Content Creating'],
  },
  {
    id: 'graphicDesign',
    title: 'Graphic Design',
    icon: <FaPaintBrush size={26} />,
    skills: ['Adobe Photoshop', 'Adobe Illustrator', 'Canva', 'CorelDRAW', 'Adobe Express'],
  },
  {
    id: 'editing',
    title: 'Editing',
    icon: <FaFilm size={26} />,
    skills: ['Adobe Premiere Pro', 'Edius X', 'CapCut', 'DaVinci Resolve', 'Lightroom Classic'],
  },
  {
    id: 'webDevelopment',
    title: 'Web Development',
    icon: <FaCode size={26} />,
    skills: ['HTML', 'CSS', 'JavaScript', 'Tailwind', 'Font Awesome', 'React'],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

const SkillSection = () => (
  <section id="skills" className="relative py-20 px-6 sm:px-12 md:px-20 bg-gray-50 overflow-hidden">
    <div className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-40 blur-sm pointer-events-none"
      style={{ backgroundImage: "url('/image/abstract_grainy_bg.jpg')" }}
    />
    <div className="relative max-w-6xl mx-auto text-center mb-12 z-10">
      <div className="overflow-hidden whitespace-nowrap w-full">
                <motion.div
                  className="flex"
                  variants={marqueeVariants}
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
      <p className="text-gray-600 max-w-3xl mx-auto">A creative balance of filmmaking, design, development, and storytelling—all shaped into clean, immersive experiences.</p>
    </div>
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
        tiltEnable={true}
        tiltMaxAngleX={10} // Reduced from default (e.g. 20–25)
        tiltMaxAngleY={10}
        glareEnable={false}
        scale={1.02}
        transitionSpeed={450}
        className="bg-white/60 backdrop-blur-md border border-white/30 rounded-2xl shadow-md p-6 text-left hover:shadow-xl transition-shadow duration-300 ease-in-out"
        style={{ height: '100%' }}
      >
        <div className="text-gray-800 mb-3 flex items-center gap-2">
          {group.icon}
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

export default SkillSection;
