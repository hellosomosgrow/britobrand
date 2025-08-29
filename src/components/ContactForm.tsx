import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { MdArrowDropDown } from 'react-icons/md';
import { RECAPTCHA_CONFIG, getRecaptchaScriptUrl } from '@/config/recaptcha';
import { EMAILJS_CONFIG, EmailTemplateParams } from '@/config/emailjs';
import emailjs from '@emailjs/browser';

// Tipos para reCAPTCHA v3
declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (
        siteKey: string,
        options: { action: string }
      ) => Promise<string>;
    };
  }
}

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
  company: string;
  service: string;
  estimatedTime: string;
  budget: string;
  source: string;
  description: string;
  marketingConsent: boolean;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onChange', // Validar en tiempo real
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const [isRecaptchaReady, setIsRecaptchaReady] = useState(false);

  // Observar todos los campos para validar el botón
  const watchedFields = watch();

  // Cargar reCAPTCHA dinámicamente
  useEffect(() => {
    const loadRecaptcha = () => {
      // Verificar si ya está cargado
      if (typeof window.grecaptcha !== 'undefined') {
        setIsRecaptchaReady(true);
        return;
      }

      // Crear el script si no existe
      const existingScript = document.querySelector('script[src*="recaptcha"]');
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = getRecaptchaScriptUrl(RECAPTCHA_CONFIG.SITE_KEY);
        script.async = true;
        script.defer = true;

        script.onload = () => {
          // Esperar un poco más para que grecaptcha esté disponible
          setTimeout(() => {
            if (typeof window.grecaptcha !== 'undefined') {
              setIsRecaptchaReady(true);
            }
          }, 1000);
        };

        script.onerror = () => {
          console.error('Error cargando reCAPTCHA');
        };

        document.head.appendChild(script);
      } else {
        // Si el script ya existe, verificar si grecaptcha está disponible
        const checkRecaptcha = () => {
          if (typeof window.grecaptcha !== 'undefined') {
            setIsRecaptchaReady(true);
          } else {
            setTimeout(checkRecaptcha, 100);
          }
        };
        checkRecaptcha();
      }
    };

    loadRecaptcha();
  }, []);

  // Verificar si todos los campos requeridos están llenos
  const isFormValid = () => {
    const requiredFields: (keyof FormData)[] = [
      'name',
      'email',
      'company',
      'service',
      'estimatedTime',
      'budget',
      'source',
      'description',
    ];

    const isValid = requiredFields.every((field) => {
      const value = watchedFields[field];
      return typeof value === 'string' && value.trim() !== '';
    });

    // Validación adicional para el email
    const emailValid =
      watchedFields.email &&
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(watchedFields.email);

    return isValid && emailValid;
  };

  // Función para ejecutar reCAPTCHA v3
  const executeRecaptcha = async (): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (!isRecaptchaReady || typeof window.grecaptcha === 'undefined') {
        reject(
          new Error(
            'reCAPTCHA no está cargado. Por favor, recarga la página e inténtalo de nuevo.'
          )
        );
        return;
      }

      try {
        window.grecaptcha.ready(() => {
          window.grecaptcha
            .execute(RECAPTCHA_CONFIG.SITE_KEY, {
              action: RECAPTCHA_CONFIG.ACTIONS.CONTACT_FORM,
            })
            .then(resolve)
            .catch((error) => {
              console.error('Error ejecutando reCAPTCHA:', error);
              reject(
                new Error(
                  'Error al verificar reCAPTCHA. Por favor, inténtalo de nuevo.'
                )
              );
            });
        });
      } catch (error) {
        console.error('Error en reCAPTCHA:', error);
        reject(
          new Error(
            'Error inesperado con reCAPTCHA. Por favor, recarga la página.'
          )
        );
      }
    });
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      setIsSubmitting(true);
      setSubmitStatus('idle');

      // Ejecutar reCAPTCHA v3
      const recaptchaToken = await executeRecaptcha();

      // Preparar datos para el email
      const templateParams: EmailTemplateParams = {
        to_email: EMAILJS_CONFIG.TO_EMAIL,
        subject: `Nuevo formulario de contacto - ${data.name}`,
        from_name: data.name,
        from_email: data.email,
        company: data.company,
        service: data.service,
        estimated_time: data.estimatedTime,
        budget: data.budget,
        source: data.source,
        description: data.description,
        marketing_consent: data.marketingConsent ? 'Sí' : 'No',
        recaptcha_token: recaptchaToken,
        timestamp: new Date().toISOString(),
      };

      // Enviar email usando EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams as unknown as Record<string, unknown>,
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      setSubmitStatus('success');
      reset();
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      console.error('Detalles del error:', {
        message: error instanceof Error ? error.message : 'Error desconocido',
        stack: error instanceof Error ? error.stack : undefined,
      });
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const customSelects = [
    {
      name: 'service' as const,
      placeholder: '¿Qué servicios buscas? *',
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
      placeholder: 'Tiempo Estimado *',
      options: [
        { label: 'Para Ayer', value: 'Para Ayer' },
        { label: '1 mes', value: '1 mes' },
        { label: '2 - 4 meses', value: '2 - 4 meses' },
        { label: '5 meses', value: '5 meses' },
      ],
    },
    {
      name: 'budget' as const,
      placeholder: 'Presupuesto Estimado *',
      options: [
        { label: 'Desde USD $500', value: '$500' },
        { label: 'USD $1500', value: '$1500' },
        { label: 'USD $3000 - USD $5000', value: '$3000 - $5000' },
        { label: '+USD $5000', value: '+$5000' },
      ],
    },
    {
      name: 'source' as const,
      placeholder: '¿Cómo me encontraste? *',
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
      id="contact-form"
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 bg-[#E9E9E9] rounded-xl text-sm text-[#1E1E1E]"
    >
      {/* Nombre */}
      <div className="relative">
        <input
          {...register('name', { required: 'El nombre es requerido' })}
          type="text"
          placeholder="Nombre *"
          className="w-full placeholder:text-sm placeholder:text-[#1E1E1E] pl-6 pr-10 py-3 !bg-white rounded-lg focus:outline-none"
          style={{ fontSize: '16px' }}
          autoComplete="off"
        />
        <span className="absolute right-5 top-1/2 transform -translate-y-1/2 text-[#1E1E1E] text-xs">
          *
        </span>
        {errors.name && (
          <span className="text-red-500 text-xs mt-1 block">
            {errors.name.message}
          </span>
        )}
      </div>

      {/* Email */}
      <div className="relative">
        <input
          {...register('email', {
            required: 'El email es requerido',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Email inválido',
            },
          })}
          type="email"
          placeholder="Email *"
          className="w-full pl-6 pr-10 py-3 !bg-white rounded-lg focus:outline-none placeholder:text-[#1E1E1E] placeholder:text-sm"
          style={{ fontSize: '16px' }}
          autoComplete="off"
        />
        <span className="absolute right-5 top-1/2 transform -translate-y-1/2 text-[#1E1E1E] text-xs">
          *
        </span>
        {errors.email && (
          <span className="text-red-500 text-xs mt-1 block">
            {errors.email.message}
          </span>
        )}
      </div>

      {/* Empresa */}
      <div className="relative">
        <input
          {...register('company', {
            required: 'El nombre de la empresa es requerido',
          })}
          type="text"
          placeholder="Nombre de tu empresa o marca *"
          className="w-full pl-6 pr-10 py-3 !bg-white rounded-lg focus:outline-none placeholder:text-[#1E1E1E] placeholder:text-sm"
          style={{ fontSize: '16px' }}
          autoComplete="off"
        />
        <span className="absolute right-5 top-1/2 transform -translate-y-1/2 text-[#1E1E1E] text-xs">
          *
        </span>
        {errors.company && (
          <span className="text-red-500 text-xs mt-1 block">
            {errors.company.message}
          </span>
        )}
      </div>

      {/* Custom Selects */}
      {customSelects.map(({ name, placeholder, options }) => (
        <div key={name}>
          <CustomSelect
            name={name}
            placeholder={placeholder}
            options={options}
            value={watch(name) || ''}
            onChange={handleSelectChange}
          />
          {/* Campo oculto para react-hook-form */}
          <input
            {...register(name, { required: 'Este campo es requerido' })}
            type="hidden"
            value={watch(name) || ''}
          />
          {errors[name] && (
            <span className="text-red-500 text-xs mt-1 block">
              Este campo es requerido
            </span>
          )}
        </div>
      ))}

      {/* Describe tu proyecto */}
      <div className="bg-white rounded-lg p-3">
        <label className="block mb-2 text-sm text-[#1E1E1E]">
          Describe tu proyecto *
        </label>
        <textarea
          {...register('description', {
            required: 'La descripción del proyecto es requerida',
          })}
          placeholder="Escribe aquí... *"
          className="w-full p-3 !bg-[#E9E9E9] rounded-md text-[#1E1E1E] placeholder:text-black placeholder:text-sm h-32 resize-none focus:outline-none"
          style={{ fontSize: '16px' }}
        />
        {errors.description && (
          <span className="text-red-500 text-xs mt-1 block">
            {errors.description.message}
          </span>
        )}
      </div>

      {/* Checkbox de consentimiento */}
      <div className="flex items-start space-x-3 bg-white rounded-lg p-4">
        <input
          {...register('marketingConsent')}
          type="checkbox"
          id="marketingConsent"
          className="mt-1 w-4 h-4 text-black bg-white border-gray-300 rounded focus:ring-black focus:ring-2"
        />
        <label
          htmlFor="marketingConsent"
          className="text-sm text-[#1E1E1E] leading-relaxed"
        >
          <span className="text-gray-600">
            Acepto recibir comunicaciones por correo electrónico sobre nuevos
            proyectos, ofertas especiales y actualizaciones de Brito Brand.
          </span>
        </label>
      </div>

      {/* Mensajes de estado */}
      {submitStatus === 'success' && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          ¡Mensaje enviado exitosamente! Te responderemos pronto.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p className="font-bold">Error al enviar el mensaje</p>
          <p>
            Por favor, inténtalo de nuevo. Si el problema persiste, verifica tu
            conexión a internet o contacta al soporte.
          </p>
          <p className="text-xs mt-2">
            Revisa la consola del navegador para más detalles del error.
          </p>
        </div>
      )}

      {/* Submit con reCAPTCHA v3 */}
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting || !isFormValid() || !isRecaptchaReady}
          className={`bg-black text-white w-40 py-3 rounded-md transition ${
            isSubmitting || !isFormValid() || !isRecaptchaReady
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:opacity-90'
          }`}
        >
          {isSubmitting ? 'Enviando...' : 'Enviar'}
        </button>
      </div>

      {/* Nota sobre reCAPTCHA */}
      <div className="text-xs text-gray-500 text-center">
        Este sitio está protegido por reCAPTCHA y se aplican la{' '}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-700"
        >
          Política de Privacidad
        </a>{' '}
        y los{' '}
        <a
          href="https://policies.google.com/terms"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-700"
        >
          Términos de Servicio
        </a>{' '}
        de Google.
      </div>
    </form>
  );
};

export default ContactForm;
