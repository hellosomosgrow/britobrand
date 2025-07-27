import React from 'react';
import ProjectPreviewCard from './ProjectPreviewCard';
import { projectsPreview, projectsLarge } from '@/data/projectsData';
import { useNavigate } from 'react-router-dom';
type ProjectsPreviewProps = {
  columnsDesktop?: number; // Por defecto 3
};

const getColsClass = (cols: number | undefined) => {
  switch (cols) {
    case 1:
      return 'md:grid-cols-1';
    case 2:
      return 'md:grid-cols-2';
    case 4:
      return 'md:grid-cols-4';
    default:
      return 'md:grid-cols-3';
  }
};

const ProjectsPreview = ({ columnsDesktop }: ProjectsPreviewProps) => {
  const largeFirst8 = projectsLarge.slice(0, 8);
  return (
    <div className="w-full space-y-4">
      {/* Escritorio: todos los proyectos large */}
      <div className={`hidden md:grid ${getColsClass(columnsDesktop)} gap-4`}>
        {projectsLarge.map((project, index) => (
          <ProjectPreviewLargeCard key={index} project={project} />
        ))}
      </div>

      <div className="md:hidden grid grid-cols-1 gap-4">
        {largeFirst8.map((project, index) => (
          <ProjectPreviewLargeCard key={index} project={project} />
        ))}
        {projectsPreview.map((project, index) => (
          <ProjectPreviewCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

const ProjectPreviewLargeCard = ({
  project,
}: {
  project: { title: string; image: string; type: string };
}) => {
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate(`/proyectos/${project.title}`);
  };

  return (
    <div
      className="text-[#1E1E1E] rounded-lg cursor-pointer"
      onClick={handleViewMore}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-auto object-cover rounded-[10px]"
      />
      <div className="flex justify-between p-1 items-center">
        <h3 className="text-sm font-semibold">{project.title}</h3>
        <p className="font-light text-sm">{project.type}</p>
      </div>
    </div>
  );
};

export default ProjectsPreview;
