// src/functions/formVariant.js

export const formVariant = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.8,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};
