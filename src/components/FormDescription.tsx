'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

interface FormDescriptionProps {
  delay?: number;
}

const FormDescription: React.FC<FormDescriptionProps> = ({ delay = 0.6 }) => {
  const descriptionVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        delay: delay,
      },
    },
  };

  return (
    <motion.p 
      className="text-center text-gray-600 mb-8"
      variants={descriptionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      Completa el formulario y nuestro equipo se pondrá en contacto contigo a la brevedad.
    </motion.p>
  );
};

export default FormDescription; 