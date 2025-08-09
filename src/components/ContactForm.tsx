import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { MdArrowDropDown } from 'react-icons/md';

interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps {
  options: Option[];
  placeholder: string;
  name: keyof FormData;
  value: string;
  onChange: (name: keyof FormData, value: string) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  placeholder,
  name,
  value,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const renderOptionLabel = (label: string) => {
    if (label.includes('(Especifica en el mensaje)')) {
      const mainText = label.split('(Especifica en el mensaje)')[0];
      return (
        <>
          {mainText}
          <span className="text-[#767575]">(Especifica en el mensaje)</span>
        </>
      );
    }
    return label;
  };

  return (
    <div className="relative w-full">
      <div
        className="w-full pl-6 pr-10 py-3 bg-white text-[#1E1E1E] rounded-lg cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {value || placeholder}
        <MdArrowDropDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none text-[15px]" />
      </div>
      {isOpen && (
        <div className="absolute top-full mt-1 left-0 w-full bg-white z-10 rounded-xl">
          {options.map((opt) => (
            <div
              key={opt.value}
              className="px-4 py-2 cursor-pointer hover:border hover:border-black hover:rounded-[10px]"
              onClick={() => {
                onChange(name, opt.value);
                setIsOpen(false);
              }}
            >
              {renderOptionLabel(opt.label)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

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

const ContactForm = () => {
  const { register, handleSubmit, reset, setValue, watch } =
    useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    reset();
  };

  const customSelects = [
    {
      name: 'service' as const,
      placeholder: '¿Qué servicios buscas?',
      options: [
        { label: 'Diseño de Logo', value: 'Diseño de Logo' },
        { label: 'Identidad Visual', value: 'Identidad Visual' },
        { label: 'Branding', value: 'Branding' },
        { label: 'Website', value: 'Website' },
        { label: 'Otro (Especifica en el mensaje)', value: 'Otro' },
      ],
    },
    {
      name: 'estimatedTime' as const,
      placeholder: 'Tiempo Estimado',
      options: [
        { label: 'Para Ayer', value: 'Para Ayer' },
        { label: '1 mes', value: '1 mes' },
        { label: '2 - 4 meses', value: '2 - 4 meses' },
        { label: '5 meses', value: '5 meses' },
      ],
    },
    {
      name: 'budget' as const,
      placeholder: 'Presupuesto Estimado',
      options: [
        { label: 'Desde USD $500', value: '$500' },
        { label: 'USD $1500', value: '$1500' },
        { label: 'USD $3000 - USD $5000', value: '$3000 - $5000' },
        { label: '+USD $5000', value: '+$5000' },
      ],
    },
    {
      name: 'source' as const,
      placeholder: '¿Cómo me encontraste?',
      options: [
        { label: 'Instagram', value: 'Instagram' },
        { label: 'Recomendación', value: 'Recomendación' },
        { label: 'Google', value: 'Google' },
      ],
    },
  ];

  const handleSelectChange = (name: keyof FormData, value: string) => {
    setValue(name, value);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 bg-[#E9E9E9] rounded-xl text-sm text-[#1E1E1E]"
    >
      {/* Nombre */}
      <div className="relative">
        <input
          {...register('name', { required: true })}
          type="text"
          placeholder="Nombre"
          className="w-full placeholder:text-sm placeholder:text-[#1E1E1E] pl-6 pr-10 py-3 bg-white rounded-lg focus:outline-none"
        />
        <span className="absolute right-5 top-1/2 transform -translate-y-1/2 text-[#1E1E1E] text-xs">
          *
        </span>
      </div>

      {/* Email */}
      <div className="relative">
        <input
          {...register('email', { required: true })}
          type="email"
          placeholder="Email"
          className="w-full pl-6 pr-10 py-3 bg-white rounded-lg focus:outline-none placeholder:text-[#1E1E1E] placeholder:text-sm"
        />
        <span className="absolute right-5 top-1/2 transform -translate-y-1/2 text-[#1E1E1E] text-xs">
          *
        </span>
      </div>

      {/* Empresa */}
      <div className="relative">
        <input
          {...register('company')}
          type="text"
          placeholder="Nombre de tu empresa o marca"
          className="w-full pl-6 pr-10 py-3 bg-white rounded-lg focus:outline-none placeholder:text-[#1E1E1E] placeholder:text-sm"
        />
        <span className="absolute right-5 top-1/2 transform -translate-y-1/2 text-[#1E1E1E] text-xs">
          *
        </span>
      </div>

      {/* Custom Selects */}
      {customSelects.map(({ name, placeholder, options }) => (
        <CustomSelect
          key={name}
          name={name}
          placeholder={placeholder}
          options={options}
          value={watch(name) || ''}
          onChange={handleSelectChange}
        />
      ))}

      {/* Describe tu proyecto */}
      <div className="bg-white rounded-lg p-3">
        <label className="block mb-2 text-sm text-[#1E1E1E]">
          Describe tu proyecto
        </label>
        <textarea
          {...register('description')}
          placeholder="Escribe aquí..."
          className="w-full p-3 bg-[#E9E9E9] rounded-md text-[#1E1E1E] placeholder:text-black placeholder:text-sm h-32 resize-none focus:outline-none"
        />
      </div>

      {/* Submit */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-black text-white w-40 py-3 rounded-md hover:opacity-90 transition"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
