import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  projectsPreview,
  projectsLarge,
  type Project,
} from '@/data/projectsData';
import ProjectPreviewCard from '@/components/ProjectPreviewCard';
import InfoProjects from '@/components/InfoProjects';
//import { projectsDetailData } from '@/data/projectsDetailData';

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();

  const project: Project | undefined =
    projectsPreview.find((p) => p.title === projectId) ||
    projectsLarge.find((p) => p.title === projectId);

  //const images = projectId ? projectsDetailData[projectId] || [] : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return <div>Proyecto no encontrado</div>;
  }

  return (
    <div className="w-full mx-auto flex flex-col md:flex-row md:space-x-4">
      {/* Columna izquierda: ProjectPreviewCard e InfoProjects */}
      <div className="flex flex-col space-y-4 md:w-1/3 md:sticky md:top-0 md:h-screen md:overflow-y-auto no-scrollbar">
        {/* <ProjectPreviewCard project={project} /> */}
        <InfoProjects
          projectTitle={project.title || ''}
          projectType={project.type || ''}
          projectDescription={project.description || ''}
          projectLocationDescription={project.location || ''}
          projectColaborators={project.colaborators || []}
          projectTools={project.tools || []}
          project={project}
        />
        {projectsPreview
          .filter((p) => p.title !== project.title)
          .map((project, index) => (
            <ProjectPreviewCard key={index} project={project} />
          ))}
      </div>

      {/* Columna derecha: Imágenes */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
        {project.images && project.images.length > 0 ? (
          project.images.map((img, idx) => (
            <div
              key={idx}
              className={`bg-[#E9E9E9] rounded-lg overflow-hidden 
          ${idx === 0 ? 'col-span-1 md:col-span-2' : 'col-span-1'}`}
            >
              <img
                src={img}
                alt={`Imagen ${idx + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))
        ) : (
          <div className="col-span-2 text-center text-gray-400">
            No hay imágenes para este proyecto.
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
