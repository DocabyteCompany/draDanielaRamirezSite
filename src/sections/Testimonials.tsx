"use client"; // This component uses client-side state and effects

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

import testimonialImage1 from '@/imgs/testimonials/testimonial-1.png';
import testimonialImage2 from '@/imgs/testimonials/testimonial-2.png';
import testimonialImage3 from '@/imgs/testimonials/testimonial-3.png';

const testimonials = [
  {
    quote: 'El diseño de sonrisa que me hicieron cambió mi vida. Ahora sonrío en cada foto sin dudarlo. ¡El resultado es súper natural y el proceso fue increíblemente sencillo!',
    name: 'Valentina Rojas',
    title: 'Paciente de Diseño de Sonrisa',
    image: testimonialImage1,
  },
  {
    quote: 'Al principio no quería usar brackets, ¡pero ahora me encantan! Mi mamá está feliz y yo ya quiero ver mi sonrisa final. ¡No duelen tanto como dicen!',
    name: 'Isabella "Isa" Castro',
    title: 'Paciente de Ortodoncia (12 años)',
    image: testimonialImage2,
  },
  {
    quote: 'Después de perder una pieza, pensé que nunca volvería a comer con normalidad. Los implantes se sienten como mis propios dientes. Un trabajo impecable, 100% recomendado.',
    name: 'Ricardo Morales',
    title: 'Paciente de Implantes',
    image: testimonialImage3,
  },
];

// Hook para detectar si es móvil
function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isMobile;
}

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000); // Change testimonial every 6 seconds

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  const currentTestimonial = testimonials[index];

  const textVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  };
  
  const authorVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const imageVariants = isMobile
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      };

  return (
    <section
      className="relative z-10 bg-brand-light-gray bg-gray-100"
      style={{ backgroundColor: '#F3F4F6', backgroundImage: 'none', boxShadow: 'none' }}
    >
      <div className="container mx-auto my-40 bg-brand-light-gray bg-gray-100 rounded-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] bg-brand-light-gray bg-gray-100 rounded-2xl">
          {/* Left side: Text content */}
          <div className="flex flex-col justify-center px-6 py-12 sm:px-12 bg-white rounded-tr-[80px]">
            <h3 className="text-xl font-bold text-brand-dark-gray/50 mb-4 tracking-widest uppercase">
              Testimoniales
            </h3>
            <div className="relative w-full overflow-hidden min-h-[200px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <blockquote className="text-2xl text-brand-dark-gray leading-relaxed">
                    “{currentTestimonial.quote}”
                  </blockquote>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Imagen: posición absoluta para ambos, tamaño y bottom responsivo */}
          <div className="relative min-h-[220px] lg:min-h-full flex justify-center items-end bg-brand-light-gray bg-gray-100">
            <AnimatePresence>
              <motion.div
                key={index}
                variants={imageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="absolute left-1/2 -translate-x-1/2 bottom-0 lg:bottom-10 flex justify-center items-end"
              >
                <Image
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  width={isMobile ? 180 : 400}
                  height={isMobile ? 180 : 400}
                  style={{ objectFit: 'contain' }}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="bg-brand-dark-gray text-white px-6 pt-6 sm:px-12 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl"
          style={{ paddingBottom: '24px', marginBottom: '60px' }}
        >
          <div className="relative overflow-hidden min-h-[50px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                variants={authorVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5, delay: 0.1 }}
                className="absolute inset-0"
              >
                <div className="font-bold text-lg">{currentTestimonial.name}</div>
                <div className="text-gray-300">{currentTestimonial.title}</div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 