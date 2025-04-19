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
    <div className="bg-[#E9E9E9] text-[14px] text-[#1E1E1E] rounded-lg shadow py-4 px-2 ">
      <div className="flex justify-between mb-3">
        <h2>{title}</h2>
        {title === 'Instagram' ? (
          <button>Ir al link</button>
        ) : title === 'Contacto' ? (
          <button onClick={handleRedirect}>Ver Más</button>
        ) : (
          <button onClick={toggleExpand}>
            {isExpanded ? 'Ver Menos' : 'Ver Más'}
          </button>
        )}
      </div>
      {subtitle && <h3 className="font-semibold">{subtitle}</h3>}
      <p className="text-sm">{content}</p>
      {isExpanded && image && (
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
