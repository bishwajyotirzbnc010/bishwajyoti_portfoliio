// src/functions/popUpVariants.js

// Function to handle pop-up animation for elements
export const popUpVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 12,
    },
  },
};
