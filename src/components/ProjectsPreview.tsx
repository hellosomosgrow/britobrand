import React from "react";
import { useState } from "react";
import { sedel, casanuna, factor, pintalopro, botanico, labsantaelena, emamodels, sierraatlantica, mss, lachacra } from "@/assets/images";
import { coverbotanico, covercasanuna, covercota, covercycling, coverdudu, coverideamania, coverinvolvere, coveremamodels } from "@/assets/images";

const projectsPreview = [
  { title: "EMA MODELS", image: emamodels, type: "Identidad Visual" },
  { title: "BOTÁNICO", image: botanico, type: "Identidad Visual" },
  { title: "CASA NUNA", image: casanuna, type: "Identidad Visual" },
  { title: "PINTALO PRO", image: pintalopro, type: "Identidad Visual" },
  { title: "SIERRA ATLÁNTICA", image: sierraatlantica, type: "Identidad Visual" },
  { title: "SEDEL", image: sedel, type: "Identidad Visual + Website" },
  { title: "FACTOR", image: factor, type: "Identidad Visual" }, 
  { title: "LA CHACRA", image: lachacra, type: "Website" },
  { title: "LABORATORIO SANTA ELENA", image: labsantaelena, type: "Identidad Visual" },
  { title: "MINING SUPPLIES SOLUTIONS", image: mss, type: "Branding" }, 
];

const projectsLarge = [
  { title: "DUDÚ", image: coverdudu, type: "Identidad Visual" },
  { title: "COTA", image: covercota, type: "Identidad Visual" },
  { title: "CYCLING", image: covercycling, type: "Identidad Visual" },
  { title: "IDEAMANIA", image: coverideamania, type: "Identidad Visual" },
  { title: "INVOLVERE", image: coverinvolvere, type: "Identidad Visual" },
  { title: "EMA MODELS", image: coveremamodels, type: "Identidad Visual" },
  { title: "BOTÁNICO", image: coverbotanico, type: "Identidad Visual" },
  { title: "CASA NUNA", image: covercasanuna, type: "Identidad Visual" },
];

const ProjectsPreview = () => {
  return (
    <div className="grid grid-cols-1  gap-4 ">
     {projectsLarge.map((project, index) => (
      <ProjectPreviewLargeCard key={index} project={project} />
    ))} 
  
      {projectsPreview.map((project, index) => (
        <ProjectPreviewCard key={index} project={project} />
      ))}
    </div>
  );
};

const ProjectPreviewLargeCard = ({ project }: { project: { title: string; image: string, type: string} }) => {

  return (
    <div className="text-[#1E1E1E] rounded-lg">
      <img src={project.image} alt={project.title} className="w-full h-auto object-cover rounded-[10px]" />
      <div className="flex justify-between p-1">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p>{project.type}</p>
      </div>
    </div>
   
  );
}

const ProjectPreviewCard = ({ project }: { project: { title: string; image?: string, type?:string } }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="bg-[#E9E9E9] text-[#1E1E1E] rounded-lg shadow p-3 md:row-span-2">
      <div className="flex justify-between space-y-3 items-start">
        <h2 className="text-[14px]">Proyectos</h2>
        <button onClick={toggleExpand} className="text-[14px]">
            {isExpanded ? "Ver Menos" : "Ver Más"}
        </button>
    </div>
    <div className="flex space-x-4">
      <img src={project.image} alt={project.title} className="w-16 h-auto object-cover rounded-[10px]" />
        <div className="mb-2">
        <h3 className="text-[15px] font-semibold">{project.title}</h3>
        <p>{project.type}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPreview;