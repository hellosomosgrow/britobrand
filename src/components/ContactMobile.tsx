import React from 'react';
import { useEffect } from 'react';
//import { useForm, SubmitHandler } from 'react-hook-form';
//import { BsDot } from 'react-icons/bs';
//import { MdArrowDropDown } from 'react-icons/md';
import banner3 from '../assets/images/banner/banner3.webp';

import InfoSocials from '@/components/InfoSocials';
import { location } from '@/assets/images';
import ContactForm from '@/components/ContactForm';

const ContactMobile = () => {
  useEffect(() => {
    // Desplaza la página al inicio al cargar la vista
    window.scrollTo(0, 0);
  }, []);
  //const { register, handleSubmit, reset } = useForm<FormData>();

  // interface FormData {
  //   name: string;
  //   email: string;
  //   company?: string;
  //   service: string;
  //   estimatedTime?: string;
  //   budget?: string;
  //   source?: string;
  //   description?: string;
  // }

  // const onSubmit: SubmitHandler<FormData> = (data) => {
  //   console.log(data);
  //   reset();
  // };

  return (
    <div className="container mx-auto space-y-3">
      <div className="relative w-full h-85vh">
        <img
          src={banner3}
          alt="Banner"
          className="w-full h-full object-cover rounded-[10px] overflow-hidden"
        />
      </div>
      <div className="bg-[#E9E9E9] text-[14px] text-[#1E1E1E] rounded-lg py-3 px-3">
        <h3 className="font-semibold">Contacto</h3>
        {/* Formulario */}
        <ContactForm />
      </div>

      {/* Info Card & Socials */}
      {/* <div className="mt-8">
        <InfoCard
          title="Contacto"
          subtitle="¿Tienes un proyecto en mente?"
          content="britobrand@gmail.com"
        />
      </div> */}

      <InfoSocials />

      {/* Ubicación */}
      <div className="bg-[#E9E9E9] text-black rounded-lg p-4">
        <h3 className="font-normal text-[14px] ">Ubicación</h3>
        <p className="font-medium text-[15px] mt-3">Buenos Aires, Argentina</p>
        <p className="text-[15px] font-light">
          Ciudad Autónoma de Buenos Aires (GMT-3)
        </p>
        <img
          src={location}
          alt="Ubicación"
          className="w-full h-auto mt-8 rounded-lg"
        />
      </div>
    </div>
  );
};

export default ContactMobile;
