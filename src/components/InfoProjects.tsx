import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InfoProjects = ({
  projectTitle,
  projectType,
  projectDescription,
  projectLocationDescription,
  projectColaborators,
  projectTools,
  project,
}: {
  projectTitle: string;
  projectType: string;
  projectDescription: string;
  projectLocationDescription: string;
  projectColaborators: string[];
  projectTools: string[];
  project: {
    image?: string;
    title?: string;
    type?: string;
  };
}) => {
  const [expandedSections, setExpandedSections] = useState({
    info: true,
    location: true,
    featured: true,
    tools: true,
  });

  const toggleExpand = (
    section: 'info' | 'location' | 'featured' | 'tools'
  ) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate(`/proyectos/${project.title}`);
  };

  return (
    <div className="bg-[#E9E9E9] text-gray-800 rounded-lg shadow py-4">
      {/* Sección Card Principal */}
      <div className="border-b border-[#767575]  pb-4 px-4 mb-4 last:border-b-0">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-[14px]">Proyectos</h2>
          <button
            onClick={handleViewMore}
            className="bg-[#CAC8C8] text-gray-800 px-2 py-1 rounded-[14px] text-xs hover:bg-gray-300 transition duration-200"
          >
            {'Ver Más'}
          </button>
        </div>
        <div className="flex space-x-4">
          <img
            src={project?.image}
            alt={project?.title}
            className="w-16 h-auto object-cover rounded-[10px] text-[15px]"
          />
          <div className="mb-2">
            <h3 className="text-[15px] font-semibold">{project.title}</h3>
            <p>{project?.type}</p>
          </div>
        </div>
      </div>

      {/* Sección Info */}
      <div className="border-b border-[#767575] pb-4 px-4 mb-4 last:border-b-0">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm">Nombre del proyecto</span>
          <button
            onClick={() => toggleExpand('info')}
            className="text-xs hover:underline"
          >
            {expandedSections.info ? 'Ver Menos' : 'Ver Más'}
          </button>
        </div>
        <h3 className="text-[15px] font-semibold">{projectTitle}</h3>
        <p className="text-sm font-light text-[#767575]">{projectType}</p>
        <div className={expandedSections.info ? '' : 'hidden'}>
          <p className="mt-2 text-sm text-[#767575]">{projectDescription}</p>
        </div>
      </div>

      {/* Sección Ubicación */}
      <div className="border-b border-[#767575]  pb-4 px-4 mb-4 last:border-b-0">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm">Ubicación</span>
          <button
            onClick={() => toggleExpand('location')}
            className="text-xs hover:underline"
          >
            {expandedSections.location ? 'Ver Menos' : 'Ver Más'}
          </button>
        </div>
        <h3 className="text-[15px] font-semibold">Resume</h3>
        <div className={expandedSections.location ? '' : 'hidden'}>
          <p className="mt-2 text-sm text-[#767575]">
            {projectLocationDescription}
          </p>
        </div>
      </div>

      {/* Sección Work Featured In */}
      <div className="border-b border-[#767575] pb-4 px-4 mb-4 last:border-b-0">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm">Work Featured In</span>
          <button
            onClick={() => toggleExpand('featured')}
            className="text-xs hover:underline"
          >
            {expandedSections.featured ? 'Ver Menos' : 'Ver Más'}
          </button>
        </div>
        <div className={expandedSections.featured ? '' : 'hidden'}>
          <ul className="list-none text-sm">
            {projectColaborators.map((colab, index) => {
              const [name, role] = colab.split(' - ');
              return (
                <li key={index}>
                  <span className="font-semibold">{name}</span>
                  {' - '}
                  <span className="font-light text-[#767575]">{role}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Sección Herramientas */}
      <div className="border-b border-gray-300 pb-4 px-4 last:border-b-0">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold">Herramientas</span>
          <button
            onClick={() => toggleExpand('tools')}
            className="text-xs hover:underline"
          >
            {expandedSections.tools ? 'Ver Menos' : 'Ver Más'}
          </button>
        </div>
        <div className={expandedSections.tools ? '' : 'hidden'}>
          <div className="flex gap-3 mt-2">
            {projectTools.map((tool, index) => (
              <img
                key={index}
                src={tool}
                alt={`Tool ${index}`}
                className="rounded-md"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoProjects;
