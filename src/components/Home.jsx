import React from 'react';
import { motion } from 'framer-motion';
import {
  containerVariants,
  itemVariants,
  imageVariants,
} from '../functions/homeAnimations';

const Home = () => {
  return (
    <section id='home' className="text-center px-6 py-30 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Animated Text Section */}
      <motion.div
        className="flex flex-col items-start text-left space-y-6 mx-12"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.h1 className="text-5xl sm:text-7xl md:text-8xl font-bold" variants={itemVariants}>
          Visual Journey
        </motion.h1>

        <motion.p className="text-lg text-gray-700 md:w-4/5" variants={itemVariants}>
          Welcome to a visual journey that transcends time and space. 
          Discover the artistry of moments captured in motion.
        </motion.p>

        <motion.div className="flex justify-center" variants={itemVariants}>
          {[
            { href: 'https://www.youtube.com/@tobi_memo', label: 'YT' },
            { href: 'https://www.facebook.com/', label: 'FB' },
            { href: 'https://www.instagram.com/tobi_memo', label: 'IG' },
            { href: 'https://x.com/Bishwajyoti_R3', label: 'X' },
            { href: 'https://www.linkedin.com/in/bishwajyoti-rajbanshi-1a4b322aa', label: 'LN' },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full border bg-white hover:bg-black hover:text-white transition-colors -ml-3 first:ml-0"
            >
              {social.label}
            </a>
          ))}
        </motion.div>

        <motion.hr className="my-2 w-full border-gray-300" variants={itemVariants} />

        <motion.div className="flex flex-col sm:flex-row gap-8 mt-4" variants={itemVariants}>
          <div className="text-lg">
            <span className="block text-3xl font-bold">+250k</span>
            Videos reaching wide audiences
          </div>
          <div className="text-lg">
            <span className="block text-3xl font-bold">+800k</span>
            Hours watched, cinematic impact
          </div>
        </motion.div>
      </motion.div>

      {/* Animated Image Section */}
      <motion.div
        className="flex justify-center"
        variants={imageVariants}
        initial="hidden"
        animate="show"
      >
        <div className="w-3/4 sm:w-5/6 md:w-4/5 lg:w-4/5 rounded-3xl overflow-hidden">
          <img
            src="/image/Profile_pic.png"
            alt="Profile"
            className="w-full h-auto object-cover"
            style={{
              WebkitMaskImage: "url('/image/Mask.svg')",
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskSize: 'cover',
              WebkitMaskPosition: 'center',
              maskImage: "url('/image/Mask.svg')",
              maskRepeat: 'no-repeat',
              maskSize: 'cover',
              maskPosition: 'center',
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
