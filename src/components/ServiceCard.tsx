import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
      <div className="bg-brand-primary text-white rounded-full p-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mt-4 text-brand-dark-gray">{title}</h3>
      <p className="mt-2 text-gray-600 flex-grow">{description}</p>
      <button className="mt-4 text-brand-primary font-semibold hover:underline">
        Más info
      </button>
    </div>
  );
};

export default ServiceCard; 