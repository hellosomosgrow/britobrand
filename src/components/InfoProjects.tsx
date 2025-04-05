import { useState } from 'react';

const InfoProjects = ({
  projectTitle,
  projectType,
  projectDescription,
  projectLocationDescription,
  projectColaborators,
  projectTools,
}: {
  projectTitle: string;
  projectType: string;
  projectDescription: string;
  projectLocationDescription: string;
  projectColaborators: string[];
  projectTools: string[];
}) => {
  const [expandedSections, setExpandedSections] = useState({
    info: true,
    location: true,
    featured: true,
    tools: true,
  });

  const toggleExpand = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="bg-[#E9E9E9] text-gray-800 rounded-lg shadow p-4">
      {/* Sección Info */}
      <div className="border-b border-gray-300 pb-4 mb-4 last:border-b-0">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm">Info</span>
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
      <div className="border-b border-gray-300 pb-4 mb-4 last:border-b-0">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm">Ubicación</span>
          <button
            onClick={() => toggleExpand('location')}
            className="text-xs hover:underline"
          >
            {expandedSections.location ? 'Ver Menos' : 'Ver Más'}
          </button>
        </div>
        <h3 className="text-[15px] font-semibold">Ubicación</h3>
        <div className={expandedSections.location ? '' : 'hidden'}>
          <p className="mt-2 text-sm text-[#767575]">
            {projectLocationDescription}
          </p>
        </div>
      </div>

      {/* Sección Work Featured In */}
      <div className="border-b border-gray-300 pb-4 mb-4 last:border-b-0">
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
      <div className="border-b border-gray-300 pb-4 last:border-b-0">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold">Herramientas</span>
          <button
            onClick={() => toggleExpand('tools')}
            className="text-sm hover:underline"
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
