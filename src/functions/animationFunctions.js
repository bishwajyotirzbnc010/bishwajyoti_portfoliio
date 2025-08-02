// src/functions/animationFunctions.js
import { useInView } from 'framer-motion';

// Function to handle row animation variants
export const rowVariants = {
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

// Function to handle scroll detection with framer-motion
export const useScrollInView = (ref) => {
  return useInView(ref, { once: true, margin: '-100px' });
};

// Function to handle marquee animation
export const marqueeVariantsReverse = {
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
