'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

interface AnimatedServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const AnimatedServiceCard: React.FC<AnimatedServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  delay = 0.3 
}) => {
  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
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

  const iconVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 360,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        delay: delay + 0.2,
      },
    },
  };

  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
    >
      <motion.div 
        className="bg-brand-primary text-white rounded-full p-4"
        variants={iconVariants}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold mt-4 text-brand-dark-gray">{title}</h3>
      <p className="mt-2 text-gray-600 flex-grow">{description}</p>
      <motion.button 
        className="mt-4 text-brand-primary font-semibold hover:underline"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Más info
      </motion.button>
    </motion.div>
  );
};

export default AnimatedServiceCard; 