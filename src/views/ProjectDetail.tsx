import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  projectsPreview,
  projectsLarge,
  type Project,
} from '@/data/projectsData';
import InfoProjects from '@/components/InfoProjects';
//import { projectsDetailData } from '@/data/projectsDetailData';

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  const project: Project | undefined =
    projectsPreview.find((p) => p.title === projectId) ||
    projectsLarge.find((p) => p.title === projectId);

  const projectList = projectsLarge;
  const currentIndex = projectList.findIndex((p) => p.title === projectId);

  const nextProjectIndex = (currentIndex + 1) % projectList.length;
  const prevProjectIndex =
    (currentIndex - 1 + projectList.length) % projectList.length;

  const nextProject = projectList[nextProjectIndex];
  const prevProject = projectList[prevProjectIndex];

  const handleNextProject = () => {
    navigate(`/proyectos/${nextProject.title}`);
  };

  const handlePrevProject = () => {
    navigate(`/proyectos/${prevProject.title}`);
  };
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
      <div className="flex flex-col space-y-4 md:w-1/3 md:sticky md:top-0 md:h-screen no-scrollbar max-w-md">
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
        <div className="flex flex-col space-y-2">
          <button
            onClick={handleNextProject}
            className="w-full bg-black text-white text-[15px] font-light py-3 rounded-[6px] hover:opacity-90 transition"
          >
            Ver Siguiente Proyecto
          </button>
          <button
            onClick={handlePrevProject}
            className="w-full bg-[#767575] text-[15px] font-light text-white py-3 rounded-[6px] hover:opacity-90 transition"
          >
            Ir Atrás
          </button>
        </div>
      </div>

      {/* Columna derecha: Imágenes */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-auto">
        {project.images && project.images.length > 0 ? (
          project.images.map((img, idx) => (
            <div
              key={idx}
              className={`bg-[#E9E9E9] rounded-lg overflow-hidden ${
                img.layout === 'full'
                  ? 'col-span-1 md:col-span-2'
                  : 'col-span-1'
              }`}
            >
              <img
                src={img.url}
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
