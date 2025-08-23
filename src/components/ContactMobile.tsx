import React, { useEffect } from 'react';
//import { useForm, SubmitHandler } from 'react-hook-form';
//import { BsDot } from 'react-icons/bs';
//import { MdArrowDropDown } from 'react-icons/md';
import banner3 from '../assets/optimized-images/banner/banner3.webp';
import chat from '../assets/optimized-images/social/chat.webp';

import InfoSocials from '@/components/InfoSocials';
import InfoCard from '@/components/InfoCard';
import ContactForm from '@/components/ContactForm';
import TestimonialCard from '@/components/TestimonialCard';
// import { igimage } from '@/assets/optimized-images'; - Comentado temporalmente
import {
  dudutestimonial,
  casanunatestimonial,
  botanicaltestimonial,
  covergrow,
} from '@/assets/optimized-images';

const ContactMobile = () => {
  useEffect(() => {
    // Desplaza la página al inicio al cargar la vista
    window.scrollTo(0, 0);
  }, []);

  const testimonials = [
    {
      description:
        '"Félix ha estado ahí en todas las etapas de Botánico y otros proyectos, siempre sumando con su creatividad y profesionalismo. Me encanta que no hace diseño solo por moda, sino con un concepto real detrás de cada cosa."',
      name: 'Omar Morales',
      company: 'Botánico',
      location: 'Montevideo, Uruguay',
      image: botanicaltestimonial,
    },
    {
      description:
        '"Felix se ha convertido en los últimos 10 años en mi diseñador gráfico de cabecera, tanto de mis proyectos personales como el de mis clientes de marketing y comunicaciones."',
      name: 'Yanniela Z. Angel Bitter',
      company: 'Casa Nuno',
      location: 'Santiago de Chile, Chile',
      image: casanunatestimonial,
    },
    {
      description:
        '"He colaborado con él en varios proyectos, desde la creación de marcas desde cero hasta el desarrollo completo de su identidad visual, y en cada uno logró captar la esencia del concepto de una forma única, estética y totalmente alineada con las tendencias actuales."',
      name: 'Shalma Suarez Yazigi',
      company: 'Consultora de marcas',
      location: 'Montevideo, Uruguay',
      image: dudutestimonial,
    },
    {
      description:
        '"Trabajar con Félix es un viaje de descubrimiento y creatividad. Su capacidad para entender y materializar ideas es excepcional. Su nivel de atención al detalle es admirable. Lo recomiendo sin dudar."',
      name: 'Andreyna Navas',
      company: 'Grow',
      location: 'Guayaquil, Ecuador',
      image: covergrow,
    },
  ];

  return (
    <div className="container mx-auto space-y-3">
      <div className="relative w-full h-85vh">
        <img
          src={banner3}
          alt="Banner"
          className="w-full h-full object-cover rounded-[10px] overflow-hidden"
        />
        {/* Botón flotante de WhatsApp */}
        <img
          src={chat}
          onClick={() => window.open('https://wa.me/5491139070821', '_blank')}
          alt="Chat Icon"
          className="absolute bottom-8 right-8 w-16 h-16 p-2 bg-white rounded-full cursor-pointer z-10 hover:scale-105 transition-transform shadow-lg"
        />
      </div>

      <div className="bg-[#E9E9E9] text-[14px] text-[#1E1E1E] rounded-lg py-3 px-3">
        <h3 className="font-light mb-5">Contacto</h3>
        {/* Formulario */}
        <ContactForm />
      </div>

      {/* Testimonios */}
      <div className="space-y-4 bg-[#E9E9E9] rounded-lg py-4 px-4">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-light text-sm">Testimoniales</h3>
        </div>
        <div className="flex flex-col space-y-4 items-center">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex justify-center">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>

      {/* Servicios */}
      <InfoCard
        title="Servicios"
        subtitle="Lo que hago"
        content={`Trabajo en diseño gráfico enfocado en identidad visual. Creo marcas desde cero o ayudo a mejorar las que ya existen, cuidando cada detalle visual para que todo funcione con coherencia y claridad.

– Diseño de logos.
– Branding e identidad visual.
– Desarrollo de sistemas gráficos.
– Aplicaciones impresas y digitales.
– UI para sitios web.
– Diseño de empaques.
– Merchandising y piezas promocionales.`}
      />

      {/* Experiencia */}
      <InfoCard
        title="Experiencia"
        subtitle="Resume"
        content="Acá podés ver un poco de mi recorrido: estudios, experiencia y con qué tipo de proyectos he trabajado."
      />

      {/* Contacto */}
      <InfoCard
        title="Contacto"
        subtitle="¿Tienes un proyecto en mente?"
        content="britobrand@gmail.com
+54 9113907-0821"
      />

      {/* Social */}
      <InfoSocials />

      {/* Instagram - Comentado temporalmente
      <InfoCard
        title="Instagram"
        subtitle="Free Wallpapers"
        content="Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor incididunt ut labore et dolore magna.."
        image={igimage}
      />
      */}
    </div>
  );
};

export default ContactMobile;
