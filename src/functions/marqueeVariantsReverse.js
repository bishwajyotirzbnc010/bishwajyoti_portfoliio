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