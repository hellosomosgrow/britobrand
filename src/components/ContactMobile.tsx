import React from 'react';
import { useEffect } from 'react';
//import { useForm, SubmitHandler } from 'react-hook-form';
//import { BsDot } from 'react-icons/bs';
//import { MdArrowDropDown } from 'react-icons/md';
import Banner from '@/components/Banner';
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
    <div className="container mx-auto space-y-2">
      <Banner />
      <div className="bg-[#E9E9E9] text-[14px] text-[#1E1E1E] rounded-lg py-3 px-3">
        <h3 className="font-semibold">Contacto</h3>
        <h4 className="font-semibold mt-2">Lo que hago</h4>
        <p className="mb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
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

      <div className="mt-8">
        <InfoSocials />
      </div>

      {/* Ubicación */}
      <div className="mt-8 bg-[#E9E9E9] text-[#1E1E1E] rounded-lg p-4">
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
  );
};

export default ContactMobile;
