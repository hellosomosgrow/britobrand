import { useState, useEffect, useMemo } from 'react';
import bannerDesktop1 from '../assets/optimized-images/banner/bannerDesktop1.webp';
import bannerDesktop2 from '../assets/optimized-images/banner/bannerDesktop2.webp';
import bannerDesktop3 from '../assets/optimized-images/banner/bannerDesktop3.webp';
import chat from '../assets/optimized-images/social/chat.webp';
import { useLocation } from 'react-router-dom';

const Banner = () => {
  const images = useMemo(
    () => [bannerDesktop1, bannerDesktop2, bannerDesktop3],
    []
  );

  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const location = useLocation();
  const isContactPage = location.pathname.includes('contacto');

  // Función para cambiar imagen manualmente
  const handleDotClick = (index: number) => {
    setCurrent(index);
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
    };
  }, [images.length]);

  // Pre-cargar todas las imágenes del banner
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  return (
    <div className="relative w-full h-85vh">
      <img
        src={images[current]}
        alt="Banner"
        className={`w-full h-full object-cover rounded-[10px] overflow-hidden ${
          isMobile ? 'object-center' : 'object-center'
        }`}
        style={{
          objectPosition: isMobile ? 'center 25%' : 'center center',
        }}
        loading="eager"
        decoding="async"
      />
      <div
        className={`
    absolute z-10
    ${
      isMobile
        ? 'left-6 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-[10px]'
        : 'top-1/2 left-8 -translate-y-1/2 flex flex-col items-start gap-[10px]'
    }
  `}
      >
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-[12px] h-[12px] rounded-full border-none transition-all duration-300 cursor-pointer hover:scale-110 ${
              current === index ? 'bg-white' : 'bg-[#767575]'
            }`}
          />
        ))}
      </div>
      {!isContactPage && (
        <img
          src={chat}
          onClick={() => window.open('https://wa.me/+5491139070821', '_blank')}
          alt="Chat Icon"
          className="absolute bottom-8 right-8 w-16 h-16 p-2 bg-white rounded-full cursor-pointer z-10 hover:scale-105 transition-transform"
          loading="eager"
        />
      )}
    </div>
  );
};

export default Banner;
