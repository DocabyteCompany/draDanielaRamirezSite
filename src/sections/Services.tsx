import React from 'react';
import ServiceCard from '@/components/ServiceCard';
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
  },
  {
    icon: <TbBraces size={32} />,
    title: 'Ortodoncia',
    description: 'Alineamos tu sonrisa con los tratamientos de ortodoncia más modernos.',
  },
  {
    icon: <TbSparkles size={32} />,
    title: 'Blanqueamiento',
    description: 'Recupera el blanco natural de tus dientes de forma segura y eficaz.',
  },
  {
    icon: <TbDentalBroken size={32} />,
    title: 'Implantes',
    description: 'Soluciones permanentes y de aspecto natural para dientes perdidos.',
  },
  {
    icon: <TbHeart size={32} />,
    title: 'Odontopediatría',
    description: 'Cuidado dental especializado y amigable para los más pequeños de la casa.',
  },
  {
    icon: <TbFirstAidKit size={32} />,
    title: 'Emergencias',
    description: 'Atención rápida y eficaz para tus urgencias dentales.',
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-20 bg-brand-light-gray">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-brand-dark-gray mb-12">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 