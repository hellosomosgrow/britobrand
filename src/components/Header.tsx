import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { britobrandlogo } from '@/assets/images';

export default function Header() {
  const location = useLocation();
  const isActive = (path: string) => {
    if (path === '/proyectos') {
      return (
        location.pathname === path ||
        location.pathname.startsWith('/proyectos/')
      );
    }
    return location.pathname === path;
  };
  const links = [
    { label: 'Home', path: '/' },
    { label: 'Proyectos', path: '/proyectos' },
    { label: 'Contacto', path: '/contacto' },
  ];

  return (
    <header className="bg-black text-white font-light rounded-[10px] relative">
      <div className="hidden md:block absolute left-6 top-1/2 transform -translate-y-1/2">
        <Link to="/">
          <img src={britobrandlogo} alt="Logo" className="h-4" />
        </Link>
      </div>
      <div className="flex justify-center md:justify-end">
        <nav className="flex w-full items-center justify-around md:justify-end gap-x-0 md:gap-x-1">
          {links.map(({ label, path }) => {
            const currentIsActive = isActive(path);

            return (
              <React.Fragment key={label}>
                <Link
                  to={path}
                  className={`
                    py-2 px-3 md:px-6 text-center rounded-[10px] transition-colors duration-300
                    md:w-32 flex-1 md:flex-none
                    ${
                      currentIsActive
                        ? 'bg-[#222222] text-white'
                        : 'bg-black text-white hover:bg-[#333333]'
                    }
                  `}
                >
                  {label}
                </Link>
              </React.Fragment>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
