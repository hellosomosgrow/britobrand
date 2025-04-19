import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useIsMobile from '@/hooks/useIsMobile';

export default function Header() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const isMobile = useIsMobile(768);

  return (
    <header className="w-full bg-black text-white py-2 rounded-[10px] font-light">
      <nav
        className="text-[14px] font-funnelSans flex w-full items-center px-4 
                   justify-around md:justify-between"
      >
        {/* Logo o Home */}
        <div>
          {isMobile ? (
            <div className="flex items-center gap-x-2">
              <Link
                to="/"
                className={`px-2 py-1 rounded ${isActive('/') ? 'bg-custom-dark' : ''}`}
              >
                Home
              </Link>
              <span className="font-extralight text-xs text-[#767575]">|</span>
            </div>
          ) : (
            <Link
              to="/"
              className={`px-2 py-1 rounded text-[30px] text-cute-font ${
                isActive('/') ? 'bg-custom-dark' : ''
              }`}
            >
              BRITO BRAND
            </Link>
          )}
        </div>

        {/* Links de navegación */}
        <div className="flex items-center gap-x-3 md:pr-8">
          <Link
            to="/servicios"
            className={`px-2 py-1 rounded md:text-lg ${isActive('/servicios') ? 'bg-custom-dark' : ''}`}
          >
            Servicios
          </Link>
          <span className="font-extralight text-xs text-[#767575]">|</span>
          <Link
            to="/proyectos"
            className={`px-2 py-1 rounded md:text-lg ${isActive('/proyectos') ? 'bg-custom-dark' : ''}`}
          >
            Proyectos
          </Link>
          <span className="font-extralight text-xs text-[#767575]">|</span>
          <Link
            to="/contacto"
            className={`px-2 py-1 rounded md:text-lg ${isActive('/contacto') ? 'bg-custom-dark' : ''}`}
          >
            Contacto
          </Link>
        </div>
      </nav>
    </header>
  );
}
