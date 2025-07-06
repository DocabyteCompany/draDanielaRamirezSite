'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface AboutImageProps {
  delay?: number;
}

const AboutImage: React.FC<AboutImageProps> = ({ delay = 0.2 }) => {
  const imageVariants = {
    hidden: {
      opacity: 0,
      x: -100,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: delay,
      },
    },
  };

  return (
    <motion.div 
      className="md:w-[480px] md:h-[540px] w-[370px] h-[420px] flex-shrink-0 flex justify-center items-start z-10 relative mx-auto"
      variants={imageVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, threshold: 0.3 }}
    >
      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-brand-light-gray border-8 border-white">
        <Image
          src="https://images.unsplash.com/photo-1581954211248-0067887bc235?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Foto profesional de la Dra. Daniela Ramírez"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
    </motion.div>
  );
};

export default AboutImage; 