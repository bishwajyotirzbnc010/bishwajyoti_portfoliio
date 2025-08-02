// src/functions/marqueeVariantsForward.js

// Function to handle forward marquee animation
export const marqueeVariantsForward = {
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
