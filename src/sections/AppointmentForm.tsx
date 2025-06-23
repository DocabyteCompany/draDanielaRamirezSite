"use client";

import React from 'react';

const AppointmentForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically handle form submission,
    // e.g., send data to an API endpoint.
    // For this demo, we'll just log it.
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log('Form data:', data);
    alert('¡Gracias! Tu solicitud de cita ha sido enviada. Nos pondremos en contacto contigo pronto.');
    e.currentTarget.reset();
  };

  return (
    <section id="agendar-cita" className="relative py-32 bg-white">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-2xl p-8 md:p-12 border-t-8 border-brand-primary">
          <h2 className="text-4xl font-bold tracking-tight text-center text-brand-dark-gray mb-2">
            Agenda tu Cita
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Completa el formulario y nuestro equipo se pondrá en contacto contigo a la brevedad.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre completo</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary"
                placeholder="Ej. Ana Pérez"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary"
                placeholder="tu@correo.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Teléfono</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary"
                placeholder="Ej. 55 1234 5678"
              />
            </div>
            <div>
              <label htmlFor="reason" className="block text-sm font-medium text-gray-700">Motivo de la consulta</label>
              <textarea
                name="reason"
                id="reason"
                rows={4}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary"
                placeholder="Ej. Quisiera agendar una cita para una limpieza dental."
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-lg text-lg font-medium text-white bg-brand-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transition-all duration-300 hover:shadow-2xl hover:shadow-brand-primary/40"
              >
                Reservar mi Cita
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm; 