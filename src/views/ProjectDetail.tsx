import React from 'react';
import { useParams } from 'react-router-dom';
import { projectsPreview, projectsLarge, type Project } from '@/data/projectsData';
import ProjectPreviewCard from '@/components/ProjectPreviewCard';
import InfoProjects from '@/components/InfoProjects';

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project: Project | undefined =
  projectsPreview.find((p) => p.title === projectId) ||
  projectsLarge.find((p) => p.title === projectId);

if (!project) {
  return <div>Proyecto no encontrado</div>;
}
  return (
    <div className="container mx-auto py-4">
      <ProjectPreviewCard project={project} />
      <div className="mt-4">
        <h2 className="text-2xl font-bold mb-4">Fotos del Proyecto</h2>
        {/* Aquí puedes agregar un carrusel o una galería de fotos del proyecto */}
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
