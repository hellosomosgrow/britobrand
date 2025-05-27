import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const links = [
    { label: 'Home', path: '/' },
    { label: 'Proyectos', path: '/proyectos' },
    { label: 'Contacto', path: '/contacto' },
  ];

  return (
    <header className="w-full bg-black text-white font-light rounded-[10px] flex justify-center md:justify-end">
      <nav
        className="bg-black rounded-[10px] flex md:gap-x-1 gap-x-0 md:w-auto w-full 
                   justify-between md:justify-end items-center"
      >
        {links.map(({ label, path }, idx) => {
          const currentIsActive = isActive(path);
          const nextIsActive = links[idx + 1] && isActive(links[idx + 1].path);

          return (
            <React.Fragment key={label}>
              <Link
                to={path}
                className={`py-2 md:px-6 px-3 text-center transition-colors duration-300 rounded-[10px]
                ${currentIsActive ? 'bg-[#1d1d1d] text-white' : 'hover:bg-[#333]'}
                w-full md:w-32`}
              >
                {label}
              </Link>

              {/* Separador solo si ni este ni el siguiente están activos */}
              {idx < links.length - 1 && !currentIsActive && !nextIsActive && (
                <span className="hidden md:inline self-center text-[#767575] font-light text-sm mx-1">
                  |
                </span>
              )}
            </React.Fragment>
          );
        })}
      </nav>
    </header>
  );
}
