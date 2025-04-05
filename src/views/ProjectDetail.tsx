import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { projectsPreview, projectsLarge, type Project } from '@/data/projectsData';
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
    <div className="container mx-auto">
      <ProjectPreviewCard project={project} />
      <div>
        {/* Aquí puedes agregar un carrusel o una galería de fotos del proyecto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
        {/* Tarjetas simuladas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Primera fila: Una imagen */}
            <div className="bg-[#E9E9E9] rounded-lg h-40 flex items-center justify-center col-span-1 sm:col-span-2 lg:col-span-3">
            </div>

            {/* Segunda fila: Dos imágenes */}
            <div className="bg-[#E9E9E9] rounded-lg h-40 flex items-center justify-center">
            </div>
            <div className="bg-[#E9E9E9] rounded-lg h-40 flex items-center justify-center">
            </div>

            {/* Tercera fila: Una imagen */}
            <div className="bg-[#E9E9E9] rounded-lg h-40 flex items-center justify-center col-span-1 sm:col-span-2 lg:col-span-3">
            </div>

            {/* Cuarta fila: Dos imágenes */}
            <div className="bg-[#E9E9E9] rounded-lg h-40 flex items-center justify-center">
            </div>
            <div className="bg-[#E9E9E9] rounded-lg h-40 flex items-center justify-center">
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4">
        <InfoProjects
          projectTitle={project.title}
          projectType={project.type}
          projectDescription={project.description || 'Descripción no disponible'}
          projectLocationDescription={project.location || 'Ubicación no disponible'}
          projectColaborators={project.colaborators || []}
          projectTools={project.tools || []}
        />
      </div>
      <div className="mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projectsPreview
            .filter((p) => p.title !== project.title)
            .map((project, index) => (
              <ProjectPreviewCard key={index} project={project} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
