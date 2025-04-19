import React from 'react';
import { useEffect } from 'react';
import Banner from '@/components/Banner';
import InfoSocials from './InfoSocials';
import InfoSection from './InfoSection';
import InfoCard from './InfoCard';
import { location } from '@/assets/images';
import ContactForm from '@/components/ContactForm';
import imagecontact from '@/assets/images/info/imagecontact.png';
import TestimonialCard from './TestimonialCard';

const ContactDesktop = () => {
  useEffect(() => {
    // Desplaza la página al inicio al cargar la vista
    window.scrollTo(0, 0);
  }, []);
  const testimonials = [
    '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
    '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
    '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
  ];
  return (
    <div className="w-full flex flex-col space-y-4 md:flex-row md:space-x-4">
      {/* Lado izquierdo */}
      <div className="flex flex-col space-y-4 w-1/3 bg-[#F5F5F5]">
        <InfoSection />
        <InfoCard
          title="Experiencia"
          subtitle="Resume"
          content="Lorem ipsum dolor sit amet..."
        />
        <InfoCard
          title="Contacto"
          subtitle="¿Tienes un proyecto en mente?"
          content="britobrand@gmail.com"
        />
        <InfoSocials />
        <div className="bg-[#E9E9E9] rounded-lg shadow p-4">
          <h3 className="font-semibold">Ubicación</h3>
          <p className="font-semibold">Buenos Aires, Argentina</p>
          <p>Ciudad Autónoma de Buenos Aires, Argentina (GMT-3)</p>
          <img
            src={location}
            alt="Ubicación"
            className="w-full h-auto mt-2 rounded-lg"
          />
        </div>
      </div>

      {/* Lado derecho */}
      <div className="space-y-4">
        {/* Imagen y Formulario en el mismo row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          {/* Imagen */}
          <div className="flex justify-center">
            <img
              src={imagecontact}
              alt="Contacto"
              className="w-full max-w-[600px] object-cover rounded-[10px] shadow"
            />
          </div>

          {/* Formulario */}
          <div className="bg-[#E9E9E9] text-[14px] text-[#1E1E1E] rounded-lg shadow py-3 px-4">
            <h3 className="font-semibold px-4 mb-2">Contacto</h3>
            <ContactForm />
          </div>
        </div>

        {/* Testimonios */}
        <div className="space-y-4 bg-[#E9E9E9] rounded-lg py-2 px-3 max-w-6xl">
          <h3 className="font-semibold">Testimoniales</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* Banner */}
        <Banner />
      </div>
    </div>
  );
};

export default ContactDesktop;
