'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

interface AboutValuesProps {
  delay?: number;
}

const AboutValues: React.FC<AboutValuesProps> = ({ delay = 2.0 }) => {
  const values = [
    { key: 'Confianza', description: 'Creamos un ambiente seguro y transparente.' },
    { key: 'Calidad', description: 'Usamos los mejores materiales y tecnología de punta.' },
    { key: 'Empatía', description: 'Entendemos y atendemos tus necesidades y preocupaciones.' },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: delay,
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      x: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const titleVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        delay: delay - 0.3, // Aparece antes que la lista
      },
    },
  };

  return (
    <motion.div 
      className="mt-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h3 
        className="text-xl font-semibold text-brand-dark-gray"
        variants={titleVariants}
      >
        Nuestros Valores
      </motion.h3>
      <motion.ul 
        className="mt-2 list-disc list-inside text-gray-600 space-y-1"
        variants={containerVariants}
      >
        {values.map((value, index) => (
          <motion.li 
            key={value.key}
            variants={itemVariants}
            className="flex items-start"
          >
            <span className="font-semibold mr-1">{value.key}:</span>
            <span>{value.description}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default AboutValues; 