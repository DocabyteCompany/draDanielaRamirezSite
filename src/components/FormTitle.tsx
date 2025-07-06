'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

interface FormTitleProps {
  delay?: number;
}

const FormTitle: React.FC<FormTitleProps> = ({ delay = 0.3 }) => {
  const titleVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -30,
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
      className="text-4xl font-bold tracking-tight text-center text-brand-dark-gray mb-2"
      variants={titleVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      Agenda tu Cita
    </motion.h2>
  );
};

export default FormTitle; 