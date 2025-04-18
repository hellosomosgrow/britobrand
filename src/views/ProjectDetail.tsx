import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  projectsPreview,
  projectsLarge,
  type Project,
} from '@/data/projectsData';
import ProjectPreviewCard from '@/components/ProjectPreviewCard';
import InfoProjects from '@/components/InfoProjects';

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project: Project | undefined =
    projectsPreview.find((p) => p.title === projectId) ||
    projectsLarge.find((p) => p.title === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return <div>Proyecto no encontrado</div>;
  }

  return (
    <div className="container mx-auto flex flex-col md:flex-row md:space-x-4">
      {/* Columna izquierda: ProjectPreviewCard e InfoProjects */}
      <div className="flex flex-col space-y-4 md:w-1/3 md:sticky md:top-0 md:h-screen md:overflow-y-auto no-scrollbar">
        <ProjectPreviewCard project={project} />
        <InfoProjects
          projectTitle={project.title}
          projectType={project.type}
          projectDescription={
            project.description || 'Descripción no disponible'
          }
          projectLocationDescription={
            project.location || 'Ubicación no disponible'
          }
          projectColaborators={project.colaborators || []}
          projectTools={project.tools || []}
        />
      </div>

      {/* Columna derecha: Imágenes */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Aquí puedes agregar un carrusel o una galería de fotos del proyecto */}
        <div className="bg-[#E9E9E9] rounded-lg h-40 flex items-center justify-center col-span-1 sm:col-span-2 lg:col-span-3">
          <span className="text-gray-500">Imagen principal</span>
        </div>
        <div className="bg-[#E9E9E9] rounded-lg h-40 flex items-center justify-center">
          <span className="text-gray-500">Imagen secundaria 1</span>
        </div>
        <div className="bg-[#E9E9E9] rounded-lg h-40 flex items-center justify-center">
          <span className="text-gray-500">Imagen secundaria 2</span>
        </div>
        <div className="bg-[#E9E9E9] rounded-lg h-40 flex items-center justify-center col-span-1 sm:col-span-2 lg:col-span-3">
          <span className="text-gray-500">Imagen adicional</span>
        </div>
        <div className="bg-[#E9E9E9] rounded-lg h-40 flex items-center justify-center">
          <span className="text-gray-500">Imagen adicional 1</span>
        </div>
        <div className="bg-[#E9E9E9] rounded-lg h-40 flex items-center justify-center">
          <span className="text-gray-500">Imagen adicional 2</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
