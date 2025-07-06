'use client';

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';

interface AnimatedSubmitButtonProps {
  delay?: number;
  onSubmit?: () => void;
}

const AnimatedSubmitButton: React.FC<AnimatedSubmitButtonProps> = ({ delay = 1.2, onSubmit }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const buttonVariants: Variants = {
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
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        delay: delay,
      },
    },
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    loading: {
      scale: [1, 0.95, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const handleClick = () => {
    setIsSubmitting(true);
    // Simular envío
    setTimeout(() => {
      setIsSubmitting(false);
      if (onSubmit) onSubmit();
    }, 2000);
  };

  return (
    <motion.button
      type="submit"
      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-lg text-lg font-medium text-white bg-brand-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transition-all duration-300 hover:shadow-2xl hover:shadow-brand-primary/40"
      variants={buttonVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.4)",
      }}
      whileTap={{ scale: 0.95 }}
      animate={isSubmitting ? "loading" : "pulse"}
      onClick={handleClick}
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
        />
      ) : null}
      {isSubmitting ? "Enviando..." : "Reservar mi Cita"}
    </motion.button>
  );
};

export default AnimatedSubmitButton; 