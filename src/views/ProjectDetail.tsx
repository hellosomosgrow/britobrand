import React, { useLayoutEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  projectsPreview,
  projectsLarge,
  type Project,
} from '@/data/projectsData';
import {
  InfoProjects,
  InfoProjectDetails,
  InfoProjectDetailsMobile,
} from '@/components/InfoProjects';
// import { projectsDetailData } from '@/data/projectsDetailData';

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    window.scrollTo(0, 0); // Por si acaso en mobile
    if (leftColRef.current) leftColRef.current.scrollTo(0, 0);
    if (rightColRef.current) rightColRef.current.scrollTo(0, 0);
  }, [projectId]);

  const project: Project | undefined =
    projectsPreview.find((p) => p.title === projectId) ||
    projectsLarge.find((p) => p.title === projectId);

  const projectList = projectsLarge;
  const currentIndex = projectList.findIndex((p) => p.title === projectId);

  const isComingSoon = (project: Project) =>
    project.type === 'Se viene algo nuevo';

  const getNextValidProject = (startIdx: number): Project | undefined => {
    if (startIdx === -1 || projectList.length === 0) {
      return projectList[0];
    }

    let idx = (startIdx + 1) % projectList.length;
    let count = 0;
    while (isComingSoon(projectList[idx]) && count < projectList.length) {
      idx = (idx + 1) % projectList.length;
      count++;
    }
    return projectList[idx];
  };

  // Anterior proyecto válido
  const getPrevValidProject = (startIdx: number): Project | undefined => {
    if (startIdx === -1 || projectList.length === 0) {
      return projectList[0];
    }

    let idx = (startIdx - 1 + projectList.length) % projectList.length;
    let count = 0;
    while (isComingSoon(projectList[idx]) && count < projectList.length) {
      idx = (idx - 1 + projectList.length) % projectList.length;
      count++;
    }
    return projectList[idx];
  };

  const handleNextProject = () => {
    const next = getNextValidProject(currentIndex);
    if (next) {
      navigate(`/proyectos/${next.title}`);
    }
  };

  const handlePrevProject = () => {
    const prev = getPrevValidProject(currentIndex);
    if (prev) {
      navigate(`/proyectos/${prev.title}`);
    }
  };

  if (!project) {
    return <div>Proyecto no encontrado</div>;
  }

  return (
    <>
      {/* Desktop: Doble scroll */}
      <div className="w-full hidden md:flex h-screen overflow-hidden gap-4">
        {/* Columna izquierda con scroll independiente */}
        <div
          className="w-1/3 max-w-[420px] h-full overflow-y-auto no-scrollbar flex flex-col gap-4"
          ref={leftColRef}
        >
          {/* <InfoProjects project={project} /> */}
          <InfoProjectDetails
            projectDescription={project.description || ''}
            projectLocationDescription={project.location || ''}
            projectColaborators={project.colaborators || []}
            projectTools={project.tools || []}
            project={project}
          />
          <div className="flex flex-col space-y-2">
            <button
              onClick={handleNextProject}
              className="w-full bg-black text-white text-[15px] font-light py-3 rounded-[6px] transition-transform hover:scale-[1.03] cursor-pointer"
            >
              Ver Siguiente Proyecto
            </button>
            <button
              onClick={handlePrevProject}
              className="w-full bg-[#767575] text-[15px] font-light text-white py-3 rounded-[6px] transition-transform hover:scale-[1.03] cursor-pointer"
            >
              Ir Atrás
            </button>
          </div>
        </div>

        {/* Columna derecha con scroll independiente */}
        <div
          className="flex-1 h-full overflow-y-auto no-scrollbar"
          ref={rightColRef}
        >
          <div className="grid grid-cols-2 gap-4 auto-rows-auto">
            {project.images && project.images.length > 0 ? (
              project.images.map((img, idx) => (
                <div
                  key={idx}
                  className={`bg-[#E9E9E9] rounded-lg overflow-hidden ${
                    img.layout === 'full' ? 'col-span-2' : 'col-span-1'
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
      </div>

      {/* Mobile: todo en scroll natural */}
      <div className="md:hidden flex flex-col w-full space-y-3">
        <InfoProjects project={project} />

        {/* Imágenes */}
        <div className="grid grid-cols-2 gap-4 auto-rows-auto">
          {project.images && project.images.length > 0 ? (
            project.images.map((img, idx) => (
              <div
                key={idx}
                className={`bg-[#E9E9E9] rounded-lg overflow-hidden ${
                  img.layout === 'full' ? 'col-span-2' : 'col-span-1'
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

        <InfoProjectDetailsMobile
          projectDescription={project.description || ''}
          projectLocationDescription={project.location || ''}
          projectColaborators={project.colaborators || []}
          projectTools={project.tools || []}
          project={project}
        />

        <div className="flex flex-col space-y-2">
          <button
            onClick={handleNextProject}
            className="w-full bg-black text-white text-[15px] font-light py-3 rounded-[6px] transition-transform hover:scale-[1.03] duration-200  cursor-pointer"
          >
            Ver Siguiente Proyecto
          </button>
          <button
            onClick={handlePrevProject}
            className="w-full bg-[#767575] text-[15px] font-light text-white py-3 rounded-[6px] transition-transform hover:scale-[1.03]  cursor-pointer mb-4"
          >
            Ir Atrás
          </button>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
