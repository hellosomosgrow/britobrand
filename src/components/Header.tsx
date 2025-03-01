import React from 'react';

export default function Header() {
  return (
    <header className="w-full bg-[#1E1E1E] text-white px-5 py-2 rounded-[10px]">
      <div className="container mx-auto flex justify-between items-center">
        {/* Versión Desktop: Logo + Menú */}
        <h1 className="hidden md:block text-2xl font-cuteFont">BRITO BRAND</h1>

        {/* Menú (Mobile & Desktop) */}
        <nav className="flex w-full md:w-auto justify-between md:justify-end items-center text-lg font-funnelSans">
          <a href="/servicios" className="px-4 md:px-2">
            Servicios 
          </a>
          <span>|</span>
          <a href="/proyectos" className="px-4 md:px-2">
            Proyectos 
          </a>
          <span>|</span>
          <a href="/contacto" className="px-4 md:px-2">
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}