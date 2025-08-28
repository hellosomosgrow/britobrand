import { useState, useEffect, useMemo, useCallback } from 'react';
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
  const [isInitialized, setIsInitialized] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const location = useLocation();
  const isContactPage = location.pathname.includes('contacto');

  // Función para cambiar imagen manualmente
  const handleDotClick = (index: number) => {
    if (index === current || isTransitioning) return;
    setCurrent(index);
  };

  // Función para cambiar imagen con transición suave (memoizada)
  const changeImage = useCallback(
    (nextIndex: number) => {
      if (isTransitioning) return;

      setIsTransitioning(true);
      // La imagen siguiente ya está visible, solo cambiamos el índice
      setTimeout(() => {
        setCurrent(nextIndex);
        setIsTransitioning(false);
      }, 500); // Tiempo para completar el crossfade
    },
    [isTransitioning]
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);

    const interval = setInterval(() => {
      const nextIndex = (current + 1) % images.length;
      changeImage(nextIndex);
    }, 5000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
    };
  }, [current, images.length, changeImage]);

  // Pre-cargar todas las imágenes del banner
  useEffect(() => {
    let loadedCount = 0;
    const totalImages = images.length;

    images.forEach((src) => {
      const img = new Image();

      img.onload = () => {
        loadedCount++;

        if (loadedCount === totalImages) {
          // Pequeño delay para asegurar que todo esté listo
          setTimeout(() => setIsInitialized(true), 100);
        }
      };

      img.onerror = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          setTimeout(() => setIsInitialized(true), 100);
        }
      };

      img.src = src;
    });
  }, [images]);

  // Mostrar skeleton hasta que todo esté completamente listo
  if (!isInitialized) {
    return (
      <div className="relative w-full h-85vh min-h-[400px] bg-gray-200 animate-pulse rounded-[10px] overflow-hidden">
        {/* Skeleton del banner con dimensiones exactas */}
        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300" />

        {/* Skeleton de los dots */}
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
              className="w-[12px] h-[12px] rounded-full bg-gray-400"
            />
          ))}
        </div>

        {/* Skeleton del chat */}
        {!isContactPage && (
          <div className="absolute bottom-8 right-8 w-16 h-16 bg-gray-400 rounded-full" />
        )}
      </div>
    );
  }

  return (
    <div className="relative w-full h-85vh min-h-[400px]">
      {/* Imagen actual */}
      <img
        src={images[current]}
        alt="Banner"
        className={`w-full h-full object-cover rounded-[10px] overflow-hidden transition-opacity duration-500 ease-in-out ${
          isMobile ? 'object-center' : 'object-center'
        } ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
        style={{
          objectPosition: isMobile ? 'center 25%' : 'center center',
        }}
        loading="eager"
        decoding="async"
      />

      {/* Imagen siguiente (para transición suave) */}
      {isTransitioning && (
        <img
          src={images[(current + 1) % images.length]}
          alt="Banner Next"
          className={`absolute top-0 left-0 w-full h-full object-cover rounded-[10px] overflow-hidden transition-opacity duration-500 ease-in-out ${
            isMobile ? 'object-center' : 'object-center'
          } opacity-100`}
          style={{
            objectPosition: isMobile ? 'center 25%' : 'center center',
          }}
          loading="eager"
          decoding="async"
        />
      )}

      <div
        className={`
    absolute z-10 transition-all duration-300 ease-in-out
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
            } ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}
          />
        ))}
      </div>
      {!isContactPage && (
        <img
          src={chat}
          onClick={() => window.open('https://wa.me/+5491139070821', '_blank')}
          alt="Chat Icon"
          className="absolute bottom-8 right-8 w-16 h-16 p-2 bg-white rounded-full cursor-pointer z-10 hover:scale-105 transition-all duration-300 ease-in-out"
          loading="eager"
        />
      )}
    </div>
  );
};

export default Banner;
