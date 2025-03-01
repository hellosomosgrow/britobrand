import React from "react";
import { useState } from "react";
import { felixbrito } from "@/assets/images/index"

const InfoSection = () => {
  return (
    <div className="space-y-4">
      <InfoCard title="About" subtitle="Acerca de mí" content="Lorem ipsum dolor sit amet..." image={felixbrito} />
      <InfoCard title="Servicios" subtitle="Lo que hago" content="Lorem ipsum dolor sit amet..." />
      {/* <InfoCard title="Social" content="Enlaces a redes sociales" />
      <InfoCard title="Experiencia" content="Resumen de experiencia" /> */}
    </div>
  );
};

const InfoCard = ({ title, content, subtitle, image }: { title: string; content: string, subtitle?: string, image?: string}) => {
    const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
    return (
    <div className="bg-[#E9E9E9] text-[#1E1E1E] rounded-lg shadow py-4 px-2">
      <div className="flex justify-between">
        <h2 className="font-semibold">{title}</h2>
        <button onClick={toggleExpand}>
            {isExpanded ? "Ver menos" : "Ver más"}
        </button>
      </div>
   
      <h3 className="font-semibold">{subtitle}</h3>
      <p className="text-sm">{content}</p>
      {isExpanded && image && <img src={image} alt={title} className="w-full h-auto mt-2 rounded-lg" />}
      
    </div>
  );
};

export default InfoSection;