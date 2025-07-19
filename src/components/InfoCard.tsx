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

  const handleRedirect = () => {
    navigate('/contacto');
  };

  return (
    <div className="bg-[#E9E9E9] text-[14px] text-black rounded-lg py-5 px-3 pr-4">
      <div className="flex justify-between mb-5">
        <h2 className="text-sm font-light">{title}</h2>
        {title === 'Instagram' ? (
          <a
            href="https://instagram.com/britobrand_"
            target="_blank"
            rel="noopener noreferrer text-sm font-light"
            className="no-underline no-decoration"
          >
            Ir al link
          </a>
        ) : title === 'Contacto' ? (
          <button onClick={handleRedirect} className="text-sm font-light">
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
            className="text-sm font-light text-black"
          >
            {isExpanded ? 'Ver Menos' : 'Ver Más'}
          </button>
        )}
      </div>
      {subtitle && <h3 className="font-medium text-[15px] mb-1">{subtitle}</h3>}
      <p
        className={`text-[15px] font-light whitespace-pre-line ${
          !isExpanded ? 'line-clamp-4' : ''
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
    </div>
  );
};

export default InfoCard;
