import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="w-full bg-[#1E1E1E] text-white py-2 rounded-[10px] font-light">
      <nav className="text-[14px] font-funnelSans flex w-full items-center justify-around px-4">
        <Link to="/" className={`px-2 py-1 rounded ${isActive('/') ? 'bg-custom-dark' : ''}`}>
          Home
        </Link>
        <span className="font-extralight text-xs text-[#767575]">|</span>
        <Link to="/servicios" className={`px-2 py-1 rounded ${isActive('/servicios') ? 'bg-custom-dark' : ''}`}>
          Servicios
        </Link>
        <span className="font-extralight text-xs text-[#767575]">|</span>
        <Link to="/proyectos" className={`px-2 py-1 rounded ${isActive('/proyectos') ? 'bg-custom-dark' : ''}`}>
          Proyectos
        </Link>
        <span className="font-extralight text-xs text-[#767575]">|</span>
        <Link to="/contacto" className={`px-2 py-1 rounded ${isActive('/contacto') ? 'bg-custom-dark' : ''}`}>
          Contacto
        </Link>
      </nav>
    </header>
  );
}