import { useState } from "react";

export const InfoCard = ({ title, content, subtitle, image }: { title: string; content: string, subtitle?: string, image?: string}) => {
    const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
    return (
    <div className="bg-[#E9E9E9] text-[14px] text-[#1E1E1E] rounded-lg shadow py-4 px-2">
      <div className="flex justify-between mb-3">
        <h2>{title}</h2>
        <button onClick={toggleExpand}>
            {isExpanded ? "Ver Menos" : "Ver Más"}
        </button>
      </div>
   
      <h3 className="font-semibold">{subtitle}</h3>
      <p className="text-sm">{content}</p>
      {isExpanded && image && <img src={image} alt={title} className="w-full h-auto mt-2 rounded-lg" />}
      
    </div>
  );
};

export default InfoCard;