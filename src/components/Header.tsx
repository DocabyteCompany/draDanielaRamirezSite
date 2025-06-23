import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          <Link href="/">Dra. Daniela Ramírez</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/#sobre-mi" className="text-white hover:text-gray-300">Sobre mí</Link>
          <Link href="/#servicios" className="text-white hover:text-gray-300">Servicios</Link>
          <Link href="/#contacto" className="text-white hover:text-gray-300">Contacto</Link>
          <Link href="/blog" className="text-white hover:text-gray-300">Blog</Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="px-6 py-2 font-semibold text-black bg-white rounded-full hover:bg-gray-200 transition-colors">
            Agendar tu cita
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white">
            {/* You can use an icon here, e.g., from a library like heroicons */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 