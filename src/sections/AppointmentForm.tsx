"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useChatbot } from '@/components/Chatbot';
import FormContainer from '@/components/FormContainer';
import FormTitle from '@/components/FormTitle';
import FormDescription from '@/components/FormDescription';
import AnimatedFormField from '@/components/AnimatedFormField';
import AnimatedSubmitButton from '@/components/AnimatedSubmitButton';

const AppointmentForm = () => {
  const chatbotRef = useChatbot();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    if (chatbotRef && chatbotRef.current) {
      chatbotRef.current.openWithAppointmentConfirmation({
        firstName: data.firstName as string,
        lastName: data.lastName as string,
        email: data.email as string,
        phone: data.phone as string,
        reason: data.reason as string,
      });
    }
    e.currentTarget.reset();
  };

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
      id="agendar-cita" 
      className="relative py-32 bg-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <FormContainer delay={0.0}>
          <FormTitle delay={0.3} />
          <FormDescription delay={0.6} />
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <AnimatedFormField delay={0.9}>
                <div className="flex-1">
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Nombre</label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    required
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary transition-all duration-200 focus:scale-[1.02]"
                    placeholder="Ej. Ana"
                  />
                </div>
              </AnimatedFormField>
              
              <AnimatedFormField delay={1.0}>
                <div className="flex-1">
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Apellido</label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    required
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary transition-all duration-200 focus:scale-[1.02]"
                    placeholder="Ej. Pérez"
                  />
                </div>
              </AnimatedFormField>
            </div>
            
            <AnimatedFormField delay={1.1}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary transition-all duration-200 focus:scale-[1.02]"
                  placeholder="tu@correo.com"
                />
              </div>
            </AnimatedFormField>
            
            <AnimatedFormField delay={1.2}>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Teléfono</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary transition-all duration-200 focus:scale-[1.02]"
                  placeholder="Ej. 55 1234 5678"
                />
              </div>
            </AnimatedFormField>
            
            <AnimatedFormField delay={1.3}>
              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-gray-700">Motivo de la consulta</label>
                <textarea
                  name="reason"
                  id="reason"
                  rows={4}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary transition-all duration-200 focus:scale-[1.02]"
                  placeholder="Ej. Quisiera agendar una cita para una limpieza dental."
                ></textarea>
              </div>
            </AnimatedFormField>
            
            <AnimatedFormField delay={1.4}>
              <div>
                <AnimatedSubmitButton delay={0.0} onSubmit={() => console.log('Form submitted')} />
              </div>
            </AnimatedFormField>
          </form>
        </FormContainer>
      </div>
    </motion.section>
  );
};

export default AppointmentForm; 