import React, { useEffect, useRef } from 'react';
import Banner from '@/components/Banner';
import InfoSocials from './InfoSocials';
import InfoSection from './InfoSection';
import InfoCard from './InfoCard';
import { igimage } from '@/assets/images';
import ContactForm from '@/components/ContactForm';
import imagecontact from '@/assets/images/info/imagecontact.webp';
import TestimonialCard from './TestimonialCard';

import {
  dudutestimonial,
  casanunatestimonial,
  botanicaltestimonial,
} from '@/assets/images';
const ContactDesktop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    const carousel = carouselRef.current;
    if (carousel) {
      const cardWidth = carousel.offsetWidth / 3; // 3 cards visibles
      const gap = 16; // gap-4 = 16px
      const scrollAmount = cardWidth + gap;
      const maxScrollLeft = carousel.scrollWidth - carousel.offsetWidth;

      // Si ya está al final (o casi), vuelve al inicio
      if (Math.abs(carousel.scrollLeft - maxScrollLeft) < 5) {
        carousel.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const testimonials = [
    {
      description:
        '“Félix ha estado ahí en todas las etapas de Botánico y otros proyectos, siempre sumando con su creatividad y profesionalismo. Me encanta que no hace diseño solo por moda, sino con un concepto real detrás de cada cosa.”',
      name: 'Omar Morales',
      company: 'Botánico',
      location: 'Montevideo, Uruguay',
      image: botanicaltestimonial,
    },
    {
      description:
        '“Felix se ha convertido en los últimos 10 años en mi diseñador gráfico de cabecera, tanto de mis proyectos personales como el de mis clientes de marketing y comunicaciones.”',
      name: 'Yanniela Z. Angel Bitter',
      company: 'Casa Nuno',
      location: 'Santiago de Chile, Chile',
      image: casanunatestimonial,
    },
    {
      description:
        '“He colaborado con él en varios proyectos, desde la creación de marcas desde cero hasta el desarrollo completo de su identidad visual, y en cada uno logró captar la esencia del concepto de una forma única, estética y totalmente alineada con las tendencias actuales.”',
      name: 'Shalma Suarez Yazigi',
      company: 'Consultora de marcas',
      location: 'Montevideo, Uruguay',
      image: dudutestimonial,
    },
    {
      description:
        '“Trabajar con Félix es un viaje de descubrimiento y creatividad. Su capacidad para entender y materializar ideas es excepcional. Su nivel de atención al detalle es admirable. Lo recomiendo sin dudar.”',
      name: 'Andreyna Navas',
      company: 'Frontend Developer',
      location: 'Guayaquil, Ecuador',
      image: dudutestimonial,
    },
  ];

  return (
    <div className="w-full flex flex-col space-y-4 md:flex-row md:space-x-4">
      {/* Lado izquierdo */}
      <div className="flex flex-col space-y-4 w-full md:w-1/3 min-w-[425px]">
        <InfoSection />
        <InfoCard
          title="Experiencia"
          subtitle="Resume"
          content="Acá podés ver un poco de mi recorrido: estudios, experiencia y con qué tipo de proyectos he trabajado."
        />
        <InfoCard
          title="Contacto"
          subtitle="¿Tienes un proyecto en mente?"
          content="britobrand@gmail.com
+54 9113907-0821"
        />
        <InfoSocials />
        <div className="md:block hidden">
          <InfoCard
            title="Instagram"
            subtitle="Free Wallpapers"
            content="Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor incididunt ut labore et dolore magna."
            image={igimage}
          />
        </div>
      </div>

      {/* Lado derecho */}
      <div className="flex flex-col space-y-4 w-full">
        {/* Imagen y Formulario */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
          {/* Imagen */}
          <div className="w-full h-full">
            <img
              src={imagecontact}
              alt="Contacto"
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>

          {/* Formulario */}
          <div className="bg-[#E9E9E9] text-[14px] text-[#1E1E1E] rounded-lg py-6 px-4 w-full flex flex-col justify-start">
            <h3 className="font-normal mb-6 text-sm">Contacto</h3>
            <ContactForm />
          </div>
        </div>

        {/* Testimonios */}
        <div className="space-y-4 bg-[#E9E9E9] rounded-lg py-4 px-4 max-w-6xl">
          {/* Título y “Desliza para ver más” */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-light text-sm">Testimoniales</h3>
            <span
              onClick={scrollNext}
              className="text-xs cursor-pointer text-gray-500 hidden md:inline"
            >
              Desliza para Ver Más
            </span>
          </div>
          <div className="relative">
            {/* Carrusel */}
            <div className="relative overflow-hidden">
              <div
                ref={carouselRef}
                className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-4 scroll-smooth"
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="snap-start shrink-0 w-[90%] sm:w-[70%] md:w-[calc(100%/3-1rem)]"
                  >
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Banner */}
        <Banner />
      </div>
    </div>
  );
};

export default ContactDesktop;
