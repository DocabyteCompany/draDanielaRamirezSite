'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

interface AboutTitleProps {
  delay?: number;
}

const AboutTitle: React.FC<AboutTitleProps> = ({ delay = 0.8 }) => {
  const titleVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        delay: delay,
      },
    },
  };

  return (
    <motion.h2 
      className="text-3xl font-bold mb-4"
      variants={titleVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <span className="text-brand-dark-gray">Acerca de </span>
      <span className="text-brand-primary">mi.</span>
    </motion.h2>
  );
};

export default AboutTitle; 