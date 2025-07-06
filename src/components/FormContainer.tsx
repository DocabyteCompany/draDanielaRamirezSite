'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

interface FormContainerProps {
  children: React.ReactNode;
  delay?: number;
}

const FormContainer: React.FC<FormContainerProps> = ({ children, delay = 0.0 }) => {
  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        delay: delay,
      },
    },
  };

  return (
    <motion.div 
      className="max-w-2xl mx-auto bg-white rounded-lg shadow-2xl p-8 md:p-12 border-t-8 border-brand-primary"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default FormContainer; 