'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import HeroBackgroundImage from '@/imgs/hero-background.webp';
import { useChatbot } from '@/components/Chatbot';

// Componente para el contador ascendente
const Counter = ({ end, duration = 2, delay = 0 }: { end: number; duration?: number; delay?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const increment = end / (duration * 60); // 60fps
      let current = 0;
      
      const counter = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.floor(current));
        }
      }, 1000 / 60); // 60fps

      return () => clearInterval(counter);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [end, duration, delay]);

  return <span>{count}+</span>;
};

const Hero = () => {
  const chatbotRef = useChatbot();

  const handleScrollToCita = () => {
    const section = document.getElementById('agendar-cita');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactar = () => {
    if (chatbotRef && chatbotRef.current) {
      chatbotRef.current.openWithCustomMessage(
        '¡Hola! Soy el asistente virtual de la clínica. Estoy aquí para resolver cualquier duda que tengas o ayudarte a agendar tu cita con el doctor.'
      );
    }
  };

  // Variantes de animación
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const titleVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: -50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

  const descriptionVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

  const buttonVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

  const statsVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        delay: 1.2
      }
    }
  };

  const statItemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

  return (
    <section className="relative h-screen text-center text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={HeroBackgroundImage}
          alt="Dentista sonriendo con un paciente niño en la silla dental"
          fill
          style={{ objectFit: 'cover' }}
          priority // Cargar la imagen de manera prioritaria por ser "Above the fold"
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Main Content - Centered */}
      <motion.div 
        className="relative z-10 flex h-full flex-col items-center justify-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-4xl font-bold md:text-6xl"
          variants={titleVariants}
        >
          Tratamientos dentales para toda la familia.
        </motion.h1>
        
        <motion.p 
          className="mt-4 text-lg max-w-2xl"
          variants={descriptionVariants}
        >
          Junto con la atención dental especializada que nos convierte en la mejor clínica para todas sus necesidades dentales.
        </motion.p>
        
        <motion.div 
          className="mt-8 flex flex-col sm:flex-row gap-4"
          variants={buttonVariants}
        >
          <motion.button
            className="px-8 py-3 font-semibold text-black bg-white rounded-full hover:bg-gray-200 transition-colors"
            onClick={handleScrollToCita}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Agendar tu cita
          </motion.button>
          <motion.button
            className="px-8 py-3 font-semibold text-white border-2 border-white rounded-full backdrop-blur-sm bg-white/10 hover:bg-white hover:text-black transition-colors"
            onClick={handleContactar}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contactar
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Stats Section - Bottom */}
      <motion.div 
        className="absolute bottom-10 left-0 right-0 z-10 px-4"
        variants={statsVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto">
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-y-4 gap-x-0 md:gap-x-16 text-white"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="text-center w-1/2 md:w-auto"
              variants={statItemVariants}
            >
              <p className="text-3xl font-bold">
                <Counter end={90} delay={1.5} />
              </p>
              <p className="text-sm uppercase tracking-wider">Pacientes</p>
            </motion.div>
            <motion.div 
              className="text-center w-1/2 md:w-auto"
              variants={statItemVariants}
            >
              <p className="text-3xl font-bold">
                <Counter end={500} delay={1.5} />
              </p>
              <p className="text-sm uppercase tracking-wider">Casos</p>
            </motion.div>
            <motion.div 
              className="text-center w-1/2 md:w-auto"
              variants={statItemVariants}
            >
              <p className="text-3xl font-bold">
                <Counter end={10} delay={1.5} />
              </p>
              <p className="text-sm uppercase tracking-wider">AÑOS DE EXP</p>
            </motion.div>
            <motion.div 
              className="text-center w-1/2 md:w-auto"
              variants={statItemVariants}
            >
              <p className="text-3xl font-bold">
                <Counter end={200} delay={1.5} />
              </p>
              <p className="text-sm uppercase tracking-wider">Reseñas</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 