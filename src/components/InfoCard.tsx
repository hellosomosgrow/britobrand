import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const InfoCard = ({
  title,
  content,
  subtitle,
  image,
}: {
  title: string;
  content: string;
  subtitle?: string;
  image?: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleRedirect = (path: string) => {
    navigate(path);
  };

  return (
    <div className="bg-[#E9E9E9] text-[14px] text-black rounded-lg py-5 px-3 pr-4">
      <div className="flex justify-between mb-5">
        <h2 className="text-sm font-light">{title}</h2>
        {title === 'Instagram' ? (
          <a
            href="https://instagram.com/britobrand_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-light no-underline"
          >
            Ir al link
          </a>
        ) : title === 'Contacto' ? (
          <button
            onClick={() => handleRedirect('/contacto')}
            className="text-sm cursor-pointer font-light"
          >
            Ver Más
          </button>
        ) : title === 'Experiencia' ? (
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-light"
          >
            Ver Curriculum
          </a>
        ) : (
          <button
            onClick={toggleExpand}
            className="text-sm font-light text-black cursor-pointer"
          >
            {isExpanded ? 'Ver Menos' : 'Ver Más'}
          </button>
        )}
      </div>
      {subtitle && <h3 className="font-medium text-[15px] mb-1">{subtitle}</h3>}
      <p
        className={`text-[15px] font-light whitespace-pre-line ${
          !isExpanded ? 'line-clamp-2' : ''
        }`}
      >
        {content}
      </p>
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-auto mt-2 rounded-lg"
        />
      )}
      {title === 'Servicios' && isExpanded && (
        <div className="mt-6 flex justify-center w-full">
          <button
            className="bg-black text-white rounded-[10px] px-10 py-3 text-sm"
            onClick={() => handleRedirect('/contacto')}
          >
            Quiero Contratar un Servicio
          </button>
        </div>
      )}
    </div>
  );
};

export default InfoCard;
