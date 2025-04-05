import React from "react";
import ProjectPreviewCard from "./ProjectPreviewCard";
import { projectsPreview, projectsLarge } from "@/data/projectsData";

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

export default ProjectsPreview;