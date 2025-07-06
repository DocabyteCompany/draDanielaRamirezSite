'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

interface ServicesTitleProps {
  delay?: number;
}

const ServicesTitle: React.FC<ServicesTitleProps> = ({ delay = 0.0 }) => {
  const titleVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        delay: delay,
      },
    },
  };

  return (
    <motion.h2 
      className="text-3xl font-bold text-center text-brand-dark-gray mb-12"
      variants={titleVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      Nuestros Servicios
    </motion.h2>
  );
};

export default ServicesTitle; 