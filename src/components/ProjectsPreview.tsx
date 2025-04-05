import React from "react";
import ProjectPreviewCard from "./ProjectPreviewCard";
import { projectsPreview, projectsLarge } from "@/data/projectsData";
import { useNavigate } from "react-router-dom";

const ProjectsPreview = () => {
  return (
    <div className="w-full grid grid-cols-1 gap-4">
      {/* Solo se muestran las versiones 'Large' en escritorio (3 columnas) */}
      <div className="md:grid md:grid-cols-3 gap-2">
        {projectsLarge.map((project, index) => (
          <ProjectPreviewLargeCard key={index} project={project} />
        ))}
      </div>

      {/* Solo se muestran las versiones 'Preview' en móvil */}
      <div className="md:hidden grid-cols-1 gap-4">
        {projectsPreview.map((project, index) => (
          <ProjectPreviewCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

const ProjectPreviewLargeCard = ({ project }: { project: { title: string; image: string; type: string } }) => {
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate(`/proyectos/${project.title}`);
  };

  return (
    <div className="text-[#1E1E1E] rounded-lg cursor-pointer" onClick={handleViewMore}>
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-auto object-cover rounded-[10px]"
      />
      <div className="flex justify-between p-1">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p>{project.type}</p>
      </div>
    </div>
  );
};

export default ProjectsPreview;
