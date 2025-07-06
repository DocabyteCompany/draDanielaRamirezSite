'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import AboutImage from '@/components/AboutImage';
import AboutContent from '@/components/AboutContent';
import AboutTitle from '@/components/AboutTitle';
import AboutValues from '@/components/AboutValues';

const About = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
          <motion.section 
      id="sobre-mi" 
      className="py-20 bg-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-5xl mx-auto px-6 mb-30 flex flex-col md:flex-row justify-center items-start md:h-[600px] relative">
        {/* Image Column */}
        <AboutImage delay={0.2} />
        
        {/* Text Column */}
        <div className="relative bg-white rounded-lg shadow-xl p-6 md:-ml-20 md:max-w-xl mt-8 md:mt-0 z-20 self-end md:mb-4">
          <AboutTitle delay={0.8} />
          
          <motion.p 
            className="mt-2 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Con más de 15 años de experiencia dedicados a la salud dental, la Dra. Ramírez combina la más alta profesionalidad con un trato cálido y cercano. Su misión es simple: devolverle la sonrisa a cada paciente, asegurando su bienestar y confianza en cada paso del tratamiento.
          </motion.p>
          
          <motion.p 
            className="mt-4 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Graduada con honores de la Universidad Nacional, ha continuado su formación con especializaciones en Ortodoncia y Odontopediatría, manteniéndose siempre a la vanguardia de las últimas tecnologías.
          </motion.p>

          <AboutValues delay={2.0} />
        </div>
      </div>
    </motion.section>
  );
};

export default About; 