import React from "react";
import { useState } from "react";
import { sedel, casanuna, factor, pintalopro, botanico, labsantaelena, emamodels, sierraatlantica, mss, lachacra } from "@/assets/images";
import { coverbotanico, covercasanuna, covercota, covercycling, coverdudu, coverideamania, coverinvolvere, coveremamodels } from "@/assets/images";

const projectsPreview = [
  { title: "Ema Models", image: emamodels, type: "Identidad visual" },
  { title: "Botánico", image: botanico, type: "Identidad visual" },
  { title: "Casa Nuna", image: casanuna, type: "Identidad visual" },
  { title: "Pintalo pro", image: pintalopro, type: "Identidad visual" },
  { title: "Sierra Atlántica", image: sierraatlantica, type: "Identidad visual" },
  { title: "Sedel", image: sedel, type: "Identidad visual + Website" },
  { title: "Factor", image: factor, type: "Identidad visual" }, 
  { title: "La chacra", image: lachacra, type: "Website" },
  { title: "Laboratorio Santa Elena", image: labsantaelena, type: "Identidad visual" },
  { title: "Mining Supplies Solutions", image: mss, type: "Branding" }, 
];

const projectsLarge = [
  { title: "DUDÚ", image: coverdudu, type: "Identidad visual" },
  { title: "COTA", image: covercota, type: "Identidad visual" },
  { title: "CYCLING", image: covercycling, type: "Identidad visual" },
  { title: "IDEAMANIA", image: coverideamania, type: "Identidad visual" },
  { title: "INVOLVERE", image: coverinvolvere, type: "Identidad visual" },
  { title: "EMA MODELS", image: coveremamodels, type: "Identidad visual" },
  { title: "BOTÁNICO", image: coverbotanico, type: "Identidad visual" },
  { title: "CASA NUNA", image: covercasanuna, type: "Identidad visual" },
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
    <div className="text-[#1E1E1E] rounded-lg shadow">
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
    <div className="bg-[#E9E9E9] text-[#1E1E1E] rounded-lg shadow py-4 px-2 md:row-span-2">
      <div className="flex justify-between">
        <h2 className="font-semibold">Proyectos</h2>
        <button onClick={toggleExpand}>
            {isExpanded ? "Ver menos" : "Ver más"}
        </button>
    </div>
    <div className="flex gap-2 items-start">
      <img src={project.image} alt={project.title} className="w-16 h-16 object-cover rounded-[10px]" />
      <div className="">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p>{project.type}</p>
      </div>
      </div>
    </div>
  );
};

export default ProjectsPreview;