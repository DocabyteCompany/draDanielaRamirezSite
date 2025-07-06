'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import AnimatedServiceCard from '@/components/AnimatedServiceCard';
import ServicesTitle from '@/components/ServicesTitle';
import {
  TbDental as IconTooth,
  TbBraces,
  TbSparkles,
  TbDentalBroken,
  TbHeart,
  TbFirstAidKit,
} from 'react-icons/tb';

const services = [
  {
    icon: <IconTooth size={32} />,
    title: 'Limpieza Dental',
    description: 'Mantén tu sonrisa sana y brillante con nuestras limpiezas profesionales.',
    delay: 0.3,
  },
  {
    icon: <TbBraces size={32} />,
    title: 'Ortodoncia',
    description: 'Alineamos tu sonrisa con los tratamientos de ortodoncia más modernos.',
    delay: 0.45,
  },
  {
    icon: <TbSparkles size={32} />,
    title: 'Blanqueamiento',
    description: 'Recupera el blanco natural de tus dientes de forma segura y eficaz.',
    delay: 0.6,
  },
  {
    icon: <TbDentalBroken size={32} />,
    title: 'Implantes',
    description: 'Soluciones permanentes y de aspecto natural para dientes perdidos.',
    delay: 0.75,
  },
  {
    icon: <TbHeart size={32} />,
    title: 'Odontopediatría',
    description: 'Cuidado dental especializado y amigable para los más pequeños de la casa.',
    delay: 0.9,
  },
  {
    icon: <TbFirstAidKit size={32} />,
    title: 'Emergencias',
    description: 'Atención rápida y eficaz para tus urgencias dentales.',
    delay: 1.05,
  },
];

const Services = () => {
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
      id="servicios" 
      className="py-20 bg-brand-light-gray"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-6">
        <ServicesTitle delay={0.0} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Services; 