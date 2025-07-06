'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

interface AnimatedFormFieldProps {
  children: React.ReactNode;
  delay?: number;
}

const AnimatedFormField: React.FC<AnimatedFormFieldProps> = ({ children, delay = 0.9 }) => {
  const fieldVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
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
    <motion.div
      variants={fieldVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedFormField; 