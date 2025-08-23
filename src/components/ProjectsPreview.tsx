import ProjectPreviewCard from './ProjectPreviewCard';
import { projectsLarge } from '@/data/projectsData';
import { useNavigate } from 'react-router-dom';
import LazyImage from './LazyImage';
import { covernuevoproyecto } from '@/assets/optimized-images';

type ProjectsPreviewProps = {
  columnsDesktop?: number; // Por defecto 3
  showComingSoon?: boolean; // Por defecto true
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

const ProjectsPreview = ({
  columnsDesktop,
  showComingSoon = true,
}: ProjectsPreviewProps) => {
  const cols = columnsDesktop ?? 3;

  // Filtrar proyectos según showComingSoon
  const filteredProjects = showComingSoon
    ? projectsLarge
    : projectsLarge.filter((project) => project.type !== 'Se viene algo nuevo');

  const totalProjects = filteredProjects.length;
  const remainder = totalProjects % cols;
  const newComingCards = showComingSoon
    ? remainder === 0
      ? 0
      : cols - remainder
    : 0;

  // Para mobile: primeros 9 proyectos con ProjectPreviewLargeCard, resto con ProjectPreviewCard
  const first9Projects = filteredProjects.slice(0, 9);
  const remainingProjects = filteredProjects.slice(9);

  return (
    <div className="w-full space-y-4">
      {/* Escritorio: todos los proyectos large */}
      <div className={`hidden md:grid ${getColsClass(columnsDesktop)} gap-4`}>
        {filteredProjects.map((project, index) => (
          <ProjectPreviewLargeCard
            key={`${project.title}-${index}`}
            project={project}
          />
        ))}
        {/* Cards "Se viene algo nuevo" solo si hace falta y showComingSoon es true */}
        {showComingSoon &&
          Array.from({ length: newComingCards }).map((_, idx) => (
            <div key={`coming-soon-${idx}`} className="">
              <LazyImage
                src={covernuevoproyecto}
                alt="Se viene algo nuevo"
                className="w-full h-auto"
              />
              <span className="font-semibold text-sm p-1">NUEVO PROYECTO</span>
            </div>
          ))}
      </div>

      {/* Mobile: primeros 9 proyectos con ProjectPreviewLargeCard, resto con ProjectPreviewCard */}
      <div className="md:hidden space-y-4">
        {/* Primeros 9 proyectos */}
        <div className="grid grid-cols-1 gap-4">
          {first9Projects.map((project, index) => (
            <ProjectPreviewLargeCard
              key={`${project.title}-mobile-${index}`}
              project={project}
            />
          ))}
        </div>

        {/* Resto de proyectos */}
        {remainingProjects.length > 0 && (
          <div className="grid grid-cols-1 gap-4">
            {remainingProjects.map((project, index) => (
              <ProjectPreviewCard
                key={`${project.title}-mobile-card-${index}`}
                project={project}
              />
            ))}
          </div>
        )}
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
      <LazyImage
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
