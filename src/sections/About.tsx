import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section id="sobre-mi" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="md:flex md:items-center md:space-x-12">
          {/* Image Column */}
          <div className="md:w-1/3">
            <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
              {/* Placeholder Image */}
              <Image
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop"
                alt="Foto profesional de la Dra. Daniela Ramírez"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="md:w-2/3 mt-8 md:mt-0">
            <h2 className="text-3xl font-bold text-brand-dark-gray">
              Conoce a la Dra. Daniela Ramírez
            </h2>
            <p className="mt-4 text-gray-600">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 