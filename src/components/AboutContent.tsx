'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AboutContentProps {
  delay?: number;
}

const AboutContent: React.FC<AboutContentProps> = ({ delay = 0.5 }) => {
  const contentVariants = {
    hidden: {
      opacity: 0,
      x: 100,
      scale: 0.95,
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
      className="relative bg-white rounded-lg shadow-xl p-6 md:-ml-20 md:max-w-xl mt-8 md:mt-0 z-20 self-end md:mb-4"
      variants={contentVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, threshold: 0.3 }}
    >
      <h2 className="text-3xl font-bold mb-4">
        <span className="text-brand-dark-gray">Acerca de </span>
        <span className="text-brand-primary">mi</span>
      </h2>
      <p className="mt-2 text-gray-600">
        Con más de 15 años de experiencia dedicados a la salud dental, la Dra. Ramírez combina la más alta profesionalidad con un trato cálido y cercano. Su misión es simple: devolverle la sonrisa a cada paciente, asegurando su bienestar y confianza en cada paso del tratamiento.
      </p>
      <p className="mt-4 text-gray-600">
        Graduada con honores de la Universidad Nacional, ha continuado su formación con especializaciones en Ortodoncia y Odontopediatría, manteniéndose siempre a la vanguardia de las últimas tecnologías.
      </p>

      <div className="mt-6">
        <h3 className="text-xl font-semibold text-brand-dark-gray">Nuestros Valores</h3>
        <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
          <li><span className="font-semibold">Confianza:</span> Creamos un ambiente seguro y transparente.</li>
          <li><span className="font-semibold">Calidad:</span> Usamos los mejores materiales y tecnología de punta.</li>
          <li><span className="font-semibold">Empatía:</span> Entendemos y atendemos tus necesidades y preocupaciones.</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default AboutContent; 