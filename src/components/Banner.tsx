import { useState, useEffect } from "react";
import banner1 from "../assets/images/banner/banner1.webp";
import banner2 from "../assets/images/banner/banner2.webp";
import banner3 from "../assets/images/banner/banner3.webp";
import bannerDesktop1 from "../assets/images/banner/bannerDesktop1.png";
import bannerDesktop2 from "../assets/images/banner/bannerDesktop2.png";
import bannerDesktop3 from "../assets/images/banner/bannerDesktop3.png";

const Banner = () => {
  const mobileImages = [banner1, banner2, banner3];
  const desktopImages = [bannerDesktop1, bannerDesktop2, bannerDesktop3];

  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % mobileImages.length);
    }, 5000);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(interval);
    };
  }, [mobileImages.length]);

  return (
    <div className="relative w-full h-screen">
      <img
        src={isMobile ? mobileImages[current] : desktopImages[current]}
        alt="Banner"
        className="w-full h-full object-cover rounded-[10px]"
      />
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 flex flex-col gap-2 bg-white/20 p-2 rounded-lg">
        {mobileImages.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index ? "bg-black scale-110" : "bg-[#767575]"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;