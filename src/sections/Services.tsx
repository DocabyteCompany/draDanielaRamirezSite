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
    detailedInfo: {
      duration: '45-60 minutos',
      price: 'Desde $50',
      procedure: 'Incluye remoción de placa, sarro, pulido dental y aplicación de flúor para proteger tus dientes.',
      benefits: [
        'Previene caries y enfermedades de las encías',
        'Elimina manchas superficiales',
        'Fresca el aliento',
        'Detecta problemas tempranos'
      ]
    }
  },
  {
    icon: <TbBraces size={32} />,
    title: 'Ortodoncia',
    description: 'Alineamos tu sonrisa con los tratamientos de ortodoncia más modernos.',
    delay: 0.45,
    detailedInfo: {
      duration: '18-24 meses',
      price: 'Desde $2,500',
      procedure: 'Evaluación inicial, plan de tratamiento personalizado, brackets metálicos o cerámicos, y retención post-tratamiento.',
      benefits: [
        'Corrige la alineación dental',
        'Mejora la función masticatoria',
        'Previene problemas de ATM',
        'Aumenta la confianza en la sonrisa'
      ]
    }
  },
  {
    icon: <TbSparkles size={32} />,
    title: 'Blanqueamiento',
    description: 'Recupera el blanco natural de tus dientes de forma segura y eficaz.',
    delay: 0.6,
    detailedInfo: {
      duration: '1-2 horas',
      price: 'Desde $200',
      procedure: 'Aplicación profesional de gel blanqueador con luz LED, seguido de tratamiento en casa para mantener resultados.',
      benefits: [
        'Resultados inmediatos y duraderos',
        'Proceso seguro y controlado',
        'Mejora la apariencia dental',
        'Aumenta la autoestima'
      ]
    }
  },
  {
    icon: <TbDentalBroken size={32} />,
    title: 'Implantes',
    description: 'Soluciones permanentes y de aspecto natural para dientes perdidos.',
    delay: 0.75,
    detailedInfo: {
      duration: '3-6 meses',
      price: 'Desde $1,500',
      procedure: 'Evaluación con radiografías, colocación del implante, período de osteointegración y colocación de la corona final.',
      benefits: [
        'Reemplazo permanente de dientes',
        'Mantiene la estructura facial',
        'Funciona como dientes naturales',
        'Previene la pérdida de hueso'
      ]
    }
  },
  {
    icon: <TbHeart size={32} />,
    title: 'Odontopediatría',
    description: 'Cuidado dental especializado y amigable para los más pequeños de la casa.',
    delay: 0.9,
    detailedInfo: {
      duration: '30-45 minutos',
      price: 'Desde $40',
      procedure: 'Examen dental completo, limpieza, aplicación de selladores, educación sobre higiene oral y seguimiento preventivo.',
      benefits: [
        'Crea hábitos saludables desde pequeños',
        'Previene caries tempranas',
        'Ambiente amigable para niños',
        'Educación para padres e hijos'
      ]
    }
  },
  {
    icon: <TbFirstAidKit size={32} />,
    title: 'Emergencias',
    description: 'Atención rápida y eficaz para tus urgencias dentales.',
    delay: 1.05,
    detailedInfo: {
      duration: 'Variable según urgencia',
      price: 'Desde $80',
      procedure: 'Evaluación inmediata del problema, alivio del dolor, tratamiento temporal o definitivo según el caso.',
      benefits: [
        'Atención inmediata 24/7',
        'Alivio rápido del dolor',
        'Prevención de complicaciones',
        'Paz mental en emergencias'
      ]
    }
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
              detailedInfo={service.detailedInfo}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Services; 