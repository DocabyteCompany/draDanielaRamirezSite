'use client';

import React, { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { TbX } from 'react-icons/tb';

interface AnimatedServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
  detailedInfo?: {
    duration?: string;
    price?: string;
    benefits?: string[];
    procedure?: string;
  };
}

const AnimatedServiceCard: React.FC<AnimatedServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  delay = 0.3,
  detailedInfo
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        delay: delay,
      },
    },
  };

  const iconVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 360,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        delay: delay + 0.2,
      },
    },
  };

  const modalVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
      },
    },
  };

  const backdropVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <>
      <motion.div 
        className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center cursor-pointer"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{ 
          scale: 1.05,
          transition: { duration: 0.3 }
        }}
        onClick={handleCardClick}
      >
        <motion.div 
          className="bg-brand-primary text-white rounded-full p-4"
          variants={iconVariants}
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-bold mt-4 text-brand-dark-gray">{title}</h3>
        <p className="mt-2 text-gray-600 flex-grow">{description}</p>
        <motion.button 
          className="mt-4 text-brand-primary font-semibold hover:underline"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Más info
        </motion.button>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={handleCloseModal}
          >
            <motion.div
              className="bg-black bg-opacity-50 absolute inset-0"
              onClick={handleCloseModal}
            />
            <motion.div
              className="bg-white rounded-lg shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto relative"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header del modal */}
              <div className="bg-brand-primary text-white p-6 rounded-t-lg flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="bg-white bg-opacity-20 rounded-full p-2">
                    {icon}
                  </div>
                  <h2 className="text-xl font-bold">{title}</h2>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="text-white hover:text-gray-200 transition-colors"
                  aria-label="Cerrar modal"
                >
                  <TbX size={24} />
                </button>
              </div>

              {/* Contenido del modal */}
              <div className="p-6">
                <p className="text-gray-700 mb-6">{description}</p>
                
                {detailedInfo && (
                  <div className="space-y-4">
                    {detailedInfo.duration && (
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-brand-dark-gray">Duración:</span>
                        <span className="text-gray-600">{detailedInfo.duration}</span>
                      </div>
                    )}
                    
                    {detailedInfo.price && (
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-brand-dark-gray">Precio:</span>
                        <span className="text-gray-600">{detailedInfo.price}</span>
                      </div>
                    )}
                    
                    {detailedInfo.procedure && (
                      <div>
                        <h4 className="font-semibold text-brand-dark-gray mb-2">Procedimiento:</h4>
                        <p className="text-gray-600 text-sm">{detailedInfo.procedure}</p>
                      </div>
                    )}
                    
                    {detailedInfo.benefits && detailedInfo.benefits.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-brand-dark-gray mb-2">Beneficios:</h4>
                        <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                          {detailedInfo.benefits.map((benefit, index) => (
                            <li key={index}>{benefit}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <button
                    onClick={handleCloseModal}
                    className="w-full bg-brand-primary text-white py-3 px-4 rounded-lg hover:bg-opacity-90 transition-colors font-semibold"
                  >
                    Entendido
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AnimatedServiceCard; 