import React, { useEffect } from 'react';
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
} from 'react-icons/fa6';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  const popOutVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.footer
      ref={ref}
      variants={popOutVariants}
      initial="hidden"
      animate={controls}
      className="bg-black text-white py-10"
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="text-xl font-bold mb-2">tobi memo</h3>
          <p className="text-gray-400">
            Cinematographer. <br />
            Photographer. <br />
            Web Developer. <br />
            Content Creator. <br />
            Graphic Designer.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Portfolio</h4>
          <ul className="space-y-1 text-gray-400">
            <li><a href="#portfolio" className="hover:text-white">Projects</a></li>
            <li><a href="#experience" className="hover:text-white">Experience</a></li>
            <li><a href="#about" className="hover:text-white">About Me</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Services</h4>
          <ul className="space-y-1 text-gray-400">
            <li>Video Editing</li>
            <li>Photography</li>
            <li>Web Development</li>
            <li>Content Strategy</li>
            <li>Graphic Design</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <ul className="space-y-1 text-gray-400">
            <li><a href="#contact" className="hover:text-white">Contact Form</a></li>
            <li>Email: <span className="text-white">bishwajyotirajbanshi@gmail.com</span></li>
            <li>Location: Biratnagar, Nepal</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center">
        <div className="flex justify-center space-x-4 mb-4 text-xl">
          <a href="https://www.youtube.com/@tobi_memo" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="hover:text-red-500 transition-colors" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="hover:text-blue-500 transition-colors" />
          </a>
          <a href="https://www.instagram.com/tobi_memo" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-pink-500 transition-colors" />
          </a>
          <a href="https://x.com/Bishwajyoti_R3" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="hover:text-gray-400 transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/bishwajyoti-rajbanshi-1a4b322aa" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="hover:text-blue-400 transition-colors" />
          </a>
        </div>
        <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} tobi memo. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
