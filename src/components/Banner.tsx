import { useState, useEffect } from 'react';
import banner1 from '../assets/images/banner/banner1.webp';
import banner2 from '../assets/images/banner/banner2.webp';
import banner3 from '../assets/images/banner/banner3.webp';
import bannerDesktop1 from '../assets/images/banner/bannerDesktop1.png';
import bannerDesktop2 from '../assets/images/banner/bannerDesktop2.png';
import bannerDesktop3 from '../assets/images/banner/bannerDesktop3.png';
import chat from '../assets/images/social/chat.png';
import { useLocation } from 'react-router-dom';

const Banner = () => {
  const mobileImages = [banner1, banner2, banner3];
  const desktopImages = [bannerDesktop1, bannerDesktop2, bannerDesktop3];

  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const location = useLocation();
  const isContactPage = location.pathname.includes('contacto');
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % mobileImages.length);
    }, 5000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
    };
  }, [mobileImages.length]);

  return (
    <div className="relative w-full h-85vh">
      <img
        src={isMobile ? mobileImages[current] : desktopImages[current]}
        alt="Banner"
        className="w-full h-full object-cover rounded-[10px] overflow-hidden"
      />
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-row items-center justify-center gap-[10px] z-10">
        {mobileImages.map((_, index) => (
          <div
            key={index}
            className={`w-[12px] h-[12px] rounded-full border-none transition-all duration-300 ${
              current === index ? 'bg-[#767575]' : 'bg-white'
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
        />
      )}
    </div>
  );
};

export default Banner;
