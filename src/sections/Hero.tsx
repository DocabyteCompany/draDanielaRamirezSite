import React from 'react';
import Image from 'next/image';
import HeroBackgroundImage from '@/imgs/hero-background.webp';

const Hero = () => {
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
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-bold md:text-6xl">
          Tratamientos dentales para toda la familia.
        </h1>
        <p className="mt-4 text-lg max-w-2xl">
          Junto con la atención dental especializada que nos convierte en la mejor clínica para todas sus necesidades dentales.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-3 font-semibold text-black bg-white rounded-full hover:bg-gray-200 transition-colors">
            Agendar tu cita
          </button>
          <button className="px-8 py-3 font-semibold text-white border-2 border-white rounded-full backdrop-blur-sm bg-white/10 hover:bg-white hover:text-black transition-colors">
            Contactar
          </button>
        </div>
      </div>

      {/* Stats Section - Bottom */}
      <div className="absolute bottom-10 left-0 right-0 z-10 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 md:gap-x-16 text-white">
            <div className="text-center">
              <p className="text-3xl font-bold">90K+</p>
              <p className="text-sm uppercase tracking-wider">Pacientes</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">4K+</p>
              <p className="text-sm uppercase tracking-wider">Casos</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">30</p>
              <p className="text-sm uppercase tracking-wider">Dentistas</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">200K+</p>
              <p className="text-sm uppercase tracking-wider">Reseñas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 