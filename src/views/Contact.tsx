import React from 'react';
import { useForm } from 'react-hook-form';
import { BsDot } from 'react-icons/bs';
import { MdArrowDropDown } from 'react-icons/md';
import Banner from '@/components/Banner';
import InfoSocials from '@/components/InfoSocials';
import { location } from '@/assets/images';

const Contact = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();

  interface FormData {
    name: string;
    email: string;
    company?: string;
    service: string;
    estimatedTime?: string;
    budget?: string;
    source?: string;
    description?: string;
  }

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="container mx-auto space-y-2">
      <Banner />
      <div className="bg-[#E9E9E9] text-[14px] text-[#1E1E1E] rounded-lg shadow py-3 px-3">
        <h3 className="font-semibold">Contacto</h3>
        <h4 className="font-semibold mt-2">Lo que hago</h4>
        <p className="mb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 bg-[#E9E9E9] rounded-lg text-[14px] text-[#1E1E1E]"
        >
          {/* Nombre */}
          <div className="relative">
            <input
              {...register('name', { required: true })}
              type="text"
              placeholder="Nombre"
              className="w-full pl-6 py-2 px-3 bg-white rounded-md focus:outline-none placeholder:text-gray-700 placeholder:text-extra-light"
            />
            <BsDot className="absolute right-3 top-3 text-gray-500" />
          </div>

          {/* Email */}
          <div className="relative">
            <input
              {...register('email', { required: true })}
              type="email"
              placeholder="Email"
              className="w-full pl-6 py-2 px-3 bg-white rounded-md focus:outline-none placeholder:text-gray-700 placeholder:text-extra-light"
            />
            <BsDot className="absolute right-3 top-3 text-gray-500" />
          </div>

          {/* Empresa */}
          <div className="relative">
            <input
              {...register('company')}
              type="text"
              placeholder="Nombre de tu empresa o marca"
              className="w-full pl-6 py-2 px-3 bg-white rounded-md focus:outline-none placeholder:text-gray-700 placeholder:text-extra-light"
            />
            <BsDot className="absolute right-3 top-3 text-gray-500" />
          </div>

          {/* Servicios */}
          <div className="relative">
            <select
              {...register('service', { required: true })}
              className="appearance-none w-full pl-6 pr-8 py-2 bg-white rounded-md focus:outline-none placeholder:text-gray-700"
              defaultValue=""
            >
              <option disabled value="">
                ¿Qué servicios buscas?
              </option>
              <option>Branding</option>
              <option>Diseño Web</option>
              <option>Consultoría</option>
            </select>
            <MdArrowDropDown className="absolute right-3 top-3 text-gray-500 pointer-events-none" />
          </div>

          {/* Tiempo estimado */}
          <div className="relative">
            <select
              {...register('estimatedTime')}
              className="appearance-none w-full pl-6 pr-8 py-2 bg-white rounded-md focus:outline-none placeholder:text-gray-700"
              defaultValue=""
            >
              <option disabled value="">
                Tiempo Estimado
              </option>
              <option>1 semana</option>
              <option>1 mes</option>
              <option>3 meses</option>
            </select>
            <MdArrowDropDown className="absolute right-3 top-3 text-gray-500 pointer-events-none" />
          </div>

          {/* Presupuesto estimado */}
          <div className="relative">
            <select
              {...register('budget')}
              className="appearance-none w-full pl-6 pr-8 py-2 bg-white rounded-md focus:outline-none placeholder:text-gray-700"
              defaultValue=""
            >
              <option disabled value="">
                Presupuesto Estimado
              </option>
              <option>$100 - $500</option>
              <option>$500 - $1000</option>
              <option>$1000+</option>
            </select>
            <MdArrowDropDown className="absolute right-3 top-3 text-gray-500 pointer-events-none" />
          </div>

          {/* ¿Cómo me encontraste? */}
          <div className="relative">
            <select
              {...register('source')}
              className="appearance-none w-full pl-6 pr-8 py-2 bg-white rounded-md focus:outline-none placeholder:text-gray-700"
              defaultValue=""
            >
              <option disabled value="">
                ¿Cómo me encontraste?
              </option>
              <option>Instagram</option>
              <option>Recomendación</option>
              <option>Google</option>
            </select>
            <MdArrowDropDown className="absolute right-3 top-3 text-gray-500 pointer-events-none" />
          </div>

          {/* Describe tu proyecto */}
          <div className="bg-white rounded-md p-3">
            <label className="block mb-3">Describe tu proyecto</label>
            <textarea
              {...register('description')}
              placeholder="Escribe aquí..."
              className="w-full p-3 bg-[#E9E9E9] rounded-md placeholder:text-gray-700 h-32 resize-none focus:outline-none"
            />
          </div>

          {/* Submit */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-black text-white w-40 py-3 rounded-md mt-4 hover:opacity-90 transition"
            >
              Enviar
            </button>
          </div>
        </form>
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
      <div className="mt-8 bg-[#E9E9E9] text-[#1E1E1E] rounded-lg shadow p-4">
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

export default Contact;
